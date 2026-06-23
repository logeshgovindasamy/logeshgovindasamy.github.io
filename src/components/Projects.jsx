import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const { projects } = useSelector((state) => state.portfolioData);

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-indigo-500 pb-2"
          >
            Featured Projects
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay group-hover:scale-110 transition-transform duration-500"></div>
                <span className="text-4xl block text-slate-300 dark:text-slate-600">
                  {'</>'}
                </span>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-slate-900/80 dark:bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm z-10">
                  <a href={project.link || '#'} className="p-3 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-800">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-indigo-500 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
