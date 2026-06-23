import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const Experience = () => {
  const { experience, education } = useSelector((state) => state.portfolioData);

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative border-t border-slate-100 dark:border-slate-800">
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white inline-flex items-center gap-3 relative border-b-4 border-purple-500 pb-2 mb-12"
            >
              <Briefcase className="text-purple-500" />
              Experience
            </motion.h2>

            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
                >
                  <div className="absolute w-5 h-5 bg-white dark:bg-slate-900 border-4 border-purple-500 rounded-full -left-[11px] top-1"></div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 object-cover bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full mb-4 inline-block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{exp.role}</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="text-purple-500 mt-1.5">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white inline-flex items-center gap-3 relative border-b-4 border-emerald-500 pb-2 mb-12 mt-16 lg:mt-0"
            >
              <GraduationCap className="text-emerald-500" />
              Education
            </motion.h2>

            <div className="space-y-12">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700"
                >
                  <div className="absolute w-5 h-5 bg-white dark:bg-slate-900 border-4 border-emerald-500 rounded-full -left-[11px] top-1"></div>
                  <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
                    <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 object-cover bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 rounded-full mb-4 inline-block">
                      {edu.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">{edu.degree}</h3>
                    <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">{edu.institution}</p>
                    <p className="text-slate-500 dark:text-slate-500 flex items-center gap-1 mt-2 text-sm">
                      <MapPin size={16} /> {edu.location}
                    </p>
                    <p className="font-bold text-emerald-600 dark:text-emerald-400 mt-4">{edu.score}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
