import React, { useState } from 'react';
import TextBox from './Textbox'; // Make sure to import the updated TextBox component

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
