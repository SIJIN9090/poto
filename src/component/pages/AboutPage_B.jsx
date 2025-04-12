import React from "react";
import "../../css/AboutPage.css";

const AboutPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page about-page B-page ">
    <section className="about-section">
      <h4>나의 여정 ✨</h4>
      <p>
        130일 동안, 마치 마법 학교처럼 많은 걸 배우고 익혔습니다. 매일매일이
        새로운 모험이었고, 작은 성취가 쌓여 큰 자신감이 되었죠.
      </p>

      <ul>
        <li>백엔드에서는 Java와 Spring으로 튼튼한 뼈대를 만들고,</li>
        <li>프론트엔드에서는 React로 생기를 불어넣었어요.</li>
        <li>SQL, 서버, 네트워크도 다뤘고,</li>
        <li>HTML과 CSS로 예쁘게 꾸미는 법도 배웠습니다.</li>
      </ul>
      <p>
        그리고 무엇보다, 혼자가 아닌 함께 만드는 방법을 배웠어요. 이제는 제가
        만든 이야기로 누군가의 하루에 따뜻한 색을 더하고 싶습니다.
      </p>
    </section>
  </div>
));

export default AboutPage;
