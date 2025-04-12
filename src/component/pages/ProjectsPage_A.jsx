import React from "react";
import "../../css/ProjectsPage.css"; // 스타일링을 위한 CSS 파일

const ProjectsPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page projects-page A-page">
    <section className="projects-section">
      <h1>My Projects</h1>
      <p>제가 참여하거나 진행했던 주요 프로젝트들을 소개합니다.</p>
      <div className="project-list">
        {/* 프로젝트 데이터를 배열로 관리하고 map 함수를 사용하여 렌더링하는 것이 일반적입니다. */}
        <div className="project-item">
          <h3>OFFIME 근태관리 시스템</h3>
          <a
            href="https://github.com/gadlely/Offime/tree/expense_sijin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/appmain.png"
              alt="프로젝트 1 이미지"
              className="project-image"
              width={140}
            />
          </a>
          <p>
            {" "}
            사내 직원들의 출퇴근, 휴가, 근무 시간 등을 효율적으로 관리할 수 있는
            웹 기반 근태관리 시스템입니다. 실시간 출근 현황 조회와 관리자 전용
            기능도 포함되어 있습니다.
          </p>
          <p>
            <strong>사용 기술:</strong> React, React Router, Axios ,CSS Modules
          </p>
          {/* <a href="[프로젝트 상세 페이지 링크]" target="_blank" rel="noopener noreferrer">View Project</a> */}
        </div>
      </div>
    </section>
  </div>
));

export default ProjectsPage;
