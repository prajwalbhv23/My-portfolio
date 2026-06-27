'use client'

import { useMemo, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Box,
  BriefcaseBusiness,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitBranch,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { getExperienceById } from '@/data/portfolioData'

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function ExperienceDetailPage() {
  const { id } = useParams<{ id: string }>()
  const router = useRouter()
  const experience = getExperienceById(String(id))
  const [currentImage, setCurrentImage] = useState(0)

  const images = useMemo(
    () => Array.from(new Set(experience?.images || [])),
    [experience?.images]
  )

  if (!experience) {
    return (
      <main className="min-h-screen bg-[#0d0d0d] text-white flex items-center justify-center px-6">
        <div className="rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-5 text-sm text-white/60">
          Experience not found.
        </div>
      </main>
    )
  }

  const nextImage = () => {
    setCurrentImage((prev) => Math.min(prev + 1, images.length - 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => Math.max(prev - 1, 0))
  }

  const chipList = (items: string[]) => (
    <div className="flex flex-wrap gap-2">
      {items.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.025, duration: 0.42, ease: smoothEase }}
          whileHover={{ y: -2, scale: 1.03 }}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.045] border border-white/10 text-[11px] text-white/75 backdrop-blur-xl"
        >
          <Box size={11} className="text-white/40" />
          {item}
        </motion.span>
      ))}
    </div>
  )

  const listCard = (title: string, items: string[]) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: smoothEase }}
      className="rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5"
    >
      <p className="text-sm font-semibold mb-3">{title}</p>
      <ul className="space-y-2 text-[12px] text-white/62 leading-6">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-white/35">{'\u2022'}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )

  return (
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
            onClick={() => router.push('/#experience')}
            className="inline-flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-all duration-300 mb-6"
          >
            <ArrowLeft size={14} />
            Back
          </button>

          <p className="text-[12px] text-white/45 mb-2">{experience.role}</p>
          <h1 className="text-[34px] md:text-[54px] xl:text-[64px] font-bold leading-tight tracking-tight mb-4">
            {experience.company}
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 82 }}
            transition={{ duration: 0.9, delay: 0.12, ease: smoothEase }}
            className="h-[2px] rounded-full bg-gradient-to-r from-white/45 to-white/5 mb-6"
          />

          <div className="grid sm:grid-cols-2 gap-3 max-w-xl mb-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 flex items-center gap-3">
              <CalendarDays size={16} className="text-white/55" />
              <span className="text-[12px] text-white/65">{experience.duration}</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 flex items-center gap-3">
              <MapPin size={16} className="text-white/55" />
              <span className="text-[12px] text-white/65">{experience.location}</span>
            </div>
          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 mb-7">
            <p className="text-sm font-semibold mb-3">Overview</p>
            <p className="text-sm leading-7 text-white/62">{experience.overview}</p>
          </div>

          <div className="space-y-5 mb-8">
            {listCard('Responsibilities', experience.responsibilities)}
            {listCard('Achievements', experience.achievements)}
          </div>

          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold mb-3">Technologies</p>
              {chipList(experience.technologies)}
            </div>
            <div>
              <p className="text-sm font-semibold mb-3">Tools</p>
              {chipList(experience.tools)}
            </div>
          </div>
        </motion.section>

        <motion.aside
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: smoothEase }}
          className="w-full pt-4 lg:pt-14 space-y-5"
        >
          {images.length > 0 && (
            <div className="rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-3">
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-black/20">
                <motion.img
                  key={images[currentImage]}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, ease: smoothEase }}
                  src={images[currentImage]}
                  alt={experience.company}
                  className="w-full aspect-[16/10] object-cover"
                />

                {images.length > 1 && (
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
                      disabled={currentImage === images.length - 1}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 disabled:opacity-35 backdrop-blur-md flex items-center justify-center hover:bg-black/80 transition-all duration-300"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <BriefcaseBusiness size={15} className="text-white/70" />
              <p className="text-sm font-semibold">Timeline</p>
            </div>
            <div className="space-y-4">
              {experience.timeline.map((item) => (
                <div key={item.label} className="relative pl-6">
                  <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-white/70" />
                  <p className="text-[12px] font-semibold text-white/82">{item.label}</p>
                  <p className="text-[12px] text-white/55 leading-6">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-white/70" />
              <p className="text-sm font-semibold">Projects Completed</p>
            </div>

            {experience.projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -3 }}
                className="rounded-[26px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5"
              >
                <h2 className="text-xl font-bold mb-3">{project.title}</h2>
                <p className="text-[13px] leading-6 text-white/60 mb-4">{project.description}</p>

                {project.technologies && (
                  <div className="mb-4">
                    <p className="text-[12px] font-semibold mb-2">Technologies</p>
                    {chipList(project.technologies)}
                  </div>
                )}

                {project.keyFeatures && listCard('Key Features', project.keyFeatures)}
                {project.keyWork && listCard('Key Work', project.keyWork)}

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-[12px] font-semibold mb-2">Outcome</p>
                  <p className="text-[12px] leading-6 text-white/60">{project.outcome}</p>
                </div>

                {(project.githubUrl || project.demoUrl) && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white text-black text-[12px] font-semibold"
                      >
                        <ExternalLink size={13} />
                        Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-[12px]"
                      >
                        <GitBranch size={13} />
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </motion.aside>
      </div>
    </main>
  )
}
