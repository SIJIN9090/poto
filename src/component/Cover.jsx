import React from "react";
import "../css/global.css";

const Cover = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="page cover"
      style={{
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>
        🌟 나의 이야기 🌟
      </h1>
      <p style={{ fontSize: "2rem", opacity: 0.9 }}>
        프론트엔드 개발자 진의 동화책
      </p>
    </div>
  );
});

export default Cover;
