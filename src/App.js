import React, { useState } from 'react';
import TextBox from './Textbox'; // Ensure to import the TextBox component
import Navbar from './navbar'; // Import the Navbar component

const App = () => {
  const [textBoxes, setTextBoxes] = useState([]);
  const [selectedTextBoxId, setSelectedTextBoxId] = useState(null); // Track selected text box ID
  const [textColor, setTextColor] = useState('#000000'); // Default text color

  const handleClick = (e) => {
    const newTextBox = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      color: textColor, // Set initial color
    };
    setTextBoxes([...textBoxes, newTextBox]);
  };

  const deleteTextBox = (id) => {
    setTextBoxes(textBoxes.filter(box => box.id !== id));
    if (selectedTextBoxId === id) {
      setSelectedTextBoxId(null); // Deselect if the selected text box is deleted
    }
  };

  const handleColorChange = (color) => {
    setTextColor(color); // Update the color state
    setTextBoxes(textBoxes.map(box => 
      box.id === selectedTextBoxId ? { ...box, color: color } : box
    ));
  };

  return (
    <div>
      <Navbar onColorChange={handleColorChange} />
      <div onClick={handleClick} style={{ height: '100vh', width: '100vw', position: 'relative' }}>
        {textBoxes.map((box) => (
          <TextBox
            key={box.id}
            id={box.id}
            x={box.x}
            y={box.y}
            color={box.color}
            onDelete={deleteTextBox}
            onClick={() => setSelectedTextBoxId(box.id)} // Set selected text box on click
          />
        ))}
      </div>
    </div>
  );
};

export default App;
