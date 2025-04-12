import React, { useState, useEffect } from "react";
import LoadingCharacter from "./component/LoadingCharacter";
import BookBackground from "./component/BookBackground";
import "./css/global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={loading ? "" : "fade-in"}>
      {loading ? <LoadingCharacter /> : <BookBackground />}
    </div>
  );
}
export default App;
