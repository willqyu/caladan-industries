import React, { useEffect, useState } from 'react';

interface CircleGridProps {
  rows: number;
  cols: number;
  circleRadius: number;
  spacingX: number;
  spacingY: number;
  colorOn: string;
  colorOff: string;
}

const CircleGrid: React.FC<CircleGridProps> = ({ rows, cols, circleRadius, spacingX, spacingY, colorOn, colorOff }) => {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

  const width = cols * (circleRadius * 2 + spacingX) - spacingX;
  const height = rows * (circleRadius * 2 + spacingY) - spacingY;

  const circles = [];
  const lines = [];

  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  useEffect(() => {
    const generateRandomNumber = () => {
      const newNumber = Math.floor(Math.random() * (rows*cols));
      console.log(newNumber)
      setRandomNumber(newNumber);
    };

    // Generate initial number
    generateRandomNumber();

    // Set up interval to generate new number every second
    const interval = setInterval(generateRandomNumber, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const index = row * cols + col;
      const cx = col * (circleRadius * 2 + spacingX) + circleRadius;
      const cy = row * (circleRadius * 2 + spacingY) + circleRadius;

      const active = hoveredCircle === index || randomNumber === index;
      
      let r = circleRadius * (row+col+2)*0.1 ;
      if (active) r*= 1.2;

      circles.push(
        // <circle
        //   key={`circle-${index}`}
        //   cx={cx}
        //   cy={cy}
        //   
        //   fill={hoveredCircle === index ? colorOn : colorOff}
        //   onMouseEnter={() => setHoveredCircle(index)}
        //   onMouseLeave={() => setHoveredCircle(null)}
        //   className="transition-colors duration-300 ease-in-out cursor-pointer"
        // />
        <rect
          key={`circle-${index}`}
          x={cx-r}
          y={cy-r}
          width={2*r}
          height={2*r}
          fill={active ? colorOn : colorOff}
          onMouseEnter={() => setHoveredCircle(index)}
          onMouseLeave={() => setHoveredCircle(null)}
          className="
            transition-colors duration-300 ease-in-out cursor-pointer
            "
        />
      );

      if (col < cols - 1) {
        lines.push(
          <line
            key={`hline-${index}`}
            x1={cx + circleRadius}
            y1={cy}
            x2={cx + circleRadius + spacingX}
            y2={cy}
            stroke={colorOff}
            strokeDasharray="2,2"
            strokeWidth={2}
          />
        );
      }

      if (row < rows - 1) {
        lines.push(
          <line
            key={`vline-${index}`}
            x1={cx}
            y1={cy + circleRadius}
            x2={cx}
            y2={cy + circleRadius + spacingY}
            stroke={colorOff}
            strokeDasharray="2,2"
            strokeWidth={2}
          />
        );
      }
    }
  }

  return (
    <svg width={width} height={height}>
      {lines}
      {circles}
    </svg>
  );
};

export default CircleGrid;