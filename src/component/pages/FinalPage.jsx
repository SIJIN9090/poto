// FinalPage.jsx
import React from "react";

import "../../css/FinalPage.css"; // 새로 만든 스타일

const FinalPage = React.forwardRef((props, ref) => (
  <div ref={ref} className="final-page"></div>
));

export default FinalPage;
