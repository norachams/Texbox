import React, { useState, useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';

const TextBox = ({ id, x, y, onDelete }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const textAreaRef = useRef(null);

  // Automatically focus the textarea when the TextBox is created
  useEffect(() => {
    textAreaRef.current.focus();
    setIsSelected(true); // Automatically select when first created
    //adjustHeight(); 
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
    e.stopPropagation(); // Prevent the click from bubbling up and creating a new text box
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
    const newFontSize = Math.min(parseInt(ref.style.width) / 12, 100); // Adjust scaling and set a max font size
    setFontSize(newFontSize);
    textAreaRef.current.style.fontSize = `${newFontSize}px`;
    adjustSize(); // Adjust the size of the text box along with the font size
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
        bottomRight: true, // Enable resizing from the bottom-right corner
      }}
      onResize={handleResize}
      style={{
        border: isSelected ? '1px solid #808080' : 'none',
        //border: isSelected ? '1px solid #ffffff' : 'none',
        marginTop: '10px',
        backgroundColor: 'transparent',
        boxShadow: isSelected ? '0 2px 8px rgba(0, 0, 0, 0.2)' : 'none',
        cursor: isSelected ? 'move' : 'default',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={handleClick}
    >
      <textarea
        ref={textAreaRef}
        onFocus={handleClick} // Set selected when focused
        onBlur={handleBlur} // Auto-delete or deselect on blur
        onInput={adjustSize} // Adjust size on input
        style={{
          border: 'none',
          outline: 'none',
          width: '100%',
          resize: 'none', 
          background: 'transparent',
          fontSize: `${fontSize}px`,
          textAlign: 'center',
          overflow: 'hidden', 
        }}
      />
      {isSelected && (
        <div
          onMouseDown={handleDelete} // Use onMouseDown instead of onClick
          onClick={(e) => e.stopPropagation()} // Prevent click event from bubbling up
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
      )}
    </Rnd>
  );
};

const App = () => {
  const [textBoxes, setTextBoxes] = useState([]);

  const handleClick = (e) => {
    const newTextBox = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setTextBoxes([...textBoxes, newTextBox]);
  };

  const deleteTextBox = (id) => {
    setTextBoxes(textBoxes.filter(box => box.id !== id));
  };

  return (
    <div onClick={handleClick} style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      {textBoxes.map((box) => (
        <TextBox key={box.id} id={box.id} x={box.x} y={box.y} onDelete={deleteTextBox} />
      ))}
    </div>
  );
};

export default App;


