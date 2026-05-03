import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const milestones = [
    {
      icon: '🌱',
      title: 'Started Coding — HTML & CSS',
      period: 'Jun 2024',
      description:
        'Started from absolute zero. Built my very first webpage and felt the excitement of seeing something appear on screen — this is where it all began.',
      skills: ['HTML', 'CSS'],
      gradient: 'from-violet-500 to-purple-500',
      shadow: 'shadow-violet-500/25 dark:shadow-violet-900/40',
      badgeBg: 'bg-violet-50 dark:bg-violet-500/10',
      badgeText: 'text-violet-700 dark:text-violet-300',
      badgeBorder: 'border-violet-100 dark:border-violet-500/20',
    },
    {
      icon: '⚡',
      title: 'Mastered JavaScript',
      period: 'Oct 2024',
      description:
        'Just 4 months in, moved on to JavaScript. Logic, functions, DOM manipulation — every new concept opened a new door. The language that made the web come alive.',
      skills: ['JavaScript', 'DOM', 'ES6+'],
      gradient: 'from-purple-500 to-pink-500',
      shadow: 'shadow-purple-500/25 dark:shadow-purple-900/40',
      badgeBg: 'bg-purple-50 dark:bg-purple-500/10',
      badgeText: 'text-purple-700 dark:text-purple-300',
      badgeBorder: 'border-purple-100 dark:border-purple-500/20',
    },
    {
      icon: '⚛️',
      title: 'Frontend Frameworks — React & Next.js',
      period: 'Jan 2025',
      description:
        'Entered the world of component-based architecture. Learned React then moved to Next.js — mastering SSR, routing, and modern web development patterns.',
      skills: ['React', 'Next.js', 'Tailwind CSS'],
      gradient: 'from-pink-500 to-rose-500',
      shadow: 'shadow-pink-500/25 dark:shadow-pink-900/40',
      badgeBg: 'bg-pink-50 dark:bg-pink-500/10',
      badgeText: 'text-pink-700 dark:text-pink-300',
      badgeBorder: 'border-pink-100 dark:border-pink-500/20',
    },
    {
      icon: '🛠️',
      title: 'Backend & Databases — Became Full-Stack',
      period: 'Mid 2025',
      description:
        'Time to conquer the server side. Built REST APIs with Node & Express, handled databases with MongoDB and PostgreSQL, and learned Prisma as an ORM.',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Prisma'],
      gradient: 'from-emerald-500 to-teal-500',
      shadow: 'shadow-emerald-500/25 dark:shadow-emerald-900/40',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-500/10',
      badgeText: 'text-emerald-700 dark:text-emerald-300',
      badgeBorder: 'border-emerald-100 dark:border-emerald-500/20',
    },
    {
      icon: '🎯',
      title: 'Building Projects & Seeking Opportunities',
      period: 'Late 2025 → Now',
      description:
        'From HTML to full-stack in just over a year. Now actively building real-world projects, sharpening my skills every day, and ready for my first professional opportunity.',
      skills: ['Full-Stack', 'Open to Work'],
      gradient: 'from-violet-500 to-pink-500',
      shadow: 'shadow-violet-500/25 dark:shadow-violet-900/40',
      badgeBg: 'bg-violet-50 dark:bg-violet-500/10',
      badgeText: 'text-violet-700 dark:text-violet-300',
      badgeBorder: 'border-violet-100 dark:border-violet-500/20',
      isCurrent: true,
    },
  ];

  const stats = [
    { value: '~1', label: 'Year Journey' },
    { value: '10+', label: 'Technologies' },
    { value: 'FS', label: 'Full-Stack' },
  ];

  return (
    <section
      id="journey"
      className="py-24 lg:py-36
                 bg-gradient-to-b from-white via-slate-50/50 to-white
                 dark:bg-gradient-to-b dark:from-[#080810] dark:via-[#0b0b15] dark:to-[#080810]"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-[0.2em] mb-3">
            From zero to full-stack
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            My{' '}
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px
                          bg-gradient-to-b from-violet-500 via-pink-500 to-transparent
                          opacity-30 dark:opacity-40" />

          <div className="space-y-10">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Icon Dot */}
                <div className="relative flex-shrink-0 w-12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.2, type: 'spring' }}
                    className={`w-12 h-12 rounded-2xl
                                bg-gradient-to-br ${item.gradient}
                                flex items-center justify-center text-lg
                                shadow-lg ${item.shadow}
                                relative z-10 flex-shrink-0
                                ${item.isCurrent ? 'ring-4 ring-violet-500/20 dark:ring-violet-400/20' : ''}`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex-1 pb-2"
                >
                  <div
                    className={`p-5 sm:p-6 rounded-[1.75rem]
                                bg-white dark:bg-[#0f0f1a]
                                transition-all duration-400
                                ${item.isCurrent
                                  ? 'border-2 border-violet-300 dark:border-violet-500/30 shadow-md shadow-violet-500/10 dark:shadow-violet-900/20'
                                  : 'border border-gray-100 dark:border-white/[0.06] shadow-sm hover:shadow-xl hover:shadow-violet-500/8 dark:hover:shadow-violet-900/20 hover:border-violet-200 dark:hover:border-violet-500/20'
                                }`}
                  >
                    {/* NOW badge */}
                    {item.isCurrent && (
                      <div className="flex justify-end mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1
                                         bg-gradient-to-r from-violet-500 to-pink-500
                                         text-white text-[10px] font-black uppercase tracking-widest
                                         rounded-full">
                          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                          Now
                        </span>
                      </div>
                    )}

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-gray-900 dark:text-white leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <span
                        className={`inline-flex items-center px-3 py-1.5
                                    ${item.badgeBg} ${item.badgeText}
                                    border ${item.badgeBorder}
                                    text-xs font-bold rounded-xl whitespace-nowrap flex-shrink-0`}
                      >
                        {item.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Stats row — only on current milestone */}
                    {item.isCurrent && (
                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {stats.map((stat, i) => (
                          <div
                            key={i}
                            className="text-center py-3 px-2
                                       bg-violet-50 dark:bg-violet-500/10
                                       border border-violet-100 dark:border-violet-500/20
                                       rounded-2xl"
                          >
                            <div className="text-xl font-black text-violet-600 dark:text-violet-400 leading-none">
                              {stat.value}
                            </div>
                            <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 font-semibold uppercase tracking-wide">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wide
                                      ${item.isCurrent && (skill === 'Full-Stack' || skill === 'Open to Work')
                                        ? `${item.badgeBg} ${item.badgeText} border ${item.badgeBorder}`
                                        : 'bg-gray-100 dark:bg-white/[0.05] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.07]'
                                      }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;