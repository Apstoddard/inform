import React from "react";
import PanelControls from "../components/PanelControls";
import RulesText from "../components/RulesText";
import ChallengeControls from "../components/ChallengeControls";

export default function CollabBattle({ setState, grid, reset }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("collabMenu")}
      />
      <div className="panelTitle">
        <b>Battle</b>
      </div>
      <div className="panelLayout">
        <RulesText>
          Battle to get, and keep, the ball on your side of the inFORM
        </RulesText>
      </div>
      <ChallengeControls reset={reset} />
    </div>
  );
}
