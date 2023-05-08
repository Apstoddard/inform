import React from "react";
import LargeText from "../components/LargeText";
import PanelControls from "../components/PanelControls";

export default function RadicalAtomsPanel({ setState }) {
  return (
    <div className="panel">
      <PanelControls
        home={() => setState("home")}
        back={() => setState("aboutMenu")}
      />
      <div className="panelTitle">"Radical Atoms"</div>
      <div className="panelLayout">
        <LargeText>
          "Radical Atoms" is a concept introduced by Ishii and the Tangible
          Media Group that refers to a vision in which{" "}
          <b>
            boundaries between digital and physical objects become increasingly
            blurred
          </b>
          , leading to a new kind of materiality that is “beyond tangible.”
          “Radical Atoms” describes{" "}
          <b>
            physical materials that are imbued with digital information and
            capabilities
          </b>
          . This idea is closely related to Tangible User Interfaces (TUIs),
          which use physical objects as input and output to create a{" "}
          <b>
            more natural and intuitive interaction between people and digital
            information
          </b>
          . “Radical Atoms” take this concept one step further by imagining a
          world in which the physical and digital realms are completely
          integrated.
        </LargeText>
      </div>
    </div>
  );
}
