import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import mdSalimImg from "../assets/mdsalim.jpg";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden
                 bg-gradient-to-br from-slate-50 via-white to-violet-50/40
                 dark:bg-gradient-to-br dark:from-[#080810] dark:via-[#0d0d1a] dark:to-[#0a0818]"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-200/40 dark:bg-violet-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-200/40 dark:bg-pink-900/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] dark:bg-[linear-gradient(rgba(139,92,246,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.06)_1px,transparent_1px)]" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       bg-violet-50 dark:bg-violet-500/10
                       border border-violet-200 dark:border-violet-500/20
                       text-violet-700 dark:text-violet-300 text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Freelance Work
          </motion.div>

          {/* Heading */}
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-medium text-gray-500 dark:text-gray-400 tracking-wide"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight
                         text-gray-900 dark:text-white leading-[1.05]"
            >
              Salim{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600
                               dark:from-violet-400 dark:via-purple-400 dark:to-pink-400
                               bg-clip-text text-transparent">
                Islam
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-200 h-12"
            >
              <Typewriter
                options={{
                  strings: [
                    '<span class="type-gradient">Full Stack Developer</span>',
                    '<span class="type-gradient">Frontend Enthusiast</span>',
                    '<span class="type-gradient">UI/UX Lover</span>',
                    '<span class="type-gradient">Problem Solver</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 70,
                  cursor: '<span class="custom-cursor">|</span>',
                  html: true,
                }}
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            I craft beautiful, high-performance web experiences using modern
            technologies. Turning ideas into elegant digital solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group px-7 py-3.5 bg-gradient-to-r from-violet-600 to-pink-600
                         dark:from-violet-500 dark:to-pink-500
                         text-white font-semibold rounded-2xl
                         shadow-lg shadow-violet-500/25 dark:shadow-violet-500/20
                         hover:shadow-xl hover:shadow-violet-500/40
                         hover:scale-[1.03] transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 border-2 border-gray-200 dark:border-white/10
                         text-gray-700 dark:text-gray-300
                         bg-white/60 dark:bg-white/5
                         backdrop-blur-sm font-semibold rounded-2xl
                         hover:border-violet-400 dark:hover:border-violet-500/60
                         hover:text-violet-600 dark:hover:text-violet-400
                         hover:bg-violet-50 dark:hover:bg-violet-500/10
                         hover:scale-[1.03] transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex gap-8 pt-4"
          >
            {[
              // { value: '3+', label: 'Years Exp.' },
              { value: '5+', label: 'Projects' },
    
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-violet-500 to-pink-500
                            opacity-20 dark:opacity-30 blur-2xl scale-110" />

            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-[3rem] border-2 border-dashed
                            border-violet-300/40 dark:border-violet-500/20 animate-spin-slow" />

            {/* Image wrapper */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96
                            rounded-[2.5rem] overflow-hidden
                            border-4 border-white/80 dark:border-white/10
                            shadow-2xl shadow-violet-500/20 dark:shadow-violet-900/40">
              <img
                src={mdSalimImg}
                alt="Salim Islam — Full Stack Developer"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 via-transparent to-transparent dark:from-violet-900/40" />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-8
                         bg-white dark:bg-[#13131f]
                         border border-gray-100 dark:border-white/10
                         rounded-2xl px-5 py-3 shadow-xl shadow-black/10 dark:shadow-black/40"
            >
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Tech Stack</p>
              <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">React · Node · MongoDB</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-5 -right-8
                         bg-white dark:bg-[#13131f]
                         border border-gray-100 dark:border-white/10
                         rounded-2xl px-5 py-3 shadow-xl shadow-black/10 dark:shadow-black/40"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-bold text-gray-900 dark:text-white">Open to Work</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs text-gray-400 dark:text-gray-600 font-medium tracking-widest uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;