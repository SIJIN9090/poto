import React from "react";
import "../../css/SkillsPage.css"; // 스타일링을 위한 CSS 파일

const SkillsPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page skills-page A-page">
    <section className="skills-section">
      <h1>My Skills</h1>
      <p>
        저는 웹 개발 전반에 대한 이해를 바탕으로 <br />
        프론트엔드와 백엔드 모두를 경험해봤습니다.
      </p>
      <p>
        새로운 기술을 배우는 것을 좋아하며, <br />
        팀과의 협업을 통해 함께 성장해나가는 걸 즐깁니다.
      </p>
    </section>
  </div>
));

export default SkillsPage;
