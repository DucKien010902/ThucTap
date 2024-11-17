import React from 'react';

const PillSelector = ({
  options,
  selectedIndex,
  setSelectedIndex,
  onSelect,
  icons,
}) => {
  return (
    <div className="pill-selector">
      <h4>Pick a question for query:</h4>
      <div className="pill-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`pill ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => {
              setSelectedIndex(index); // Update the selected index
              if (onSelect) onSelect(index); // Call onSelect if passed as a prop
            }}
          >
            <span className="pill-icon">{icons[index]}</span>
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PillSelector;
