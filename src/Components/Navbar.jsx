import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled
        ? 'py-2 bg-white/90 dark:bg-[#080810]/90 backdrop-blur-2xl shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-gray-100 dark:border-white/5'
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">

        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <span className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
            MSI
          </span>
          <span className="text-2xl font-black text-violet-500 dark:text-violet-400 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300">.</span>
          <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 transition-all duration-300 rounded-full" />
        </motion.a>

        {/* Desktop Nav */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:flex items-center gap-1"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 + 0.2 }}
              onClick={() => setActiveLink(link.id)}
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group
                ${activeLink === link.id
                  ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
            >
              {link.name}
              {activeLink === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500 dark:bg-violet-400"
                />
              )}
            </motion.a>
          ))}

          {/* Divider */}
          <div className="mx-3 h-5 w-px bg-gray-200 dark:bg-white/10" />

          {/* Theme Toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="relative p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300
                       border border-gray-200 dark:border-white/10
                       hover:bg-violet-50 dark:hover:bg-violet-500/10
                       hover:border-violet-300 dark:hover:border-violet-500/40
                       hover:text-violet-600 dark:hover:text-violet-400
                       transition-all duration-300"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {darkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun size={17} />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon size={17} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300
                       border border-gray-200 dark:border-white/10 transition-all duration-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white
                       border border-gray-200 dark:border-white/10 transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white/95 dark:bg-[#080810]/95 backdrop-blur-2xl
                       border-b border-gray-100 dark:border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => { setIsOpen(false); setActiveLink(link.id); }}
                  className={`px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200
                    ${activeLink === link.id
                      ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10'
                      : 'text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Sun, Moon, Menu, X, Github, Linkedin } from 'lucide-react';

// const Navbar = ({ darkMode, toggleTheme }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // স্ক্রল করলে নেভবার কিছুটা ট্রান্সপারেন্ট হবে (Aesthetic Look)
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled 
//       ? 'py-4 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800' 
//       : 'py-6 bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        
//         {/* Logo */}
//         <motion.div 
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white"
//         >
//           MSI<span className="text-violet-500">.</span>
//         </motion.div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           <div className="flex gap-6">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href}
//                 className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 mx-2" />

//           {/* Theme Toggle Button */}
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={toggleTheme}
//             className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 transition-all border border-transparent hover:border-violet-500/50"
//           >
//             <AnimatePresence mode="wait">
//               {darkMode ? (
//                 <motion.div
//                   key="sun"
//                   initial={{ y: 10, opacity: 0, rotate: 45 }}
//                   animate={{ y: 0, opacity: 1, rotate: 0 }}
//                   exit={{ y: -10, opacity: 0, rotate: -45 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Sun size={20} />
//                 </motion.div>
//               ) : (
//                 <motion.div
//                   key="moon"
//                   initial={{ y: 10, opacity: 0, rotate: 45 }}
//                   animate={{ y: 0, opacity: 1, rotate: 0 }}
//                   exit={{ y: -10, opacity: 0, rotate: -45 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <Moon size={20} />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.button>
          
//           {/* Social Links */}
//           <div className="flex gap-3">
//              <a href="#" className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all"><Github size={20}/></a>
//              <a href="#" className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all"><Linkedin size={20}/></a>
//           </div>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center gap-4">
//           <button onClick={toggleTheme} className="p-2 text-gray-800 dark:text-yellow-400">
//             {darkMode ? <Sun size={22} /> : <Moon size={22} />}
//           </button>
//           <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white">
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 overflow-hidden"
//           >
//             <div className="px-6 py-8 flex flex-col gap-6">
//               {navLinks.map((link) => (
//                 <a 
//                   key={link.name} 
//                   href={link.href} 
//                   onClick={() => setIsOpen(false)}
//                   className="text-2xl font-bold text-gray-900 dark:text-white"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;