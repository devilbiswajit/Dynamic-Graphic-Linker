import React, { useState, useEffect } from 'react';

function Rectangle({ onMove }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const { clientX, clientY } = e;
        setPosition({ x: clientX, y: clientY });
        onMove({ x: clientX, y: clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onMove]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  return (
    <div
      className="rectangle bg-green-700 absolute w-20 h-10"
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
      draggable="false"
    />
  );
}

export default Rectangle;







