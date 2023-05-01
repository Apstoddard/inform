import React from "react";

export default function UserPanel({ persist, setPersist, resetGrid }) {
  return (
    <div className="userPanelMain">
      <div className="header">
        <div className="title">inFORM</div>
        <div className="subtitle"> an interactive shape display</div>
      </div>
      <div className="buttonLayout">
        <button className="optionsButton" onClick={() => alert("Coming soon!")}>
          I want to <b>learn</b> about inFORM
        </button>
        <button className="optionsButton" onClick={() => alert("Coming soon!")}>
          I want to <b>interact</b> with inFORM
        </button>
      </div>
      <div className="buttonLayout buttonLayoutHorizontal layoutBottom">
        <button
          className="optionsButton configButton"
          onClick={() => setPersist(!persist)}
        >
          {persist ? "Drawing Mode" : "Hovering Mode"}
        </button>
        <button className="optionsButton configButton" onClick={resetGrid}>
          Reset inFORM Display
        </button>
      </div>
    </div>
  );
}
