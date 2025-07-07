import React from "react";

export default function InfoText({ infoTextName }) {
  let infoText;

  if (infoTextName === "Automation") {
    infoText = (
      <div>
        <span className="font-bold text-[25px] text-glow">
          Elastic and Pose est.
        </span>
        <p className="font-semibold">
          In addition to{" "}
          <span className="text-gradient font-bold">on-the-fly</span>{" "}
          pathplanning, we utilized an{" "}
          <span className="text-gradient font-bold">auto builder</span> for
          accurate autonomous gameplay using the{" "}
          <span className="text-gradient font-bold">Limelight</span>. With the
          use of{" "}
          <span className="text-gradient font-bold">Elastic Dashboard</span>,
          our driver was able to successfully{" "}
          <span className="text-gradient font-bold">select</span> autos that{" "}
          <span className="text-gradient font-bold">adjust</span> their
          trajectory based on the robot's{" "}
          <span className="text-gradient font-bold">current pose</span>.
        </p>
      </div>
    );
  } else if (infoTextName === "Choreo") {
    infoText = (
      <div>
        <span className="font-bold text-[25px] text-glow">
          Trajectory Drawing, Physics sim.
        </span>
        <p className="font-semibold">
          With the use of{" "}
          <span className="text-gradient font-bold">Choreo</span>, our team was
          able to chart{" "}
          <span className="text-gradient font-bold">trajectories</span> on the
          field using{" "}
          <span className="text-gradient font-bold">Choreo lib</span> and{" "}
          <span className="text-gradient font-bold">vision systems</span>. Using
          their <span className="text-gradient font-bold">API</span>, we were
          able to access{" "}
          <span className="text-gradient font-bold">autonomous paths</span> and
          dynamically <span className="text-gradient font-bold">select</span>{" "}
          them using{" "}
          <span className="text-gradient font-bold">Shuffleboard</span>. Choreo
          also introduced{" "}
          <span className="text-gradient font-bold">physics-based</span>{" "}
          trajectory drawing.
        </p>
      </div>
    );
  } else if (infoTextName === "PathPlanner") {
    infoText = (
      <div>
        <span className="font-bold text-[25px] text-glow">
          Choreo Integration
        </span>
        <p className="font-semibold">
          While Choreo had many{" "}
          <span className="font-bold text-gradient">advantages</span>, charting
          using <span className="font-bold text-gradient">PathPlanner</span> was
          well-established and{" "}
          <span className="font-bold text-gradient">easily integratable</span>{" "}
          into our codebase. Additionally, PathPlanner provides{" "}
          <span className="font-bold text-gradient">Choreo support</span>,
          meaning <span className="font-bold text-gradient">physics-based</span>{" "}
          trajectories could be transferred into{" "}
          <span className="font-bold text-gradient">PathPlanner</span> for
          simple autonomous.
        </p>
      </div>
    );
  } else {
    infoText = (
      <div>
        <span className="font-bold text-[25px] text-glow">
          Pipeline, AprilTags
        </span>
        <p className="font-semibold">
          Using the new{" "}
          <span className="font-bold text-gradient">Limelight 3G</span>, our
          team was able to integrate{" "}
          <span className="font-bold text-gradient">responsive</span> and{" "}
          <span className="font-bold text-gradient">accurate</span> pose
          estimation, as well as{" "}
          <span className="font-bold text-gradient">efficient</span> and{" "}
          <span className="font-bold text-gradient">simplified</span> code due
          to the camera's heavy lifting. Additionally, we used a{" "}
          <span className="font-bold text-gradient">ChArUco</span> board for{" "}
          <span className="font-bold text-gradient">calibration</span> and
          pipeline latency{" "}
          <span className="font-bold text-gradient">reduction algorithms</span>{" "}
          to optimize pose estimation.
        </p>
      </div>
    );
  }

  return infoText;
}