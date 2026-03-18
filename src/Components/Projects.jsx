import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  // তোমার অরিজিনাল ডাটাগুলো এখানে অ্যাড করে দিলাম
  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "A fully responsive personal portfolio built with React, Tailwind CSS, and Framer Motion featuring smooth animations and dark mode.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://your-live-link.com",
      githubLink: "https://github.com/yourusername/portfolio",
      image: "https://i.ytimg.com/vi/UQVB8fe_b4E/maxresdefault.jpg"
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for managing products, orders, and analytics with real-time data visualization.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      liveLink: "#",
      githubLink: "#",
      image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/647e129b753c0df5ff23cc05_6479341d794b0caa0702742d_software-dashboard-webflow-template.png"
    },
    {
      title: "Task Management App",
      description: "Kanban-style task manager with drag-and-drop functionality, team collaboration, and deadline tracking.",
      tech: ["React", "TypeScript", "Firebase", "React DnD"],
      liveLink: "#",
      githubLink: "#",
      image: "https://kanbanboard.co.uk/public/storage/uploads/page/1724051548_1724051218_kanbanboards.png"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather app with real-time data, location search, and detailed hourly/daily forecasts.",
      tech: ["React", "OpenWeather API", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      image: "https://freebiesui.com/wp-content/uploads/2021/04/Weather-App-Ui-Design.jpg"
    },
    {
      title: "Real-Time Chat Application",
      description: "Full-stack chat app with private messaging, group chats, and online status indicators.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      liveLink: "#",
      githubLink: "#",
      image: "https://s3-alpha.figma.com/hub/file/2253133474597579511/6f09dd40-4367-433d-98a4-ee4b3ddbafcd-cover.png"
    },
    {
      title: "Minimalist Blog Platform",
      description: "Clean and fast blog website with markdown support, categories, and comment system.",
      tech: ["Next.js", "MDX", "Tailwind CSS", "Supabase"],
      liveLink: "#",
      githubLink: "#",
      image: "https://i0.wp.com/themes.svn.wordpress.org/minimal-blog/1.3.2/screenshot.png"
    },
  ];

  return (
    <section id="projects" className="py-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Featured <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-white dark:bg-[#111114] border border-gray-200 dark:border-gray-800 rounded-[2.5rem] overflow-hidden hover:shadow-[0_30px_60px_-15px_rgba(139,92,246,0.3)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={project.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                   <p className="text-white text-sm font-medium tracking-wide">Explore Case Study →</p>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 text-[10px] uppercase tracking-widest font-bold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold text-sm hover:shadow-lg transition-all active:scale-95">
                    <ExternalLink size={16}/> Live Demo
                  </a>
                  <a href={project.githubLink} className="p-3.5 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95">
                    <Github size={20}/>
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

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';

// const Projects = () => {
//   const projects = [
//     {
//       title: "Modern Portfolio Website",
//       description: "A fully responsive personal portfolio built with React, Tailwind CSS, and Framer Motion featuring smooth animations and dark mode.",
//       tech: ["React", "Tailwind CSS", "Framer Motion"],
//       liveLink: "https://your-live-link.com",
//       githubLink: "https://github.com/yourusername/portfolio",
//       image: "https://i.ytimg.com/vi/UQVB8fe_b4E/maxresdefault.jpg"  // চেঞ্জ করো
//     },
//     {
//       title: "E-Commerce Dashboard",
//       description: "Admin dashboard for managing products, orders, and analytics with real-time data visualization.",
//       tech: ["React", "Node.js", "MongoDB", "Chart.js"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/647e129b753c0df5ff23cc05_6479341d794b0caa0702742d_software-dashboard-webflow-template.png"
//     },
//     {
//       title: "Task Management App",
//       description: "Kanban-style task manager with drag-and-drop functionality, team collaboration, and deadline tracking.",
//       tech: ["React", "TypeScript", "Firebase", "React DnD"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "https://kanbanboard.co.uk/public/storage/uploads/page/1724051548_1724051218_kanbanboards.png"
//     },
//     {
//       title: "Weather Forecast App",
//       description: "Beautiful weather app with real-time data, location search, and detailed hourly/daily forecasts.",
//       tech: ["React", "OpenWeather API", "Tailwind CSS"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "https://freebiesui.com/wp-content/uploads/2021/04/Weather-App-Ui-Design.jpg"
//     },
//     {
//       title: "Real-Time Chat Application",
//       description: "Full-stack chat app with private messaging, group chats, and online status indicators.",
//       tech: ["React", "Socket.io", "Node.js", "MongoDB"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "https://s3-alpha.figma.com/hub/file/2253133474597579511/6f09dd40-4367-433d-98a4-ee4b3ddbafcd-cover.png"
//     },
//     {
//       title: "Minimalist Blog Platform",
//       description: "Clean and fast blog website with markdown support, categories, and comment system.",
//       tech: ["Next.js", "MDX", "Tailwind CSS", "Supabase"],
//       liveLink: "#",
//       githubLink: "#",
//       image: "https://i0.wp.com/themes.svn.wordpress.org/minimal-blog/1.3.2/screenshot.png"
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-black">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//             My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <p className="text-xl text-gray-400">
//             Some of the things I've built with passion and code
//           </p>
//         </motion.div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               whileHover={{ y: -12, transition: { duration: 0.3 } }}
//               className="group relative bg-gray-800/50 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500/60 transition-all duration-500 shadow-2xl"
//             >
//               {/* Project Image */}
//               <div className="relative overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
//               </div>

//               {/* Project Content */}
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
//                 <p className="text-gray-300 mb-6 line-clamp-3">{project.description}</p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex flex-wrap gap-4">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
//                   >
//                     <ExternalLink size={18} />
//                     Live Demo
//                   </a>
//                   <a
//                     href={project.githubLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex w-full items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-full hover:border-purple-500 hover:text-white hover:bg-purple-500/20 transition-all duration-300"
//                   >
//                     <Github size={18} />
//                     Code
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;