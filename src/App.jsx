import React, { useState } from 'react';
import Rectangle from './Rectangle';
import Circle from './Circle';

function App() {
  const [rectanglePosition, setRectanglePosition] = useState({ x: 100, y: 100 });

  const handleRectangleMovement = ({ x, y }) => {
    setRectanglePosition({ x, y });
  };

  return (
    <div className="relative h-screen">
      <Rectangle onMove={handleRectangleMovement} />
      <Circle rectanglePosition={rectanglePosition} />
    </div>
  );
}

export default App;



