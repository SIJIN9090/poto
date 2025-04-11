import React from "react";
import "../../css/ProjectsPage.css"; // 스타일링을 위한 CSS 파일

const ProjectsPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page projects-page B-page">
    <section className="projects-section">
      <div className="project-list">
        <div className="project-item">
          <h3>하이펫!동물병원 예약시스템</h3>
          <img
            src="/images/hr.png"
            alt="프로젝트 2 이미지"
            className="project-image"
            width={200}
          />
          <p>
            {" "}
            반려동물을 위한 온라인 진료 예약 시스템입니다. 사용자 친화적인
            인터페이스와 병원 일정 관리 기능을 통해 보호자와 병원의 편리한
            소통을 도와줍니다.
          </p>
          <p>
            <strong>사용 기술:</strong> React, styled-components, React Router,
            Axios
          </p>
        </div>
      </div>
    </section>
  </div>
));

export default ProjectsPage;
