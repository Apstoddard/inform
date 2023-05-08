import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";

export default function PanelControls({ back, home }) {
  return (
    <>
      <div className="informTitle">inFORM</div>
      <div className="panelControls">
        {back && (
          <button className="panelControlsButton" onClick={back}>
            <BiArrowBack />
          </button>
        )}
        {home && (
          <button className="panelControlsButton" onClick={home}>
            <GrHomeRounded />
          </button>
        )}
      </div>
    </>
  );
}
