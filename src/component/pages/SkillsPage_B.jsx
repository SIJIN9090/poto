import React from "react";
import "../../css/SkillsPage.css"; // 스타일링을 위한 CSS 파일

const SkillsPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page skills-page">
    <section className="skills-section">
      <h2>✨ 사용 가능한 기술</h2>
      <ul className="skills-list">
        <li>HTML / CSS / JavaScript</li>
        <li>React / Vue.js</li>
        <li>Java / Spring Boot</li>
        <li>MySQL / Oracle</li>
        <li>Git / GitHub</li>
        <li>Figma / Photoshop</li>
        <li>REST API / Axios</li>
        <li>Responsive Web</li>
      </ul>
    </section>
  </div>
));

export default SkillsPage;
