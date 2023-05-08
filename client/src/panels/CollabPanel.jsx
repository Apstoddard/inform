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
        <Button text="Together" />
        <Button text="Battle" />
        <Button text="Round and Round" />
        <Button text="Back and Forth" />
      </div>
    </div>
  );
}
