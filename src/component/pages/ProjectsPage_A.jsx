import React from "react";
import "../../css/ProjectsPage.css"; // 스타일링을 위한 CSS 파일

const ProjectsPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page projects-page">
    <section className="projects-section">
      <h1>My Projects</h1>
      <p>제가 참여하거나 진행했던 주요 프로젝트들을 소개합니다.</p>
      <div className="project-list">
        {/* 프로젝트 데이터를 배열로 관리하고 map 함수를 사용하여 렌더링하는 것이 일반적입니다. */}
        <div className="project-item">
          <h3>[프로젝트 1 이름]</h3>
          <p>[프로젝트 1에 대한 간략한 설명]</p>
          <p>
            <strong>사용 기술:</strong> [기술 스택]
          </p>
          {/* <a href="[프로젝트 상세 페이지 링크]" target="_blank" rel="noopener noreferrer">View Project</a> */}
        </div>
      </div>
    </section>
  </div>
));

export default ProjectsPage;
