import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@salim.dev', label: 'Email' },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#080810]
                        border-t border-gray-100 dark:border-white/[0.06] overflow-hidden">

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-50" />

      {/* Background blobs */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-100/40 dark:bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100/40 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <a href="#home" className="inline-block">
              <span className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">MSI</span>
              <span className="text-3xl font-black text-violet-500 dark:text-violet-400">.</span>
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Full Stack Developer passionate about creating stunning web experiences with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
              <MapPin size={14} />
              <span>Rangpur, Bangladesh</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-[0.15em]">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400
                               hover:text-violet-600 dark:hover:text-violet-400
                               transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h4 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-[0.15em]">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                             bg-gray-100 dark:bg-white/[0.05]
                             text-gray-500 dark:text-gray-400
                             border border-gray-200 dark:border-white/[0.08]
                             hover:bg-violet-50 dark:hover:bg-violet-500/10
                             hover:text-violet-600 dark:hover:text-violet-400
                             hover:border-violet-200 dark:hover:border-violet-500/30
                             transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>

            <div className="p-4 rounded-2xl
                            bg-gradient-to-br from-violet-50 to-pink-50
                            dark:from-violet-900/15 dark:to-pink-900/10
                            border border-violet-100 dark:border-violet-500/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300">Open to opportunities</p>
              </div>
              <a href="mailto:hello@salim.dev" className="text-xs text-violet-600 dark:text-violet-400 font-semibold hover:underline">
                hello@salim.dev
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4
                     pt-8 border-t border-gray-100 dark:border-white/[0.06]"
        >
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {currentYear} Salim Islam.{' '}
            <span className="text-violet-500 dark:text-violet-400">Crafted with ❤️</span>
          </p>

          {/* Back to top */}
          <motion.a
            href="#home"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-semibold
                       text-gray-400 dark:text-gray-500
                       hover:text-violet-600 dark:hover:text-violet-400
                       transition-colors duration-200"
          >
            Back to top <ArrowUp size={14} />
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;