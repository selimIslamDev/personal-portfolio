import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "A fully responsive personal portfolio built with React, Tailwind CSS, and Framer Motion featuring smooth animations and dark mode.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/yourusername/portfolio",
      image: "https://i.ytimg.com/vi/UQVB8fe_b4E/maxresdefault.jpg",
      accent: "from-violet-500 to-purple-600",
      tag: "Personal",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/647e129b753c0df5ff23cc05_6479341d794b0caa0702742d_software-dashboard-webflow-template.png",
      accent: "from-blue-500 to-cyan-600",
      tag: "Fullstack",
    },
    {
      title: "Task Management App",
      description: "Kanban-style task manager with drag-and-drop functionality, team collaboration, and deadline tracking.",
      tech: ["React", "TypeScript", "Firebase", "React DnD"],
      liveLink: "#",
      githubLink: "#",
      image: "https://kanbanboard.co.uk/public/storage/uploads/page/1724051548_1724051218_kanbanboards.png",
      accent: "from-emerald-500 to-teal-600",
      tag: "Productivity",
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with real-time data, location search, and detailed hourly/daily forecasts.",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      image: "https://freebiesui.com/wp-content/uploads/2021/04/Weather-App-Ui-Design.jpg",
      accent: "from-sky-500 to-blue-600",
      tag: "API",
    },
    {
      title: "Real-Time Chat Application",
      description: "Full-stack chat app with private messaging, group chats, and online status indicators.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      image: "https://s3-alpha.figma.com/hub/file/2253133474597579511/6f09dd40-4367-433d-98a4-ee4b3ddbafcd-cover.png",
      accent: "from-pink-500 to-rose-600",
      tag: "Realtime",
    },
    {
      title: "Minimalist Blog Platform",
      description: "Clean and fast blog website with markdown support, categories, and comment system.",
      tech: ["Next.js", "MDX", "Tailwind CSS", "Supabase"],
      liveLink: "#",
      githubLink: "#",
      image: "https://i0.wp.com/themes.svn.wordpress.org/minimal-blog/1.3.2/screenshot.png",
      accent: "from-amber-500 to-orange-600",
      tag: "Next.js",
    },
  ];

  return (
    <section
      id="projects"
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
            My work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative flex flex-col
                         bg-white dark:bg-[#0f0f1a]
                         border border-gray-100 dark:border-white/[0.06]
                         rounded-[2rem] overflow-hidden
                         shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 dark:hover:shadow-violet-900/30
                         hover:-translate-y-2
                         transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay always */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Accent top line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent}`} />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest
                                   bg-gradient-to-r ${project.accent} text-white rounded-xl shadow-lg`}>
                    {project.tag}
                  </span>
                </div>

                {/* Hover overlay with CTA */}
                <div className={`absolute inset-0 flex items-center justify-center
                                 transition-all duration-500
                                 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="flex items-center gap-2 text-white text-sm font-bold
                                   bg-white/15 backdrop-blur-sm
                                   px-5 py-2.5 rounded-2xl border border-white/20">
                    View Project <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2
                               group-hover:text-violet-600 dark:group-hover:text-violet-400
                               transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider
                                 bg-gray-100 dark:bg-white/[0.05]
                                 text-gray-600 dark:text-gray-400
                                 border border-gray-200 dark:border-white/[0.07]
                                 rounded-lg"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-3
                               bg-gradient-to-r ${project.accent}
                               text-white text-sm font-bold rounded-xl
                               shadow-md hover:shadow-lg hover:opacity-90
                               active:scale-95 transition-all duration-200`}
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl
                               bg-gray-100 dark:bg-white/[0.06]
                               text-gray-600 dark:text-gray-400
                               border border-gray-200 dark:border-white/[0.08]
                               hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black
                               active:scale-95 transition-all duration-200"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;