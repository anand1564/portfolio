import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiPrisma, SiExpress, SiMongodb, SiNextdotjs, SiPostman,SiDocker, } from 'react-icons/si';
import { motion } from 'framer-motion';
import React from 'react';
const TechStack =React.forwardRef<HTMLDivElement>((props,ref) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      className="flex flex-col items-center justify-center p-6 border-2 border-gray-700 rounded-lg bg-gray-900"
    >
      <h3 className="text-2xl text-white mb-4">Tech Stack</h3>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center">
        <FaHtml5 size={64} className="text-orange-600" />
        <FaCss3Alt size={64} className="text-blue-600" />
        <FaJs size={64} className="text-yellow-500" />
        <SiTypescript size={64} className="text-blue-500" />
        <FaReact size={64} className="text-cyan-500" />
        <FaNodeJs size={64} className="text-green-600" />
        <SiExpress size={64} className="text-gray-300" />
        <SiMongodb size={64} className="text-green-500" />
        <SiPostgresql size={64} className="text-blue-300" />
        <SiPrisma size={64} className="text-gray-300" />
        <FaGithub size={64} className="text-white" />
        <SiNextdotjs size={64} className="text-white" />
        <SiPostman size={64} className="text-orange-400" />
        <SiDocker size={64} className="text-blue-600" />
      </div>
    </motion.div>
  );
});

export default TechStack;
