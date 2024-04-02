import React, { useState } from 'react';
import '../assets/TemperatureConverter.css';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');
  const [convertedTemperature, setConvertedTemperature] = useState('');

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const convertTemperature = () => {
    if (isNaN(temperature)) {
      alert('Please enter a valid number for temperature.');
      return;
    }

    let convertedTemp;
    if (unit === 'celsius') {
      convertedTemp = (parseFloat(temperature) * 9) / 5 + 32;
      setConvertedTemperature(`${convertedTemp.toFixed(2)}°F`);
    } else if (unit === 'fahrenheit') {
      convertedTemp = ((parseFloat(temperature) - 32) * 5) / 9;
      setConvertedTemperature(`${convertedTemp.toFixed(2)}°C`);
    }
  };

  return (
    <div className="temperature-converter">
      <input
        type="text"
        value={temperature}
        onChange={handleTemperatureChange}
        placeholder="Enter temperature"
        className="temperature-input"
      />
      <select value={unit} onChange={handleUnitChange} className="unit-select">
        <option value="celsius">Fahrenheit</option>
        <option value="fahrenheit">Celsius</option>
      </select>
      <button onClick={convertTemperature} className="convert-button">
        Convert
      </button>
      <div className="converted-temperature">
        {convertedTemperature && <p>{convertedTemperature}</p>}
      </div>
    </div>
  );
};

export default TemperatureConverter;
