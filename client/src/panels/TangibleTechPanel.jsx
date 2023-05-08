import React from "react";
import LargeText from "../components/LargeText";
import PanelControls from "../components/PanelControls";

export default function TangibleTechPanel({ setState }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("aboutMenu")}
      />
      <div className="panelTitle">Tangible Technology</div>
      <div className="panelLayout">
        <LargeText>
          Developed by Hiroshi Ishii and his team at the MIT Tangible Media
          Group, inFORM is a tangible user interface (TUI) that allows users to
          interact with a physical environment in real time. The system consists
          of a tabletop display that is composed of a grid of movable pins,
          which can be manipulated to form different shapes and patterns in
          response to user input.
        </LargeText>
      </div>
    </div>
  );
}
