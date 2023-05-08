import React from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ChallengeControls from "../components/ChallengeControls";

export default function CollabRoundAndRound({ setState, grid, reset }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("collabMenu")}
      />
      <div className="panelTitle">
        <b>Round and Round</b>
      </div>
      <div className="panelLayout">
        <RulesText>Each using one hand, make the ball go in a circle</RulesText>
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
