import React from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ChallengeControls from "../components/ChallengeControls";

export default function CollabBackAndForth({ setState, grid, reset }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("collabMenu")}
      />
      <div className="panelTitle">
        <b>Back And Forth</b>
      </div>
      <div className="panelLayout">
        <RulesText>Push the ball back and forth with each other</RulesText>
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
