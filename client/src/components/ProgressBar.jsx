import React from "react";

function ProgressBar({ percent, number }) {
  return (
    <div className="progressBarContainer">
      <div className="progressBar"></div>
      <div className="progressBarText">
        {number !== undefined ? `${number} Completed` : `${percent}% Complete`}
      </div>
      <div className="progressBarProgress" style={{ width: `${percent}%` }} />
    </div>
  );
}

export default ProgressBar;
