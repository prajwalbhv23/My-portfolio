'use client'

import { useEffect, useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  Box,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  GitBranch,
  Layers,
  Sparkles,
  X,
} from 'lucide-react'
import { fetchProjectById } from '@/lib/portfolioService'
import type { Project } from '@/data/portfolioData'

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

type ProjectLike = Omit<Partial<Project>, 'key_features' | 'technologies' | 'image_urls'> & {
  key_features?: string[] | string
  image_urls?: string[] | string
  technologies?: string[] | string
}

const toList = (value?: string[] | string | null) => {
  if (!value) return []
  if (Array.isArray(value)) return value.filter(Boolean)
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

const detailSections = [
  ['Overview', 'overview'],
  ['Problem Statement', 'problemStatement'],
  ['Objective', 'objective'],
  ['Solution', 'solution'],
  ['Workflow', 'workflow'],
  ['Impact', 'impact'],
] as const

const optionalListSections = [
  ['Architecture', 'architecture'],
  ['Challenges', 'challenges'],
  ['Future Improvements', 'futureImprovements'],
  ['Results', 'results'],
  ['Lessons Learned', 'lessonsLearned'],
] as const

export default function PortfolioDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()

  const [project, setProject] = useState<ProjectLike | null>(null)
  const [currentImage, setCurrentImage] = useState(0)
  const [previewOpen, setPreviewOpen] = useState(false)

  useEffect(() => {
    const loadProject = async () => {
      const data = await fetchProjectById(String(id))
      setProject(data as ProjectLike | null)
    }

    loadProject()
  }, [id])

  const technologies = useMemo(
    () => toList(project?.technologies),
    [project?.technologies]
  )

  const features = useMemo(
    () => toList(project?.features || project?.key_features),
    [project?.features, project?.key_features]
  )

  const galleryImages = useMemo(() => {
    if (!project) return []

    const images = [
      ...toList(project.images),
      ...toList(project.image_urls),
      project.image,
      project.image_url,
    ].filter(Boolean) as string[]

    return Array.from(new Set(images))
  }, [project])

  const demoUrl = project?.demoUrl || project?.live_url || ''
  const githubUrl = project?.githubUrl || project?.github_url || ''

  const nextImage = () => {
    setCurrentImage((prev) => Math.min(prev + 1, galleryImages.length - 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => Math.max(prev - 1, 0))
  }

  const handleBack = () => {
    sessionStorage.setItem('skipIntroOnce', 'true')
    router.push('/#portfolio')
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 text-sm text-white/60"
        >
          Loading project details...
        </motion.div>
      </main>
    )
  }

  return (
    <>
      <AnimatePresence>
        {previewOpen && galleryImages[currentImage] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center px-6"
          >
            <button
              aria-label="Close preview"
              onClick={() => setPreviewOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <X size={18} />
            </button>

            {galleryImages.length > 1 && currentImage > 0 && (
              <button
                aria-label="Previous image"
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            <motion.img
              key={galleryImages[currentImage]}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              src={galleryImages[currentImage]}
              alt={project.title}
              className="max-w-[88vw] max-h-[82vh] rounded-3xl object-contain border border-white/10"
            />

            {galleryImages.length > 1 && currentImage < galleryImages.length - 1 && (
              <button
                aria-label="Next image"
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen text-white px-6 md:px-10 lg:px-16 py-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#1a1a1a_0%,#0a0a0a_35%,#050505_100%)]" />

        <div className="max-w-[1450px] mx-auto grid lg:grid-cols-[1fr_0.9fr] gap-10 xl:gap-14 items-start">
          <motion.section
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.95, ease: smoothEase }}
            className="pt-2 lg:pt-8"
          >
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-all duration-300 mb-6"
            >
              <ArrowLeft size={14} />
              Back
            </button>

            <h1 className="text-[32px] md:text-[48px] xl:text-[58px] font-bold leading-tight tracking-tight mb-4">
              {project.title}
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 82 }}
              transition={{ duration: 0.9, delay: 0.12, ease: smoothEase }}
              className="h-[2px] rounded-full bg-gradient-to-r from-white/45 to-white/5 mb-6"
            />

            <p className="text-sm md:text-[15px] leading-7 text-white/62 max-w-3xl mb-7">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-7 max-w-[480px]">
              {[
                { icon: <Code2 size={16} />, value: technologies.length, label: 'Technologies Used' },
                { icon: <Layers size={16} />, value: features.length, label: 'Key Features' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xl font-semibold">{item.value}</p>
                    <p className="text-[10px] text-white/42">{item.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {demoUrl ? (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black border border-white hover:opacity-90 transition-all duration-300 text-sm font-semibold"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/40 text-sm">
                  <ExternalLink size={14} />
                  Demo Coming Soon
                </span>
              )}

              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm"
                >
                  <GitBranch size={14} />
                  GitHub Repository
                </a>
              ) : (
                <span className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white/40 text-sm">
                  <GitBranch size={14} />
                  Repository Coming Soon
                </span>
              )}
            </div>

            <div className="space-y-4 mb-8">
              {detailSections.map(([label, key], index) => {
                const value = project[key]
                if (!value) return null

                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.04, ease: smoothEase }}
                    className="rounded-[22px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5"
                  >
                    <p className="text-[12px] font-semibold text-white/85 mb-2">{label}</p>
                    <p className="text-[13px] leading-6 text-white/58">{value}</p>
                  </motion.div>
                )
              })}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Code2 size={14} className="text-white/70" />
                <p className="text-[13px] font-semibold">Technologies</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + index * 0.035, duration: 0.45, ease: smoothEase }}
                    whileHover={{ y: -2, scale: 1.03 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.045] border border-white/10 text-[11px] text-white/75 backdrop-blur-xl"
                  >
                    <Box size={11} className="text-white/40" />
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.aside
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: smoothEase }}
            className="w-full pt-4 lg:pt-14 space-y-5"
          >
            {galleryImages.length > 0 && (
              <div className="rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-3">
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black/20">
                  <motion.img
                    key={galleryImages[currentImage]}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, ease: smoothEase }}
                    src={galleryImages[currentImage]}
                    alt={project.title}
                    onClick={() => setPreviewOpen(true)}
                    className="w-full aspect-[16/10] object-cover cursor-pointer"
                  />

                  {galleryImages.length > 1 && (
                    <>
                      <button
                        aria-label="Previous image"
                        onClick={prevImage}
                        disabled={currentImage === 0}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 disabled:opacity-35 backdrop-blur-md flex items-center justify-center hover:bg-black/80 transition-all duration-300"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        aria-label="Next image"
                        onClick={nextImage}
                        disabled={currentImage === galleryImages.length - 1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 disabled:opacity-35 backdrop-blur-md flex items-center justify-center hover:bg-black/80 transition-all duration-300"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </>
                  )}
                </div>

                {galleryImages.length > 1 && (
                  <div className="flex justify-center gap-2 mt-3">
                    {galleryImages.map((image, index) => (
                      <button
                        key={image}
                        aria-label={`Show image ${index + 1}`}
                        onClick={() => setCurrentImage(index)}
                        className={`rounded-full transition-all duration-300 ${
                          currentImage === index
                            ? 'w-6 h-1.5 bg-white'
                            : 'w-1.5 h-1.5 bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            <motion.div
              whileHover={{ y: -2 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={14} className="text-white/70" />
                <p className="text-sm font-semibold">Key Features</p>
              </div>

              <ul className="space-y-3 text-[12px] text-white/65 leading-6">
                {features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 24 : -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5, ease: smoothEase }}
                    className="flex gap-3"
                  >
                    <span className="text-white/35">{'\u2022'}</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {optionalListSections.map(([label, key], sectionIndex) => {
              const values = toList(project[key] as string[] | string | null)
              if (values.length === 0) return null

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.16 + sectionIndex * 0.04, duration: 0.5, ease: smoothEase }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5"
                >
                  <p className="text-sm font-semibold mb-3">{label}</p>
                  <ul className="space-y-2 text-[12px] text-white/60 leading-6">
                    {values.map((value) => (
                      <li key={value} className="flex gap-3">
                        <span className="text-white/35">{'\u2022'}</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.aside>
        </div>
      </main>
    </>
  )
}
