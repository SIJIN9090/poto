import React from 'react';
import "../css/global.css";

const MeteorShower = () => {
  const stars = Array.from({ length: 5 }).map((_, i) => {
    const x = Math.random() * 2000;
    const y = Math.random() * -2000;
    const delay = Math.random() * 0; 

    return (
      <div
        key={i}
        className="meteor"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          animationDelay: `${delay}s`,
        }}
      >
    <svg width="100" height="100" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="5" fill="#f9d71c" />
</svg>
      </div>
    );
  });

  return <>{stars}</>;
};

export default MeteorShower;
