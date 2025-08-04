import React, { useState } from 'react';

const ProjectCard = ({ name, video, description, link, codeLink, tech}) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const openInNewTab = (url) => window.open(url, '_blank');

  return (
    <div
      className="relative w-[500px] h-[500px] shadow-2xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden group transition-transform hover:scale-[1.015] duration-300"
      onMouseMove={handleMouseMove}
    >
      {/* Glow Effect */}
      <div
        className="absolute rounded-full pointer-events-none transition-transform duration-500 transform scale-0 group-hover:scale-100"
        style={{
          top: `${hoverPosition.y}px`,
          left: `${hoverPosition.x}px`,
          width: '14rem',
          height: '14rem',
          backgroundColor: 'rgba(34, 197, 94, 0.2)', // green glow
          filter: 'blur(48px)',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      {/* Video Preview */}
      <div className="px-4 py-4">
        <video
          src={video}
          className="w-full h-52 rounded-xl object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Text Content */}
      <div className="p-4 pt-2">
        <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-2">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {tech?.map((item, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => openInNewTab(link)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm shadow-md transition"
          >
            Live
          </button>
          <button
            onClick={() => openInNewTab(codeLink)}
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-md transition"
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
