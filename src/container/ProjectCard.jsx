import React, { useState } from 'react';

const ProjectCard = ({name , video ,description, link}) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const btnClick = (link) =>{
    window.open(link)
  }

  console.log(link)

  return (
    <div 
      className='relative w-96 h-[400px] shadow-lg bg-white rounded-lg my-6 overflow-hidden group'
      onMouseMove={handleMouseMove}
    >
      {/* Transparent ring effect on hover */}
      <div
        className="absolute border-2 border-blue-500 rounded-full pointer-events-none transition-transform duration-500 transform scale-0 group-hover:scale-100"
        style={{
          top: `${hoverPosition.y}px`,
          left: `${hoverPosition.x}px`,
          width: '150px',
          height: '150px',
          transform: 'translate(-50%, -50%)',
        }}
      ></div>

      {/* Text Section */}
      <div className="p-4">
        <h3 className='text-lg font-semibold mb-4 text-center'>{name }</h3>
        <p className='text-sm text-gray-600 text-center'>
          {description}
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-center py-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors"
        onClick={()=>btnClick(link)}
        >
          Live
        </button>
      </div>

      {/* Video Section */}
      <div className="relative">
        <video 
          src={video} 
          className="w-full h-40 object-cover rounded-b-lg"
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>
    </div>
  );
};

export default ProjectCard;
