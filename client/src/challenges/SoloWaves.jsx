import React from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ChallengeControls from "../components/ChallengeControls";

export default function SoloWaves({ setState, grid, reset }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("soloMenu")}
      />
      <div className="panelTitle">
        <b>Waves</b>
      </div>
      <div className="panelLayout">
        <RulesText>Make continuous waves</RulesText>
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
