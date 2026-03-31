import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaGithub, FaGitAlt } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';
import { SiJavascript, SiTailwindcss, SiSpringboot } from 'react-icons/si';
import { Terminal } from 'lucide-react';

const Skills = () => {
  const { skills } = useSelector((state) => state.portfolioData);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const getIconForSkill = (skill) => {
    switch (skill) {
      case 'Java':
      case 'Full Stack Java':
      case 'JDBC':
        return <DiJava size={22} className="text-[#f89820]" />;
      case 'HTML':
        return <FaHtml5 size={16} className="text-[#e34f26]" />;
      case 'CSS':
        return <FaCss3Alt size={16} className="text-[#1572B6]" />;
      case 'JavaScript':
        return <SiJavascript size={16} className="text-[#F7DF1E]" bg-black="true" />;
      case 'React':
        return <FaReact size={16} className="text-[#61DAFB]" />;
      case 'Tailwind CSS':
        return <SiTailwindcss size={16} className="text-[#06B6D4]" />;
      case 'Spring Boot':
        return <SiSpringboot size={16} className="text-[#6DB33F]" />;
      case 'SQL':
        return <FaDatabase size={16} className="text-slate-500" />;
      case 'GitHub':
        return <FaGithub size={16} className="text-slate-800 dark:text-white" />;
      case 'Git':
        return <FaGitAlt size={16} className="text-[#F05032]" />;
      default:
        return <Terminal size={16} className="text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      <div className="absolute -left-40 top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white inline-block relative border-b-4 border-blue-500 pb-2"
          >
            Technical Skills
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm border border-slate-200 dark:border-slate-700 cursor-default"
                  >
                    {getIconForSkill(skill)}
                    {skill}
                  </motion.span>
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
