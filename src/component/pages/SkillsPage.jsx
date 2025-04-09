import React from "react";

const SkillsPage = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{
      backgroundColor: "#f8f9fa",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
    }}
  >
    About Page
  </div>
));

export default SkillsPage;
