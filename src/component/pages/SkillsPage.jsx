import React from "react";
import "../../css/SkillsPage.css"; // 스타일링을 위한 CSS 파일

const SkillsPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page skills-page">
    <section className="skills-section">
      <h1>My Skills</h1>
      <p>
        제가 능숙하게 다루는 기술 스택입니다. 지속적으로 새로운 기술을 배우고
        익히는 데 힘쓰고 있습니다.
      </p>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Vue.js</li>
        {/* 필요에 따라 기술들을 카테고리별로 나누어 표시할 수도 있습니다. */}
        <li>[추가적인 프론트엔드 기술]</li>
        <li>[추가적인 백엔드 기술]</li>
        <li>[데이터베이스 관련 기술]</li>
        <li>[디자인 툴]</li>
        <li>[기타 도구 및 역량]</li>
      </ul>
    </section>
  </div>
));

export default SkillsPage;
