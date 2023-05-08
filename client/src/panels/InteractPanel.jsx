import React from "react";
import Button from "../components/Button";
import PanelControls from "../components/PanelControls";

export default function InteractPanel({ setState }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("home")}
      />
      <div className="panelTitle">
        I want to <b>interact</b> with inFORM
      </div>
      <div className="panelLayout">
        <Button
          text={
            <span>
              I want to interact <b>collaboratively</b> with InFORM
            </span>
          }
          onClick={() => setState("collabMenu")}
        />
        <Button
          text={
            <span>
              I want to interact <b>independently</b> with InFORM
            </span>
          }
          onClick={() => setState("soloMenu")}
        />
      </div>
    </div>
  );
}
