import React, { useRef } from 'react';
import { FaArrowsRotate } from "react-icons/fa6";


const RotateControl = ({ onRotate }) => {
  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation(); 
    
    const startX = e.clientX;
    const startY = e.clientY;

    const handleMouseMove = (moveEvent) => {
      const moveX = moveEvent.clientX - startX;
      const moveY = moveEvent.clientY - startY;
      const angle = Math.atan2(moveY, moveX) * (180 / Math.PI);
      onRotate(angle);
      console.log(angle);  // Logging the angle to ensure it's correct
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        position: 'absolute',
        top: '7px',
        left: '-10%',
        transform: 'translateX(-50%)',
        background: '#808080',
        borderRadius: '50%',
        width: '20px', 
        height: '20px',
        cursor: 'pointer',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        color: 'white', 
      }}
      >
      <FaArrowsRotate size={12} />
      </div>
  );
};

export default RotateControl;
