import React from "react";
import Button from "../components/Button";

export default function UserPanel({ setState }) {
  return (
    <div className="userPanelMain">
      <div className="header">
        <div className="title">inFORM</div>
        <div className="subtitle"> an interactive shape display</div>
      </div>
      <div className="panelLayout">
        <Button
          onClick={() => setState("aboutMenu")}
          text={
            <span>
              I want to <b>learn</b> about inFORM
            </span>
          }
        />
        <Button
          className="optionsButton"
          onClick={() => setState("interactMenu")}
          text={
            <span>
              I want to <b>interact</b> with inFORM
            </span>
          }
        />
      </div>
    </div>
  );
}
