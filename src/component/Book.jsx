import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "../css/global.css";
import Cover from "./Cover";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

const Book = () => {
  const [isOpened, setIsOpened] = useState(false);
  const bookRef = useRef(null);

  const handleFlip = () => {
    setIsOpened(true); // 페이지가 넘어가면 크기 확대
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bookRef.current) {
        // HTMLFlipBook의 메서드를 호출하는 대신 pageFlip()을 사용
        bookRef.current.pageFlip().flipNext(); // 페이지 자동 넘기기
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        background: "#eee",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
        onFlip={handleFlip} // 페이지가 넘어갈 때 크기 변경
        style={{
          transform: isOpened ? "scale(1.3)" : "scale(1)", // 페이지 넘기면 크기 확대
          transition: "transform 0.5s ease-in-out", // 부드러운 확대/축소 효과
        }}
      >
        <Cover />
        <AboutPage />
        <ContactPage />
        <ProjectsPage />
        <SkillsPage />
      </HTMLFlipBook>
    </div>
  );
};

export default Book;
