import React from 'react';

function Circle({ rectanglePosition }) {
  const { x, y } = rectanglePosition;
  const circleSize = Math.max(x, y);

  return (
    <div
      className="circle bg-orange-500 rounded-full absolute"
      style={{
        width: circleSize,
        height: circleSize,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default Circle;





