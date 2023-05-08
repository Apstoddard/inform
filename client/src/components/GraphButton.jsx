import React from "react";

function GraphButton({ text, onClick }) {
  return (
    <button onClick={onClick} className="graphButton">
      {text}
    </button>
  );
}

export default GraphButton;
