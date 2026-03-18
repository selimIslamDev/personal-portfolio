import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2020 – Present",
      type: "Full-time",
      description:
        "Leading frontend development for enterprise clients, implementing modern frameworks, optimizing performance, and mentoring junior developers. Working with React, TypeScript, and Tailwind CSS on large-scale applications.",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2019 – 2020",
      type: "Full-time",
      description:
        "Developed responsive web applications using React and Vue.js. Collaborated with designers and backend teams to deliver pixel-perfect, high-performance user interfaces.",
      skills: ["React", "Vue.js", "SCSS"],
    },
    {
      title: "Web Developer",
      company: "StartUp Studio",
      period: "2018 – 2019",
      type: "Contract",
      description:
        "Built full-stack web applications from scratch using JavaScript, HTML, CSS, and PHP. Focused on clean, maintainable code and improving user experience.",
      skills: ["JavaScript", "PHP", "MySQL"],
    },
    {
      title: "Junior Web Developer",
      company: "Freelance",
      period: "2017 – 2018",
      type: "Freelance",
      description:
        "Started my professional journey as a freelancer, building websites for small businesses and learning modern web technologies hands-on.",
      skills: ["HTML", "CSS", "jQuery"],
    },
  ];

  return (
    <section
      id="experience"
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
            Career path
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            Work{' '}
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
              Experience
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
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative flex gap-8"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 w-12 flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.2, type: 'spring' }}
                    className="w-12 h-12 rounded-2xl
                               bg-gradient-to-br from-violet-500 to-pink-500
                               flex items-center justify-center
                               shadow-lg shadow-violet-500/25 dark:shadow-violet-900/40
                               relative z-10 flex-shrink-0"
                  >
                    <Briefcase size={18} className="text-white" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex-1 pb-2 group"
                >
                  <div className="p-6 rounded-[1.75rem]
                                  bg-white dark:bg-[#0f0f1a]
                                  border border-gray-100 dark:border-white/[0.06]
                                  shadow-sm hover:shadow-xl hover:shadow-violet-500/8 dark:hover:shadow-violet-900/20
                                  hover:border-violet-200 dark:hover:border-violet-500/20
                                  transition-all duration-400">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-black text-gray-900 dark:text-white leading-snug">
                          {exp.title}
                        </h3>
                        <p className="text-violet-600 dark:text-violet-400 font-semibold text-sm mt-1">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1.5">
                        <span className="inline-flex items-center px-3 py-1.5
                                         bg-violet-50 dark:bg-violet-500/10
                                         text-violet-700 dark:text-violet-300
                                         border border-violet-100 dark:border-violet-500/20
                                         text-xs font-bold rounded-xl whitespace-nowrap">
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center px-3 py-1
                                         bg-gray-100 dark:bg-white/[0.05]
                                         text-gray-500 dark:text-gray-500
                                         text-[10px] font-bold uppercase tracking-wider rounded-lg whitespace-nowrap">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-bold
                                     bg-gray-100 dark:bg-white/[0.05]
                                     text-gray-600 dark:text-gray-400
                                     border border-gray-200 dark:border-white/[0.07]
                                     rounded-lg uppercase tracking-wide"
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