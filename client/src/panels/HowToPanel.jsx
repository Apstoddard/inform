import React from "react";
import LargeText from "../components/LargeText";
import PanelControls from "../components/PanelControls";

export default function HowToPanel({ setState }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("aboutMenu")}
      />
      <div className="panelTitle">How do I use inFORM?</div>
      <div className="panelLayout">
        <LargeText>
          Navigate to the home page of this screen and try out Solo Mode or sync
          up your movements with another person at the other screen through
          Collaborative Mode. Whether you plot a math function with inFORM or
          work with your partner to complete real-time collaborative challenges,
          experience blurring the boundaries between physical and digital
          worlds. 
        </LargeText>
      </div>
    </div>
  );
}
