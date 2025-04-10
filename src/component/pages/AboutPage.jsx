import React from "react";
import "../../css/AboutPage.css"; // 스타일링을 위한 CSS 파일을 import 합니다 (선택 사항)

const AboutPage = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="All_page about-page" // 클래스 이름을 좀 더 구체적으로 변경했습니다.
  >
    <section className="about-section">
      <h1>About Me</h1>
      <p>
        안녕하세요! 저는 [당신의 이름]이라고 합니다. [당신의 직업 또는 역할]로서
        [간략한 자기소개, 예를 들어 웹 개발에 대한 열정과 경험, 주요 관심 분야
        등을 포함].
      </p>
      <p>
        [자신의 배경 이야기, 예를 들어 웹 개발/디자인을 시작하게 된 계기, 흥미를
        느낀 부분 등을 자유롭게 작성해주세요.]
      </p>
    </section>
  </div>
));

export default AboutPage;
