import React, { useEffect, useState } from "react";
import "../css/LoadingCharacter.css";

const LoadingCharacter = () => {
  const [disappear, setDisappear] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisappear(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-character-screen ${disappear ? "fade-out" : ""}`}>
      <div className="starry-background">
        {[...Array(30)].map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          return (
            <div
              key={i}
              className="star"
              style={{ top: `${top}%`, left: `${left}%` }}
            />
          );
        })}
      </div>
      <div className="character-svg">
        <svg viewBox="0 0 120 140" width="150" height="250">
          {/* 머리 */}
          <circle cx="60" cy="60" r="40" fill="#ffcc80" />
          {/* 눈 */}
          <circle cx="45" cy="55" r="5" fill="#000" />
          <circle cx="75" cy="55" r="5" fill="#000" />
          {/* 입 */}
          <path
            d="M45 75 Q60 90 75 75"
            stroke="#000"
            strokeWidth="3"
            fill="none"
          />
          {/* 팔 흔들기 */}
          <line
            x1="90"
            y1="40"
            x2="110"
            y2="20"
            stroke="#ffcc80"
            strokeWidth="10"
            className="wave-arm"
          />
          {/* ✅ 마법사 모자 (크고 대각선) */}
          <g transform="rotate(-20 60 40)">
            {/* 모자 본체 */}
            <polygon points="50,-30 25,25 80,25" fill="#673ab7" />
            {/* 챙 */}
            <rect x="5" y="25" width="95" height="6" fill="#673ab7" />
            {/* 물방울 무늬 (노란 원들 듬성듬성) */}
            <circle cx="52" cy="-20" r="2.5" fill="#ffeb3b" />
            <circle cx="45" cy="-10" r="2.5" fill="#ffeb3b" />
            <circle cx="45" cy="5" r="3" fill="#ffeb3b" />
            <circle cx="60" cy="0" r="2.5" fill="#ffeb3b" />
            <circle cx="35" cy="15" r="2.5" fill="#ffeb3b" />
            <circle cx="55" cy="20" r="3" fill="#ffeb3b" />
            <circle cx="65" cy="10" r="2.5" fill="#ffeb3b" />
            <circle cx="70" cy="20" r="2" fill="#ffeb3b" />
          </g>
        </svg>
      </div>
      <p className="welcome-text">
        어서오세요, 마법의 포트폴리오에 오신 걸 환영합니다!
      </p>
    </div>
  );
};

export default LoadingCharacter;
