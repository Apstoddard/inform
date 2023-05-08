import React from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ChallengeControls from "../components/ChallengeControls";
import ProgressBar from "../components/ProgressBar";

export default function CollabTogether({ setState, grid, reset }) {
  const highest = Math.max(...grid.flat());
  const percent = (highest / 16) * 100;
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("collabMenu")}
      />
      <div className="panelTitle">
        <b>Together</b>
      </div>
      <div className="panelLayout">
        <RulesText>Each using one hand, lift the ball up together</RulesText>
        <ProgressBar percent={Math.floor(percent > 100 ? 100 : percent)} />
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
