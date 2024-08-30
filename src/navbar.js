import React, { useState } from 'react';

const colors = [
  { name: 'Default', value: '#000000' },
  { name: 'Red', value: '#FF5733' },
  { name: 'Green', value: '#33FF57' },
  { name: 'Blue', value: '#3357FF' },
  { name: 'Yellow', value: '#F3FF33' },
  { name: 'Pink', value: '#FF33A6' },
];

const fonts = [
    { name: 'Arial', value: 'Arial, sans-serif' },
    { name: 'Georgia', value: 'Georgia, serif' },
    { name: 'Times New Roman', value: '"Times New Roman", serif' },
    { name: 'Courier New', value: '"Courier New", monospace' },
    { name: 'Verdana', value: 'Verdana, sans-serif' },
  ];

const Navbar = ({ onColorChange,onFontChange }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedFont, setSelectedFont] = useState(fonts[0].value);


  const handleColorChange = (event) => {
    const colorValue = event.target.value;
    setSelectedColor(colorValue);
    onColorChange(colorValue);
  };

  const handleFontChange = (event) => {
    const fontValue = event.target.value;
    setSelectedFont(fontValue);
    onFontChange(fontValue);
  };

  return (
    <div style={{ padding: '10px', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
      <label style={{ marginRight: '10px' }}>Color:</label>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span
          style={{
            display: 'inline-block',
            width: '15px',
            height: '15px',
            backgroundColor: selectedColor,
            marginRight: '8px',
            borderRadius: '50%',
          }}
        ></span>
        <select onChange={handleColorChange} style={{ padding: '5px', width: '100px' }}>
          {colors.map((color) => (
            <option key={color.value} value={color.value}>
              {color.name}
            </option>
          ))}
        </select>
      </div>
    </div>

    <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '10px' }}>Font:</label>
        <select onChange={handleFontChange} style={{ padding: '5px', width: '200px' }}>
        {fonts.map((font) => (
            <option key={font.value} value={font.value} style={{ fontFamily: font.value }}>
            {font.name}
            </option>
        ))}
        </select>
        </div>
    </div>
  );
};

export default Navbar;
