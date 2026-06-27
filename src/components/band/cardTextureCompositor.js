import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';

export const PHOTO_UV_REGION = {
  uMin: 0.010906517505645752,
  uMax: 0.4888157248497009,
  vMin: 0.04152476787567139,
  vMax: 0.7381671667098999,
};

export const PROFILE_TEXTURE_PATH = '/assets/pp.png';

function uvRegionToPixels(region, width, height) {
  return {
    x: region.uMin * width,
    y: region.vMin * height,
    width: (region.uMax - region.uMin) * width,
    height: (region.vMax - region.vMin) * height,
  };
}

function drawCoverImage(ctx, image, dx, dy, dw, dh) {
  const imgRatio = image.width / image.height;
  const boxRatio = dw / dh;
  let sx, sy, sw, sh;

  if (imgRatio > boxRatio) {
    sh = image.height;
    sw = image.height * boxRatio;
    sx = (image.width - sw) / 2;
    sy = 0;
  } else {
    sw = image.width;
    sh = image.width / boxRatio;
    sx = 0;
    sy = (image.height - sh) / 2;
  }

  ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
}

export function useProfileImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => { if (!cancelled) setImage(img); };
    img.onerror = () => { if (!cancelled) setImage(null); };
    img.src = `${PROFILE_TEXTURE_PATH}?v=${Date.now()}`;

    return () => {
      cancelled = true;
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return image;
}

/**
 * Resolves baseMaterial.map.image to a drawable source.
 * In production, Three.js may give us an ImageBitmap with width=0.
 * We force-draw it onto a temp canvas to get a reliable HTMLImageElement.
 */
function resolveDrawableImage(source) {
  return new Promise((resolve, reject) => {
    if (!source) return reject(new Error('No source'));

    // Already a usable HTMLImageElement
    if (source instanceof HTMLImageElement && source.complete && source.naturalWidth > 0) {
      return resolve(source);
    }

    // ImageBitmap — draw to canvas, export as blob, reload as Image
    if (typeof ImageBitmap !== 'undefined' && source instanceof ImageBitmap) {
      if (source.width === 0) return reject(new Error('ImageBitmap width is 0'));

      const offscreen = document.createElement('canvas');
      offscreen.width = source.width;
      offscreen.height = source.height;
      const ctx = offscreen.getContext('2d');
      ctx.drawImage(source, 0, 0);

      offscreen.toBlob((blob) => {
        if (!blob) return reject(new Error('toBlob failed'));
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('img load failed')); };
        img.src = url;
      });
      return;
    }

    // HTMLVideoElement, HTMLCanvasElement, or other drawable — use directly
    if (source.width > 0) return resolve(source);

    reject(new Error('Unresolvable source'));
  });
}

export function useCompositedCardMap(baseMaterial, profileImage) {
  const [compositedMap, setCompositedMap] = useState(null);
  const canvasRef = useRef(null);
  const textureRef = useRef(null);

  useEffect(() => {
    const baseImage = baseMaterial?.map?.image;
    if (!baseImage || !profileImage?.width) return;

    let cancelled = false;

    resolveDrawableImage(baseImage)
      .then((resolvedBase) => {
        if (cancelled) return;

        const width = resolvedBase.width || resolvedBase.naturalWidth;
        const height = resolvedBase.height || resolvedBase.naturalHeight;
        if (!width || !height) return;

        if (!canvasRef.current) {
          canvasRef.current = document.createElement('canvas');
        }

        const canvas = canvasRef.current;
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(resolvedBase, 0, 0, width, height);

        const rect = uvRegionToPixels(PHOTO_UV_REGION, width, height);
        const radius = Math.min(rect.width, rect.height) * 0.085;

        ctx.save();
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
          ctx.roundRect(rect.x, rect.y, rect.width, rect.height, radius);
        } else {
          ctx.rect(rect.x, rect.y, rect.width, rect.height);
        }
        ctx.clip();
        drawCoverImage(ctx, profileImage, rect.x, rect.y, rect.width, rect.height);
        ctx.restore();

        if (!textureRef.current) {
          const tex = new THREE.CanvasTexture(canvas);
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.flipY = false;
          tex.minFilter = THREE.LinearMipmapLinearFilter;
          tex.magFilter = THREE.LinearFilter;
          tex.generateMipmaps = true;
          textureRef.current = tex;
        }

        textureRef.current.needsUpdate = true;
        setCompositedMap(textureRef.current);
      })
      .catch((err) => {
        console.warn('[CardCompositor] Could not resolve base image:', err.message);
      });

    return () => {
      cancelled = true;
      textureRef.current?.dispose();
      textureRef.current = null;
    };
  }, [baseMaterial, profileImage]);

  return compositedMap;
}
