import React, { useState, useEffect, useRef } from "react";
import Book from "./Book";
import "../css/global.css";
import ThanksPage from "./ThanksPage";
import MeteorShower from "./MeteorShower";

const BookBackground = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false); 
  const bookRef = useRef(null);

  const handleFlip = (e) => {
    const page = e.data; 
    const totalPages = bookRef.current.pageFlip().getPageCount();
    setIsLastPage(page === totalPages - 1); 
  };
  
  useEffect(() => {
    const openTimer = setTimeout(() => setIsOpened(true), 2000);
    const flipTimer = setTimeout(() => {
      if (bookRef.current) {
        bookRef.current.pageFlip().flipNext();
      }
    }, 3000);
    return () => {
      clearTimeout(openTimer);
      clearTimeout(flipTimer);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!bookRef.current) return;
      const flip = bookRef.current.pageFlip();
      e.deltaY > 0 ? flip.flipNext() : flip.flipPrev();
    };

    const flipContainer = document.querySelector(".main_back");
    flipContainer.addEventListener("wheel", handleWheel);
    return () => {
      flipContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => setShowBubble(true), 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  return (
    <div className="main_back">
      <div
        className="main_back"
        style={{
          transform: isOpened ? "scale(1.0)" : "scale(0.8)",
          transition: "transform 0.6s ease-in-out",
        }}
      >
        <div className="guide-character">
          {showBubble && (
            <p className={`guide-text ${isOpened ? "show" : ""}`}>
              휠을 돌리거나 페이지를 클릭해 넘길 수 있어요!
            </p>
          )}
<svg
            className={`wizard-svg ${isOpened ? "move" : ""}`}
            viewBox="0 0 120 140"
            width="80"
            height="120"
          >
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
            {/* 모자 */}
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

        
        <svg
          className="wave-marker"
          width="100"
          height="800"
          viewBox="0 0 100 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
      M10 0 

      L90 100 
      Q85 120 70 140 
      Q55 160 40 180 
      Q25 200 10 220 
      Q-5 240 10 260 
      Q25 280 40 300 
      Q55 320 70 340 
      Q85 360 90 380
    "
            stroke="#cfa9f1"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <MeteorShower />
        <Book ref={bookRef} onFlip={handleFlip} />
        {isLastPage && <ThanksPage />}
      </div>
    
    </div>
  );
};

export default BookBackground;
