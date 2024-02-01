// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isFlipped, setFlipped] = useState(false);
  const [isSecondFlipped, setSecondFlipped] = useState(false);
  const [isThirdFlipped, setIsThirdFlipped] = useState(true);

  const handleClick = () => {
    setFlipped(!isFlipped);
    setSecondFlipped(false);
    setIsThirdFlipped(false);
  };

  const handleSecondClick = () => {
    setSecondFlipped(!isSecondFlipped);
    setFlipped(false);
    setIsThirdFlipped(false);
  };

  const handleThirdClick = () => {
    setIsThirdFlipped(!isThirdFlipped);
    setFlipped(false);
    setSecondFlipped(false);
  };

  return (
    <div>
      {(!isFlipped && isThirdFlipped) && <img src="1.png" alt="Leírás a képről" onClick={handleClick} /> }
      {!isSecondFlipped && isFlipped &&
        <div className="new-images">
          {!isSecondFlipped && (
            <img src="2.png" alt="Leírás a képről" onClick={handleSecondClick} />
          )}
          {!isSecondFlipped && (
            <img src="3.png" alt="Leírás a képről" onClick={handleSecondClick} />
          )}
        </div>}
      {isSecondFlipped && !isThirdFlipped && (
        <img src="4.png" alt="Leírás a képről" onClick={handleThirdClick} />
      )}
    </div>
  );
}

export default App;
