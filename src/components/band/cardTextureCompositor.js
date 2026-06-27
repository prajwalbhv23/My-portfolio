import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';

/**
 * UV bounds for the portrait area on the card texture atlas (kartu.glb).
 * Derived from mesh TEXCOORD_0 analysis — only this region is replaced.
 */
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

/**
 * Draw image with object-fit: cover into destination rect (centered crop, no stretch).
 */
function drawCoverImage(ctx, image, dx, dy, dw, dh) {
  const imgRatio = image.width / image.height;
  const boxRatio = dw / dh;

  let sx;
  let sy;
  let sw;
  let sh;

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

/**
 * Load pp.png fresh on each mount (avoids stale drei/browser cache during dev).
 */
export function useProfileImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      if (!cancelled) setImage(img);
    };
    img.onerror = () => {
      if (!cancelled) setImage(null);
    };
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
 * Composites pp.png over the portrait slot of the embedded card atlas.
 * Preserves frame, background pattern, name label, and all other atlas regions.
 */
export function useCompositedCardMap(baseMaterial, profileImage) {
  const [compositedMap, setCompositedMap] = useState(null);
  const canvasRef = useRef(null);
  const textureRef = useRef(null);

  useEffect(() => {
    const baseImage = baseMaterial?.map?.image;

    if (!baseImage?.width || !profileImage?.width) return;

    const width = baseImage.width;
    const height = baseImage.height;

    if (!canvasRef.current) {
      canvasRef.current = document.createElement('canvas');
    }

    const canvas = canvasRef.current;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    const composite = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(baseImage, 0, 0, width, height);

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
    };

    composite();

    return () => {
      textureRef.current?.dispose();
      textureRef.current = null;
    };
  }, [baseMaterial, profileImage]);

  return compositedMap;
}
