import React from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ProgressBar from "../components/ProgressBar";
import ChallengeControls from "../components/ChallengeControls";

export default function SoloUpUpAndAway({ setState, grid, reset }) {
  const up = grid.flat().filter((block) => block > 1).length;
  const percent = (up / 15) * 100;
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("soloMenu")}
      />
      <div className="panelTitle">
        <b>Up, Up, and Away</b>
      </div>
      <div className="panelLayout">
        <RulesText>How many blocks can you keep up at once?</RulesText>
        <ProgressBar
          number={up}
          percent={Math.floor(percent > 100 ? 100 : percent)}
        />
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
