import React, { useState, useEffect } from "react";
import LoadingCharacter from "./component/LoadingCharacter";
import Book from "./component/Book";
import "./css/global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={loading ? "" : "fade-in"}>
      {loading ? <LoadingCharacter /> : <Book />}
    </div>
  );
}
export default App;
