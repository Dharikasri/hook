import React, { useState } from 'react';

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Element
      </button>
      {isVisible && <p>This is a toggled element.</p>}
    </div>
  );
}

export default Toggle;
