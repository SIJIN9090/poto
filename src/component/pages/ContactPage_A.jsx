import React from "react";
import "../../css/ContactPage.css";

const ContactPage_A = React.forwardRef((props, ref) => (
  <div ref={ref} className="All_page contact-page A-page">
    <section className="contact-section">
      <h1>Contact Me</h1>
      <p>
        궁금한 점이 있으시거나 함께 협업하고 싶으시다면 언제든지 연락 주세요.
      </p>
      <div className="contact-details bookmark-bar">
        <div className="contact-content">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:dol9090@naver.com">dol9090@naver.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="/">010-1234-5678</a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/SIJIN9090"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/SIJIN9090
            </a>
          </p>
        </div>
      </div>
    </section>
    <div className="bookmark-line"></div>
  </div>
));

export default ContactPage_A;
