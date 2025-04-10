import React from "react";

const EmptyPage = React.forwardRef((props, ref) => {
  return <div ref={ref} style={{ background: "#fff", height: "100%" }} />;
});

export default EmptyPage;
