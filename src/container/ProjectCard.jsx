import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ name, video, description, link, codeLink, tech }) => {
  const openInNewTab = (url) => window.open(url, '_blank');

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -12 }}
      className="relative group bg-white dark:bg-gray-900 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 flex flex-col h-full"
    >
      {/* Visual Header */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <video
          src={video}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Modern Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {codeLink && (
            <button
              onClick={() => openInNewTab(codeLink)}
              className="w-12 h-12 bg-white/20 hover:bg-white/40 border border-white/30 rounded-2xl flex items-center justify-center text-white transition-all transform translate-y-4 group-hover:translate-y-0"
              title="View Source"
            >
              <FaGithub size={24} />
            </button>
          )}
          <button
            onClick={() => openInNewTab(link)}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-2xl flex items-center justify-center text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
            title="Live Preview"
          >
            <FaExternalLinkAlt size={20} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight">
            {name}
          </h3>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 font-medium">
          {description}
        </p>

        {/* Tech Badges - Bottom Aligned */}
        <div className="mt-auto flex flex-wrap gap-2.5">
          {tech?.map((item, idx) => (
            <span
              key={idx}
              className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Luxury Border Glow */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
