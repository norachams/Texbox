import React from 'react';

const colors = [
  { name: 'Default', value: '#333' },
  { name: 'Red', value: '#FF5733' },
  { name: 'Green', value: '#33FF57' },
  { name: 'Blue', value: '#3357FF' },
  { name: 'Yellow', value: '#F3FF33' },
  { name: 'Pink', value: '#FF33A6' },
];

const Navbar = ({ onColorChange }) => {
  const handleChange = (event) => {
    const selectedColor = event.target.value;
    onColorChange(selectedColor);
  };

  return (
    <div style={{ padding: '10px', backgroundColor: '#333', color: '#fff', display: 'flex', justifyContent: 'center' }}>
      <label style={{ marginRight: '10px', alignSelf: 'center' }}> Color:</label>
      <select onChange={handleChange} style={{ padding: '5px', width: '200px' }}>
        {colors.map((color) => (
          <option key={color.value} value={color.value} style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{
              display: 'inline-block',
              width: '12px',
              height: '12px',
              backgroundColor: color.value,
              marginRight: '8px',
              borderRadius: '50%',
            }}></span>
            {color.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;
