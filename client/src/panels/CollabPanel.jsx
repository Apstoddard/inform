import React from "react";
import Button from "../components/Button";
import PanelControls from "../components/PanelControls";

export default function CollabPanel({ setState }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("interactMenu")}
      />
      <div className="panelTitle">Collaborative Challenges</div>
      <div className="panelLayout">
        <Button text="Together" onClick={() => setState("collabTogether")} />
        <Button text="Battle" onClick={() => setState("collabBattle")} />
        <Button
          text="Round and Round"
          onClick={() => setState("collabRoundAndRound")}
        />
        <Button
          text="Back and Forth"
          onClick={() => setState("collabBackAndForth")}
        />
      </div>
    </div>
  );
}
