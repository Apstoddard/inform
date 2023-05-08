import React from "react";
import Button from "../components/Button";
import PanelControls from "../components/PanelControls";

export default function SoloPanel({ setState }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("interactMenu")}
      />
      <div className="panelTitle">Solo Challenges</div>
      <div className="panelLayout">
        <Button text="Graph" onClick={() => setState("soloGraph")} />
        <Button text="100%" onClick={() => setState("solo100Percent")} />
        <Button text="Waves" onClick={() => setState("soloWaves")} />
        <Button
          text="Round and Round"
          onClick={() => setState("soloRoundAndRound")}
        />
        <Button
          text="Up, Up, and Away"
          onClick={() => setState("soloUpUpAndAway")}
        />
      </div>
    </div>
  );
}
