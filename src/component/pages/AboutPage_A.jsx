import React from "react";
import "../../css/AboutPage.css";

const AboutPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page about-page FA-page ">
    <h1>About Me</h1>
    <section className="about-section">
      <img src="/images/sijin.jpg" width={200} alt="박시진" />
      <p>
        안녕하세요, 박시진입니다. 저는 마치 동화책처럼 따뜻하고 아름다운 웹을
        만들고 싶은 프론트엔드 개발자예요.
      </p>
      <p>
        어릴 적엔 그림을 그리거나 이야기를 쓰는 걸 참 좋아했어요. 그 감성을
        그대로 담아, 사람들이 웃으며 넘길 수 있는 웹페이지를 만들어가고
        있습니다.
      </p>
    </section>
  </div>
));

export default AboutPage;
