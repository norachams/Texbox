import React, { useState, useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import RotateControl from './RotateControl'; // Import the RotateControl component

const TextBox = ({ id, x, y, onDelete }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [rotation, setRotation] = useState(0); // Rotation state
  const textAreaRef = useRef(null);

  useEffect(() => {
    textAreaRef.current.focus();
    setIsSelected(true);
    adjustSize();
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsSelected(true);
  };

  const handleBlur = () => {
    const text = textAreaRef.current.value.trim();
    if (text === "") {
      onDelete(id); // Auto-delete if empty
    } else {
      setIsSelected(false);
    }
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  const adjustSize = () => {
    const textarea = textAreaRef.current;
    textarea.style.height = 'auto';
    textarea.style.width = 'auto';

    const scrollHeight = textarea.scrollHeight;
    const scrollWidth = textarea.scrollWidth;

    textarea.style.height = `${scrollHeight}px`;
    textarea.style.width = `${scrollWidth}px`;
  };

  const handleResize = (e, direction, ref, delta, position) => {
    const newFontSize = Math.min(parseInt(ref.style.width) / 12, 100);
    setFontSize(newFontSize);
    textAreaRef.current.style.fontSize = `${newFontSize}px`;
    adjustSize();
  };

  return (
    <Rnd
      default={{
        x: x,
        y: y,
        width: 'auto',
        height: 'auto',
      }}
      bounds="parent"
      enableResizing={{
        bottomRight: true,
      }}
      onResize={handleResize}
      style={{
        border: isSelected ? '1px solid #808080' : 'none',
        marginTop: '10px',
        backgroundColor: 'transparent',
        boxShadow: isSelected ? '0 2px 8px rgba(0, 0, 0, 0.2)' : 'none',
        cursor: isSelected ? 'move' : 'default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `rotate(${rotation}deg)`,  // Rotation applied here
        transformOrigin: 'center center',
        zIndex: isSelected ? 10 : 1,
      }}
      onClick={handleClick}
    >
      <textarea
        ref={textAreaRef}
        onFocus={handleClick}
        onBlur={handleBlur}
        onInput={adjustSize}
        style={{
          border: 'none',
          outline: 'none',
          width: '100%',
          resize: 'none',
          background: 'transparent',
          fontSize: `${fontSize}px`,
          textAlign: 'center',
          overflow: 'hidden',
          padding: '0',
          whiteSpace: 'nowrap',
        }}
      />
      {isSelected && (
        <>
          <div
            onMouseDown={handleDelete}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              background: '#ff0000',
              borderRadius: '50%',
              width: '15px',
              height: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            ✕
          </div>
          <RotateControl onRotate={(angle) => setRotation(angle)} />
        </>
      )}
    </Rnd>
  );
};

export default TextBox;
