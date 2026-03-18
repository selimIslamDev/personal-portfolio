import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      emoji: "🎨",
      skills: [
        { name: "React", level: 92 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 80 },
        { name: "TypeScript", level: 78 },
      ],
      gradient: "from-blue-500 to-cyan-400",
      bg: "from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10",
      border: "border-blue-100 dark:border-blue-500/15",
      badgeColor: "bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300",
      barColor: "from-blue-500 to-cyan-400",
    },
    {
      title: "Backend",
      emoji: "⚙️",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Firebase", level: 78 },
        { name: "Socket.io", level: 72 },
        { name: "REST APIs", level: 90 },
      ],
      gradient: "from-emerald-500 to-green-400",
      bg: "from-emerald-50 to-green-50 dark:from-emerald-900/10 dark:to-green-900/10",
      border: "border-emerald-100 dark:border-emerald-500/15",
      badgeColor: "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
      barColor: "from-emerald-500 to-green-400",
    },
    {
      title: "Database & Tools",
      emoji: "🛠️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "Prisma", level: 72 },
        { name: "Git & GitHub", level: 92 },
        { name: "Docker", level: 60 },
      ],
      gradient: "from-violet-500 to-purple-400",
      bg: "from-violet-50 to-purple-50 dark:from-violet-900/10 dark:to-purple-900/10",
      border: "border-violet-100 dark:border-violet-500/15",
      badgeColor: "bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300",
      barColor: "from-violet-500 to-purple-400",
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 lg:py-36
                 bg-gradient-to-b from-white via-slate-50/50 to-white
                 dark:bg-gradient-to-b dark:from-[#080810] dark:via-[#0b0b15] dark:to-[#080810]"
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
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            Technical{' '}
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full" />
          <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-base">
            I specialize in building full-stack applications with modern technologies focused on performance and great UX.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`relative p-7 rounded-[2rem]
                         bg-gradient-to-br ${cat.bg}
                         border ${cat.border}
                         shadow-sm hover:shadow-xl hover:shadow-violet-500/10
                         transition-all duration-500 group overflow-hidden`}
            >
              {/* Top glow */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${cat.gradient} opacity-50`} />

              {/* Header */}
              <div className="flex items-center justify-between mb-7">
                <div>
                  <p className="text-3xl mb-1">{cat.emoji}</p>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">{cat.title}</h3>
                </div>
                <span className={`px-3 py-1.5 text-xs font-bold rounded-xl ${cat.badgeColor}`}>
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.07 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + i * 0.08, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${cat.barColor} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;








// import React from 'react';
// import { motion } from 'framer-motion';

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 lg:py-32 bg-gradient-to-b from-black to-gray-900">
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
//             My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
//           </h2>
//           <p className="text-xl text-gray-400">
//             Technologies I work with to bring ideas to life
//           </p>
//         </motion.div>

//         {/* Skills Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Frontend Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             whileHover={{ y: -10, transition: { duration: 0.3 } }}
//             className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-xl"
//           >
//             <div className="flex items-center mb-6">
//               <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="Frontend Icon" className="w-12 h-12 mr-4" />
//               <h3 className="text-2xl font-bold text-purple-400">Frontend Development</h3>
//             </div>
//             <p className="text-gray-300 mb-8">
//               Building responsive and interactive user interfaces with modern frameworks.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="React" className="h-10" />
//               <img src="https://icon2.cleanpng.com/20180730/lgc/ddb6f50ece52f78e1abc03a608bb5bb7.webp" alt="Vue.js" className="h-10" />
//               <img src="https://miro.medium.com/v2/resize:fit:1358/format:webp/1*DwdxTpj5OEQzUzyj4lq6_A.gif" alt="Angular" className="h-10" />
//               <img src="https://www.typescriptlang.org/images/branding/logo-grouping.svg" alt="TypeScript" className="h-10" />
//             </div>
//           </motion.div>

//           {/* Backend Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             whileHover={{ y: -10, transition: { duration: 0.3 } }}
//             className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-xl"
//           >
//             <div className="flex items-center mb-6">
//               <img src="https://www.shutterstock.com/image-vector/isometric-3d-illustrations-various-purple-260nw-2675416235.jpg" alt="Backend Icon" className="w-12 h-12 mr-4 rounded-lg" />
//               <h3 className="text-2xl font-bold text-purple-400">Backend Development</h3>
//             </div>
//             <p className="text-gray-300 mb-8">
//               Creating robust server-side applications and RESTful APIs.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <img src="https://www.nicepng.com/png/detail/93-932207_js-on-light-background-node-js-logo-png.png" alt="Node.js" className="h-10" />
//               <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.svg" alt="Express" className="h-10" />
//               <img src="https://simpleisbetterthancomplex.com/media/2016/10/featured-tip17.jpg" alt="Django" className="h-10 rounded" />
//               <img src="https://focuslab-cms.imgix.net/shared/1-80.jpg?ar=16%3A9&auto=format&crop=focalpoint&fit=crop&fp-debug=false&fp-x=0.5&fp-y=0.5&ixlib=php-3.1.0&q=100&width=1216&s=ecdc6af8ba1f360b2ca4feda75543e78" alt="Laravel" className="h-10 rounded" />
//             </div>
//           </motion.div>

//           {/* Database Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             whileHover={{ y: -10, transition: { duration: 0.3 } }}
//             className="bg-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 shadow-xl"
//           >
//             <div className="flex items-center mb-6">
//               <img src="https://www.shutterstock.com/image-vector/database-icon-vector-isolated-on-260nw-2634845627.jpg" alt="Database Icon" className="w-12 h-12 mr-4" />
//               <h3 className="text-2xl font-bold text-purple-400">Database Management</h3>
//             </div>
//             <p className="text-gray-300 mb-8">
//               Designing and optimizing databases for performance and scalability.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <img src="https://images.contentstack.io/v3/assets/blt7151619cb9560896/bltac81c4aa3529ee37/65fd965e8f4444482dc3a079/la1a2b2h67gwwqnvs-mdb-logos.svg" alt="MongoDB" className="h-10" />
//               <img src="https://kinsta.com/wp-content/uploads/2022/04/postgres-logo.png" alt="PostgreSQL" className="h-10" />
//               <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="MySQL" className="h-10" />
//               <img src="https://1000logos.net/wp-content/uploads/2024/05/Firebase-Logo.jpg" alt="Firebase" className="h-10 rounded" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;