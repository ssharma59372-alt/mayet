import { useState } from "react";

function App() {
  const [text, setText] = useState("Click Me");

  const handleClick = () => {
    setText("Shivam Deepanshu🚀");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button
        onClick={handleClick}
        style={{
          padding: "12px 24px",
          fontSize: "18px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default App;

