import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none"
      style={{
        width: '15rem',
        height: '15rem',
        borderRadius: '50%',
        backgroundColor: 'rgba(66, 153, 225, 0.2)',
        filter: 'blur(48px)',
        transition: 'transform 0.05s ease-out',
        transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
      }}
    ></div>
  );
};

export default CustomCursor;
