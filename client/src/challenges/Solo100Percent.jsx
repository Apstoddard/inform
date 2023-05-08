import React from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ProgressBar from "../components/ProgressBar";
import ChallengeControls from "../components/ChallengeControls";

export default function Solo100Percent({ setState, grid, reset }) {
  const gridSize = grid.flat().length;
  const nonZeros = grid.flat().filter((block) => block !== 0).length;
  const percent = (nonZeros / gridSize) * 100;
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("soloMenu")}
      />
      <div className="panelTitle">
        <b>100%</b>
      </div>
      <div className="panelLayout">
        <RulesText>Move the ball to touch every block</RulesText>
        <ProgressBar percent={Math.floor(percent)} />
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
