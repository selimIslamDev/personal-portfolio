import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import img1 from "../assets/Screenshot_15.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "FullStack E-Commerce",
      description:
        "A production-ready, full-stack e-commerce web application built with the MERN stack, featuring a customer-facing storefront, an admin dashboard, and a complete order management system with online payment integration.",
      tech: [
        "React 19",
        "Tailwind CSS v4",
        "Axios",
        "Framer Motion",
        "React Router DOM v7",
        "React Hook Form",
        "React Hot Toast",
        "Lucide React",
        "React Icons",
        "Swiper",
        "Embla Carousel",
        "React Inner Image Zoom",
        "Browser Image Compression",
        "Vite",
      ],
      liveLink: "https://fullstack-ecommerce-project.netlify.app/",
      githubLink: "https://github.com/salim-khan-3/fullstack-ecommerce-mern-client-side",
      image: img1,
      accent: "from-violet-500 to-purple-600",
      tag: "Fullstack",
    },
    {
  title: "ClubSphere – Membership & Event Management",
  description:
    "A full-stack MERN web application for discovering, joining, and managing local clubs. Features role-based dashboards for Admin, Club Manager, and Member, with Stripe payment integration for paid memberships and events.",
  tech: [
    "React 18",
    "Tailwind CSS",
    "Axios",
    "Framer Motion",
    "React Router DOM v6",
    "React Hook Form",
    "TanStack Query",
    "React Hot Toast",
    "SweetAlert2",
    "Lucide React",
    "Recharts",
    "Stripe",
    "Firebase",
    "Vite",
  ],
  liveLink: "https://clubsphere-fullstack-project.netlify.app/",
  githubLink: "https://github.com/salim-khan-3/clubsphere-react-project-client",
  image: img2,
  accent: "from-purple-500 to-gold-500",
  tag: "Fullstack",
},
{
  title: "EduTrack - Learning Management System",
  description:
    "A full-stack Learning Management System built with Next.js 14, featuring role-based authentication for instructors and students, assignment management, AI-powered feedback generation, real-time submission tracking, and an analytics dashboard with visual charts.",
  tech: [
    "Next.js 14",
    "TypeScript",
    "MongoDB Atlas",
    "NextAuth.js",
    "Tailwind CSS",
    "Recharts",
    "Gemini AI",
    "Vercel",
  ],
  liveLink: "https://learning-management-system-58tk.vercel.app",
  githubLink: "https://github.com/selimIslamDev/learning-management-system",
  image: img3,
  accent: "from-blue-500 to-purple-600",
  tag: "Fullstack",
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
            Featured{" "}
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
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent}`}
                />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1.5 text-[10px] font-black uppercase tracking-widest
                                   bg-gradient-to-r ${project.accent} text-white rounded-xl shadow-lg`}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Hover overlay with CTA */}
                <div
                  className={`absolute inset-0 flex items-center justify-center
                                 transition-all duration-500
                                 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                >
                  <span
                    className="flex items-center gap-2 text-white text-sm font-bold
                                   bg-white/15 backdrop-blur-sm
                                   px-5 py-2.5 rounded-2xl border border-white/20"
                  >
                    View Project <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="text-lg font-black text-gray-900 dark:text-white mb-2
                               group-hover:text-violet-600 dark:group-hover:text-violet-400
                               transition-colors duration-300 leading-snug"
                >
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
