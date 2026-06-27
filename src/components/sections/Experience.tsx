'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { experiences } from '@/data/portfolioData'

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Experience() {
  const router = useRouter()

  return (
    <section
      id="experience"
      className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-10 pb-24 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-80px' }}
        transition={{ duration: 0.9, ease: smoothEase }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3">Experience</h2>
        <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
          Professional Journey
        </p>
      </motion.div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="hidden md:block absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-white/5 via-white/30 to-white/5 origin-top"
        />

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, margin: '-70px' }}
              transition={{ duration: 0.75, delay: index * 0.05, ease: smoothEase }}
              whileHover={{ y: -4 }}
              className="relative md:pl-16"
            >
              <div className="hidden md:flex absolute left-0 top-8 w-12 h-12 rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl items-center justify-center">
                <BriefcaseBusiness size={18} className="text-white/75" />
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/[0.05] backdrop-blur-xl p-5 md:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                  <div>
                    <p className="text-[12px] text-white/45 mb-2">{experience.role}</p>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                      {experience.company}
                    </h3>
                    <div className="h-[2px] w-14 rounded-full bg-gradient-to-r from-white/40 to-white/5 mt-4 mb-5" />
                    <p className="text-sm leading-7 text-white/60 max-w-3xl">
                      {experience.description}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:min-w-[230px]">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 flex items-center gap-3">
                      <CalendarDays size={15} className="text-white/55" />
                      <span className="text-[12px] text-white/65">{experience.duration}</span>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 flex items-center gap-3">
                      <MapPin size={15} className="text-white/55" />
                      <span className="text-[12px] text-white/65">{experience.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid md:grid-cols-[1fr_auto] gap-5 items-end">
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.slice(0, 8).map((technology) => (
                      <motion.span
                        key={technology}
                        whileHover={{ y: -2, scale: 1.03 }}
                        className="px-3 py-2 rounded-xl bg-white/[0.045] border border-white/10 text-[11px] text-white/75"
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>

                  <button
                    onClick={() => router.push(`/experience/${experience.id}`)}
                    className="justify-self-start md:justify-self-end px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all flex items-center gap-2 text-[13px]"
                  >
                    View Details
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
