import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setIsHovered(true);
    };

    const onMouseLeave = () => {
      setIsHovered(false);
    };

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 pointer-events-none transition-transform duration-250 ease-out ${
        isHovered ? 'transform scale-150 bg-white' : 'bg-transparent'
      }`}
      style={{
        width: '3rem',
        height: '3rem',
        borderRadius: '50%',
        border: '2px solid #10b981',
        boxShadow: '0 0 5px white',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    ></div>
  );
};

export default CustomCursor;
