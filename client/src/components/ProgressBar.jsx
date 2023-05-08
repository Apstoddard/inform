import React from "react";

function ProgressBar({ percent }) {
  return (
    <div className="progressBarContainer">
      <div className="progressBar"></div>
      <div className="progressBarText">{percent}% Complete</div>
      <div className="progressBarProgress" style={{ width: `${percent}%` }} />
    </div>
  );
}

export default ProgressBar;
