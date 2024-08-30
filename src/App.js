import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';


const TextBox = ({ id, x, y, onDelete }) => {
  const [frame, setFrame] = useState({
    translate: [x, y],
    rotate: 0,
  });
  const [isSelected, setIsSelected] = useState(false);
  const textAreaRef = useRef(null);

  // Automatically focus the textarea when the TextBox is created
  useEffect(() => {
    textAreaRef.current.focus();
    setIsSelected(true); // Automatically select when first created
    adjustHeight(); 
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

  const adjustHeight = () => {
    const textarea = textAreaRef.current;
    textarea.style.height = 'auto'; // Reset the height
    textarea.style.height = `${textarea.scrollHeight}px`; // Set it to the scroll height
  };

  return (
    <Draggable>
    <div
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: frame.translate[1],
        left: frame.translate[0],
        padding: '10px',
        //border: isSelected ? '1px solid #FFFFFF' : 'none', // Show border only when selected
        border:  '1px solid #808080', 
        borderRadius: '10px',
        backgroundColor: 'transparent',
        boxShadow: isSelected ? '0 2px 8px rgba(0, 0, 0, 0.2)' : 'none', // Show shadow only when selected
        cursor: 'move',
        width: '200px',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <textarea
        ref={textAreaRef}
        onFocus={handleClick} // Set selected when focused
        onBlur={handleBlur} // Auto-delete or deselect on blur
        onInput={adjustHeight} // Adjust height on input
        style={{
          border: 'none',
          outline: 'none',
          width: '100%',
          resize: 'none', 
          background: 'transparent',
          fontSize: '16px',
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
    </div>
    </Draggable>
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


