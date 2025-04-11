import React from "react";
import "../../css/ProjectsPage.css"; // 스타일링을 위한 CSS 파일

const ProjectsPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page projects-page B-page">
    <section className="projects-section">
      <div className="project-list">
        <div className="project-item">
          <h3>하이펫!동물병원 예약시스템</h3>
          <a
            href="https://github.com/SIJIN9090/Animal-hospital-reservation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/hr.png"
              alt="프로젝트 2 이미지"
              className="project-image"
              width={200}
            />{" "}
          </a>
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
    <div>
      <div className="speech-bubble">이미지 클릭 시 해당 깃허브로 이동해요</div>
      <svg
        width="80"
        height="80"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="flog"
      >
        {/* 몸통 */}
        <circle cx="100" cy="120" r="60" fill="#7ED957" />

        {/* 눈 부분 */}
        <circle cx="65" cy="70" r="20" fill="#7ED957" />
        <circle cx="135" cy="70" r="20" fill="#7ED957" />

        {/* 눈동자 */}
        <circle cx="65" cy="70" r="8" fill="#000" />
        <circle cx="135" cy="70" r="8" fill="#000" />

        {/* 입 */}
        <path
          d="M70 130 Q100 150 130 130"
          stroke="#000"
          strokeWidth="4"
          fill="none"
        />

        {/* 발 */}
        <circle cx="45" cy="170" r="10" fill="#7ED957" />
        <circle cx="155" cy="170" r="10" fill="#7ED957" />
      </svg>
    </div>
  </div>
));

export default ProjectsPage;
