import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

const About = () => {
  const { personalInfo } = useSelector((state) => state.portfolioData);

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-indigo-500 pb-2">
            About Me
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
            {personalInfo.about}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 shadow-sm">
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">1</span>
              <span className="text-sm text-slate-500 font-medium mt-1">Month Exp</span>
            </div>
            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 shadow-sm">
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">2</span>
              <span className="text-sm text-slate-500 font-medium mt-1">Internships</span>
            </div>
            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 shadow-sm">
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">1+</span>
              <span className="text-sm text-slate-500 font-medium mt-1">Projects</span>
            </div>
            <div className="glass p-6 rounded-2xl flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 shadow-sm">
              <span className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Java</span>
              <span className="text-sm text-slate-500 font-medium mt-1">Full Stack</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
