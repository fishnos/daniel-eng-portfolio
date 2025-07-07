import React from "react";

export default function InfoText({ infoTextName }) {
  let infoText;

  if (infoTextName === "Automation") {
    infoText = (
      <div>
        <span className="font-bold text-[25px] text-glow">Automation</span>
        <p>This is the automation info.</p>
      </div>
    );
  } else if (infoTextName === "Choreo") {
    infoText = (
      <div>
        <span className="font-bold text-[25px] text-glow">Choreo</span>
        <p>This is the Choreo info.</p>
      </div>
    );
  } else if (infoTextName === "Pathplanner") {
    infoText = (
      <div>
        <span className="font-bold text-[25px] text-glow">Pathplanner</span>
        <p>This is the Pathplanner info.</p>
      </div>
    );
  } else {
    infoText = (
      <div>
        <span className="font-bold text-[25px] text-glow">Limelight</span>
        <p>This is the Limelight info.</p>
      </div>
    );
  }

  return infoText;
}
