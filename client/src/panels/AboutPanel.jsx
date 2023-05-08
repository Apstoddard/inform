import React from "react";
import Button from "../components/Button";
import PanelControls from "../components/PanelControls";

export default function AboutPanel({ setState }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("home")}
      />
      <div className="panelTitle">
        I want to <b>learn</b> about inFORM
      </div>
      <div className="panelLayout">
        <Button
          text="Tangible Technology"
          onClick={() => setState("tangibleTechInfo")}
        />
        <Button
          text="“Radical Atoms”"
          onClick={() => setState("radicalAtomsInfo")}
        />
        <Button
          text="How do I use inFORM?"
          onClick={() => setState("howToInfo")}
        />
      </div>
    </div>
  );
}
