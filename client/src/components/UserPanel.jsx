import React, { useState } from "react";
import { checkFunctionStr } from "../utils";

export default function UserPanel({
  persist,
  setPersist,
  resetGrid,
  applyFuncToGrid,
}) {
  const [value, setValue] = useState("");
  const [validValue, setValidValue] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setValidValue(checkFunctionStr(`f(x, y) = ${value}`));
  };

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
      <div className="buttonLayout layoutBottom">
        <div className="buttonLayout buttonLayoutHorizontal">
          <input
            type="text"
            value={value}
            onChange={handleOnChange}
            className="configInput"
            placeholder="cos(0.5x) + cos(0.5y)"
          />
          <button
            className="optionsButton configButton"
            onClick={() => applyFuncToGrid(`f(x, y) = ${value}`)}
            disabled={!validValue}
          >
            Plot Function
          </button>
        </div>
        <div className="buttonLayout buttonLayoutHorizontal">
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
    </div>
  );
}
