import React from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ChallengeControls from "../components/ChallengeControls";

export default function SoloRoundAndRound({ setState, grid, reset }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("soloMenu")}
      />
      <div className="panelTitle">
        <b>Round and Round</b>
      </div>
      <div className="panelLayout">
        <RulesText>Try to make the ball move in a circle</RulesText>
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
