import React from "react";
import "../css/global.css";

const Cover = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="page cover">
      <h1>나의 이야기</h1>
      <p>프론트엔드 개발자 시진의 동화책</p>
    </div>
  );
});

export default Cover;
