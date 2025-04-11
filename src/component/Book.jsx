import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "../css/global.css";
import Cover from "./Cover";
import AboutPage_A from "./pages/AboutPage_A";
import AboutPage_B from "./pages/AboutPage_B";
import SkillsPage_A from "./pages/SkillsPage_A";
import SkillsPage_B from "./pages/SkillsPage_B";
import ProjectsPage_A from "./pages/ProjectsPage_A";
import ProjectsPage_B from "./pages/ProjectsPage_B";
import ContactPage_A from "./pages/ContactPage_A";
import ContactPage_B from "./pages/ContactPage_B";
import FinalPage from "./pages/FinalPage";

const Book = () => {
  const [isOpened, setIsOpened] = useState(false);
  const bookRef = useRef(null);

  const handleFlip = () => {
    setIsOpened(true);
  };

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpened(true);
    }, 2000);

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
      if (e.deltaY > 0) {
        flip.flipNext();
      } else {
        flip.flipPrev();
      }
    };

    const flipContainer = document.querySelector(".main_back");
    flipContainer.addEventListener("wheel", handleWheel);

    return () => {
      flipContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (isOpened) {
      const timer = setTimeout(() => {
        setShowBubble(true);
      }, 2500); // 말풍선은 2.5초 후에 나타남

      return () => clearTimeout(timer);
    }
  }, [isOpened]);

  return (
    <div className="main_back">
      <div
        className="main_back"
        style={{
          transform: isOpened ? "scale(1.1)" : "scale(0.9)",
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
            stroke="		#cfa9f1"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <HTMLFlipBook
          ref={bookRef}
          width={600}
          height={800}
          size="fixed"
          showCover={true}
          startPage={0}
          drawShadow={true}
          useMouseEvents={true}
          disableFlipOnTouch={true}
          onFlip={handleFlip}
          style={{
            height: "800px",
            width: "600px",
          }}
        >
          <Cover />
          <AboutPage_A />
          <AboutPage_B />
          <SkillsPage_A />
          <SkillsPage_B />
          <ProjectsPage_A />
          <ProjectsPage_B />
          <ContactPage_A />
          <ContactPage_B />
          <FinalPage />
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Book;
