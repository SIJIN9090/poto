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
import ContactPage from "./pages/ContactPage";
import FinalPage from "./pages/FinalPage";

const Book = () => {
  const [isOpened, setIsOpened] = useState(false);
  const bookRef = useRef(null);

  const handleFlip = () => {
    setIsOpened(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bookRef.current) {
        bookRef.current.pageFlip().flipNext();
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!bookRef.current) return;

      const flip = bookRef.current.pageFlip();
      if (e.deltaY > 0) {
        flip.flipNext(); // 아래로 휠 → 다음 페이지
      } else {
        flip.flipPrev(); // 위로 휠 → 이전 페이지
      }
    };

    const flipContainer = document.querySelector(".main_back");
    flipContainer.addEventListener("wheel", handleWheel);

    return () => {
      flipContainer.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="main_back">
      <div
        className="main_back"
        style={{
          transform: isOpened ? "scale(1.2)" : "scale(0.9)",
          transition: "transform 0.6s ease-in-out",
        }}
      >
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

          <ContactPage />
          <FinalPage />
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Book;
