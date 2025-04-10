import React from "react";
import "../../css/ContactPage.css"; // 스타일링을 위한 CSS 파일

const ContactPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page contact-page">
    <section className="contact-section">
      <h1>Contact Me</h1>
      <p>
        궁금한 점이 있으시거나 함께 협업하고 싶으시다면 언제든지 연락 주세요.
      </p>
      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:[당신의 이메일 주소]">[당신의 이메일 주소]</a>
        </p>
        {/* 필요에 따라 다른 연락처 정보를 추가할 수 있습니다. */}
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="[당신의 LinkedIn 링크]"
            target="_blank"
            rel="noopener noreferrer"
          >
            [LinkedIn 프로필]
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="[당신의 GitHub 링크]"
            target="_blank"
            rel="noopener noreferrer"
          >
            [GitHub 프로필]
          </a>
        </p>
        {/* <p>
          <strong>Phone:</strong> [당신의 전화번호]
        </p> */}
      </div>

      {/* 선택 사항: 간단한 연락처 폼 추가 (별도의 처리 로직 필요) */}
      {/* <h2>Send me a message</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form> */}
    </section>
  </div>
));

export default ContactPage;
