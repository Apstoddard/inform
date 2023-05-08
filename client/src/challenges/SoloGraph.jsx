import React, { useState } from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ChallengeControls from "../components/ChallengeControls";
import { checkFunctionStr } from "../utils";
import GraphButton from "../components/GraphButton";

export default function SoloGraph({ setState, grid, reset, applyFuncToGrid }) {
  const [value, setValue] = useState("");
  const [validValue, setValidValue] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setValue(value);
    setValidValue(checkFunctionStr(`f(x, y) = ${value}`));
  };
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("soloMenu")}
      />
      <div className="panelTitle">
        <b>Graph a Function</b>
      </div>
      <div className="panelLayout">
        <RulesText>Graph any function of x and y!</RulesText>
        <div className="graphOptionsLayout">
          <div className="graphContainer">
            <input
              type="text"
              value={value}
              onChange={handleOnChange}
              className="graphInput"
              placeholder="Custom Function"
            />
            <button
              className="graphSubmit"
              onClick={() => applyFuncToGrid(`f(x, y) = ${value}`)}
              disabled={!validValue}
            >
              Plot
            </button>
          </div>
          <div class="graphOptions">
            <GraphButton
              text={
                <span>
                  cos( <sup>1</sup>&frasl;<sub>2</sub> x ) + cos( <sup>1</sup>
                  &frasl;
                  <sub>2</sub> y ) + 2
                </span>
              }
              onClick={() =>
                applyFuncToGrid(`f(x, y) = cos(0.5x) + cos(0.5y) + 2`)
              }
            />
            <GraphButton
              text={
                <span>
                  - <sup>1</sup>&frasl;<sub>20</sub> ( x<sup>2</sup> + y
                  <sup>2</sup> ) + 10
                </span>
              }
              onClick={() =>
                applyFuncToGrid(`f(x, y) = - ( x^2 + y^2 ) / 20 + 10`)
              }
            />
            <GraphButton
              text={
                <span>
                  2 sin( <sup>1</sup>&frasl;<sub>2</sub> x ) + 2
                </span>
              }
              onClick={() => applyFuncToGrid(`f(x, y) = 2sin(0.5x) + 2`)}
            />
          </div>
        </div>
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
