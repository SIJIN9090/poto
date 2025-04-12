// BookPages.jsx
import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
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

const BookPages = forwardRef(({ onFlip }, ref) => {
  return (
    <HTMLFlipBook
      ref={ref}
      width={600}
      height={800}
      size="fixed"
      showCover={true}
      startPage={0}
      drawShadow={true}
      useMouseEvents={true}
      disableFlipOnTouch={true}
      onFlip={onFlip}
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
  );
});

export default BookPages;
