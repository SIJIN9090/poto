import React from "react";
import "../../css/ProjectsPage.css"; // 스타일링을 위한 CSS 파일

const ProjectsPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page projects-page">
    <section className="projects-section">
      <div className="project-list">
        <div className="project-item">
          <h3>[프로젝트 2 이름]</h3>
          <p>[프로젝트 2에 대한 간략한 설명]</p>
          <p>
            <strong>사용 기술:</strong> [기술 스택]
          </p>
          {/* <a href="[프로젝트 상세 페이지 링크]" target="_blank" rel="noopener noreferrer">View Project</a> */}
        </div>

        {/* 추가적인 프로젝트 아이템들을 이곳에 추가해주세요. */}
      </div>
    </section>
  </div>
));

export default ProjectsPage;
