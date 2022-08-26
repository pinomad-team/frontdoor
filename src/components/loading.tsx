import React from 'react';

export const Loading: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: 'auto',
      background: 'none',
      display: 'block',
      shapeRendering: 'auto',
    }}
    width="200px"
    height="200px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle cx="50" cy="23" r="13" fill="#ff5555">
      <animate
        attributeName="cy"
        dur="1s"
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.45 0 0.9 0.55;0 0.45 0.55 0.9"
        keyTimes="0;0.5;1"
        values="23;77;23"
      ></animate>
    </circle>
  </svg>
);
