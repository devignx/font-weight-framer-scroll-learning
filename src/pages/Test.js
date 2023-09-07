import React, { useState } from 'react';

const Test = () => {
  // Define state variables for the font properties
  const [fontProperties, setFontProperties] = useState({
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 1.5,
    slant: 0,
    italic: false,
    width: 100,
  });

  // Update the font styles based on slider values
  const updateFontStyles = () => {
    const { fontSize, fontWeight, letterSpacing, lineHeight, slant, italic, width } = fontProperties;
    return {
      fontSize: `${fontSize}px`,
      fontWeight: fontWeight,
      letterSpacing: `${letterSpacing}px`,
      lineHeight: lineHeight,
      fontVariationSettings: `"slnt" ${slant}, "ital" ${italic ? 1 : 0}, "wdth" ${width}`,
    };
  };

  // Handle slider changes
  const handleSliderChange = (property, value) => {
    setFontProperties((prevProperties) => ({
      ...prevProperties,
      [property]: value,
    }));
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen' >
      <p className={`anim text-center -mt-16`} style={updateFontStyles()}>Variable Font Example</p>
      
      <div className="bg-blue-300 fixed flex-wrap items-center gap-6 bottom-0 w-full p-6 flex justify-between">
        <label>Font Size: {fontProperties.fontSize}px</label>
        <input
          type="range"
          min="12"
          max="72"
          value={fontProperties.fontSize}
          onChange={(e) => handleSliderChange('fontSize', parseInt(e.target.value))}
        />

        <label>Font Weight: {fontProperties.fontWeight}</label>
        <input
          type="range"
          min="100"
          max="900"
          step="100"
          value={fontProperties.fontWeight}
          onChange={(e) => handleSliderChange('fontWeight', parseInt(e.target.value))}
        />

        <label>Letter Spacing: {fontProperties.letterSpacing}px</label>
        <input
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={fontProperties.letterSpacing}
          onChange={(e) => handleSliderChange('letterSpacing', parseFloat(e.target.value))}
        />

        <label>Line Height: {fontProperties.lineHeight}</label>
        <input
          type="range"
          min="1"
          max="2"
          step="0.1"
          value={fontProperties.lineHeight}
          onChange={(e) => handleSliderChange('lineHeight', parseFloat(e.target.value))}
        />

        <label>Slant: {fontProperties.slant} degrees</label>
        <input
          type="range"
          min="-10"
          max="10"
          step="0.1"
          value={fontProperties.slant}
          onChange={(e) => handleSliderChange('slant', parseInt(e.target.value))}
        />

        <label>Italic: {fontProperties.italic === 'italic' ? 'On' : 'Off'}</label>
        <input
          type="checkbox"
          checked={fontProperties.italic === 'italic'}
          onChange={(e) => handleSliderChange('italic', e.target.checked ? 'italic' : 'normal')}
        />

        <label>Width: {fontProperties.width}</label>
        <input
          type="range"
          min="50"
          max="200"
          step="1"
          value={fontProperties.width}
          onChange={(e) => handleSliderChange('width', parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Test;
