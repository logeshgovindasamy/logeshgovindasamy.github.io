import {  motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import img from  '../assets/img.png'
const Hero = () => {
  const { personalInfo } = useSelector((state) => state.portfolioData);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-semibold w-fit border border-indigo-100 dark:border-indigo-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Available for Opportunities
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300">
              {personalInfo.role}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </motion.p>

            <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="cursor-pointer group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
              >
                View Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer px-8 py-3.5 rounded-xl font-semibold text-slate-700 bg-white dark:text-slate-300 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:scale-105 transition-all shadow-sm"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-8 text-slate-500 dark:text-slate-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 dark:opacity-40 animate-pulse"></div>
            <div className="relative aspect-square max-w-sm lg:max-w-md xl:max-w-sm mx-auto rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50 shadow-2xl bg-white dark:bg-slate-900 flex items-center justify-center">
              {/* Fallback pattern if image is missing */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] background-size: 20px 20px;"></div>
              
              <motion.img
                
                src={img} // Note: Put actual image in public/photo.jpg
                alt={personalInfo.name}
                className="w-full h-full object-cover relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-6 -right-6 glass px-6 py-1 rounded-2xl shadow-xl flex items-center gap-3 backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 border border-white/20 dark:border-slate-700"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="font-semibold text-slate-800 dark:text-slate-200 ">Full Stack Dev</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
