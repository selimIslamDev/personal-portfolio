import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '923ce129-8cd3-458a-a554-bd6305150500', // 👈 এখানে তোমার key বসাবে
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New message from Portfolio',
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Rangpur, Bangladesh' },
    { icon: Mail, label: 'Email', value: 'hello@salim.dev', href: 'mailto:hello@salim.dev' },
    { icon: Phone, label: 'Phone', value: '+880 17xx-xxxxxx', href: 'tel:+880' },
  ];

  const socials = [
    { icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
  ];

  const inputClass = `w-full px-5 py-3.5 rounded-xl
    bg-gray-50 dark:bg-white/[0.04]
    border border-gray-200 dark:border-white/[0.08]
    text-gray-900 dark:text-white
    placeholder-gray-400 dark:placeholder-gray-600
    focus:outline-none focus:border-violet-400 dark:focus:border-violet-500
    focus:ring-2 focus:ring-violet-500/15
    transition-all duration-200 text-sm
    disabled:opacity-50 disabled:cursor-not-allowed`;

  return (
    <section
      id="contact"
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
            Let's collaborate
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            Get In{' '}
            <span className="bg-gradient-to-r from-violet-600 to-pink-600 dark:from-violet-400 dark:to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="mt-5 h-1 w-16 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full" />
          <p className="mt-5 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-[2rem]
                            bg-white dark:bg-[#0f0f1a]
                            border border-gray-100 dark:border-white/[0.06]
                            shadow-sm">

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-500/10 flex items-center justify-center"
                    >
                      <CheckCircle className="text-green-600 dark:text-green-400" size={36} />
                    </motion.div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">Message Sent! 🎉</h3>
                    <p className="text-gray-500 dark:text-gray-400 max-w-xs">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
                  </motion.div>

                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Error Banner */}
                    <AnimatePresence>
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-3 p-4 rounded-xl
                                     bg-red-50 dark:bg-red-500/10
                                     border border-red-200 dark:border-red-500/20
                                     text-red-600 dark:text-red-400 text-sm font-medium"
                        >
                          <AlertCircle size={18} />
                          Something went wrong. Please try again!
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          Your Name <span className="text-violet-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={status === 'loading'}
                          placeholder="Salim Islam"
                          className={inputClass}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                          Email Address <span className="text-violet-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={status === 'loading'}
                          placeholder="hello@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status === 'loading'}
                        placeholder="Project inquiry, collaboration..."
                        className={inputClass}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        Your Message <span className="text-violet-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        disabled={status === 'loading'}
                        placeholder="Tell me about your project or just say hi..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'loading' ? 1 : 0.97 }}
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-violet-600 to-pink-600
                                 dark:from-violet-500 dark:to-pink-500
                                 text-white font-bold rounded-xl
                                 shadow-lg shadow-violet-500/25
                                 hover:shadow-xl hover:shadow-violet-500/35
                                 flex items-center justify-center gap-3
                                 transition-all duration-300
                                 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-2xl
                           bg-white dark:bg-[#0f0f1a]
                           border border-gray-100 dark:border-white/[0.06]
                           hover:border-violet-200 dark:hover:border-violet-500/25
                           shadow-sm hover:shadow-md
                           transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl
                                bg-violet-100 dark:bg-violet-500/10
                                flex items-center justify-center flex-shrink-0
                                group-hover:bg-violet-200 dark:group-hover:bg-violet-500/20
                                transition-colors duration-300">
                  <info.icon size={20} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a href={info.href}
                       className="text-sm font-semibold text-gray-800 dark:text-gray-200
                                  hover:text-violet-600 dark:hover:text-violet-400
                                  transition-colors mt-0.5 block">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mt-0.5">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <div className="p-6 rounded-2xl
                            bg-white dark:bg-[#0f0f1a]
                            border border-gray-100 dark:border-white/[0.06] shadow-sm">
              <h4 className="text-base font-black text-gray-900 dark:text-white mb-4">Find me on</h4>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                     title={social.label}
                     className="flex-1 flex items-center justify-center py-3 rounded-xl
                                bg-gray-100 dark:bg-white/[0.05]
                                text-gray-600 dark:text-gray-400
                                border border-gray-200 dark:border-white/[0.07]
                                hover:bg-violet-50 dark:hover:bg-violet-500/10
                                hover:text-violet-600 dark:hover:text-violet-400
                                hover:border-violet-200 dark:hover:border-violet-500/30
                                transition-all duration-200">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl
                            bg-gradient-to-br from-violet-50 to-pink-50
                            dark:from-violet-900/15 dark:to-pink-900/10
                            border border-violet-100 dark:border-violet-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-bold text-gray-800 dark:text-white">Currently Available</p>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                I'm open to freelance projects and full-time opportunities. Usually reply within 24 hours!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;