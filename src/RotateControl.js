import React, { useRef } from 'react';

const RotateControl = ({ onRotate }) => {
  const handleMouseDown = (e) => {
    e.preventDefault();
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
        top: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: '#6200EA',
        borderRadius: '50%',
        width: '15px',
        height: '15px',
        cursor: 'pointer',
      }}
    />
  );
};

export default RotateControl;
