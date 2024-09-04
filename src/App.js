import React, { useState } from 'react';
import TextBox from './Textbox'; 
import Navbar from './navbar'; 

const App = () => {
  const [textBoxes, setTextBoxes] = useState([]);
  const [selectedTextBoxId, setSelectedTextBoxId] = useState(null); // Track selected text box ID
  const [textColor, setTextColor] = useState('#000000');
  const [textFont, setTextFont] = useState('Arial, sans-serif');

  const handleClick = (e) => {
    const textBoxWidth = 200;  // Approximate initial width of your text box
    const textBoxHeight = 50; 
    const newTextBox = {
      id: Date.now(),
      x: e.clientX - textBoxWidth / 2,
      y: e.clientY - textBoxHeight / 2,
      color: textColor, 
      font: textFont,
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

  const handleFontChange = (font) => {
    setTextFont(font);
    setTextBoxes(textBoxes.map(box =>
      box.id === selectedTextBoxId ? { ...box, font: font } : box
    ));
  };

  const handleClearAll = () => {
    setTextBoxes([]); 
  };

  return (
    <div>
      <Navbar onColorChange={handleColorChange} onFontChange={handleFontChange} onClearAll={handleClearAll}/>
      <div onClick={handleClick} style={{ height: '100vh', width: '100vw', position: 'relative' }}>
        {textBoxes.map((box) => (
          <TextBox
            key={box.id}
            id={box.id}
            x={box.x}
            y={box.y}
            color={box.color}
            font={box.font}
            onDelete={deleteTextBox}
            onClick={() => setSelectedTextBoxId(box.id)} // Set selected text box on click
          />
        ))}
      </div>
    </div>
  );
};

export default App;
