import React from 'react';
import { motion } from 'framer-motion';
import mdSalimImg from "../assets/mdsalim.jpg";
import { MapPin, Briefcase, Mail, Clock } from 'lucide-react';

const About = () => {
  const facts = [
    { icon: MapPin, label: 'Location', value: 'Rangpur, Bangladesh' },
    { icon: Briefcase, label: 'Experience', value: '3+ Years' },
    { icon: Clock, label: 'Availability', value: 'Open for Freelance' },
    { icon: Mail, label: 'Email', value: 'salim@example.com' },
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-36
                 bg-gradient-to-b from-white via-slate-50/80 to-white
                 dark:bg-gradient-to-b dark:from-[#080810] dark:via-[#0d0d18] dark:to-[#080810]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-[0.2em] mb-3">
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-6 bg-gradient-to-br from-violet-100 to-pink-100
                              dark:from-violet-900/20 dark:to-pink-900/20
                              rounded-[3rem] -rotate-3" />

              {/* Image */}
              <div className="relative rounded-[2.5rem] overflow-hidden
                              border-2 border-white dark:border-white/10
                              shadow-2xl shadow-violet-200/60 dark:shadow-violet-900/30
                              w-full max-w-sm">
                <img
                  src={mdSalimImg}
                  alt="Salim Islam"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating experience badge */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6
                           bg-white dark:bg-[#13131f]
                           border border-gray-100 dark:border-white/10
                           rounded-2xl px-5 py-4
                           shadow-xl shadow-black/10 dark:shadow-black/40"
              >
                <p className="text-3xl font-black text-gray-900 dark:text-white">3+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Years of<br />Experience</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-6 -left-6
                           bg-white dark:bg-[#13131f]
                           border border-gray-100 dark:border-white/10
                           rounded-2xl px-5 py-4
                           shadow-xl shadow-black/10 dark:shadow-black/40"
              >
                <p className="text-3xl font-black text-gray-900 dark:text-white">20+</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Projects<br />Completed</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-7"
          >
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
                Salim Islam
              </span>
            </h3>

            <div className="space-y-4">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a passionate{' '}
                <span className="font-semibold text-violet-700 dark:text-violet-300">Full Stack Developer</span>{' '}
                from Bangladesh with a love for building beautiful, performant, and user-friendly web applications.
                I enjoy turning complex problems into simple, elegant solutions.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I've worked with modern technologies like{' '}
                <span className="font-semibold text-gray-800 dark:text-gray-200">React, Next.js, Node.js,</span> and{' '}
                <span className="font-semibold text-gray-800 dark:text-gray-200">Tailwind CSS</span>.
                I believe in continuous learning and always stay updated with the latest trends.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source,
                or enjoying a good cup of tea while planning my next big project.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {facts.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="group flex items-center gap-3 p-4 rounded-2xl
                             bg-white dark:bg-white/[0.03]
                             border border-gray-100 dark:border-white/[0.06]
                             hover:border-violet-200 dark:hover:border-violet-500/30
                             hover:bg-violet-50/50 dark:hover:bg-violet-500/5
                             shadow-sm hover:shadow-md
                             transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-500/10
                                  flex items-center justify-center flex-shrink-0
                                  group-hover:bg-violet-200 dark:group-hover:bg-violet-500/20
                                  transition-colors duration-300">
                    <fact.icon size={16} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{fact.label}</p>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 truncate mt-0.5">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;