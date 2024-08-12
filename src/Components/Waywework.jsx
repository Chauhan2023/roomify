import React from "react";
import Steppers from "./Steppers";

const stepsData = [
  { number: 1, label: "Meet Us", isActive: true },
  { number: 2, label: "Scope of Work", isActive: false },
  { number: 3, label: "Seal the Deal", isActive: false },
  { number: 4, label: "Execution", isActive: false },
  { number: 5, label: "Stamp of Approval", isActive: false },
];

function Waywework() {
  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-12 col-md-4 d-flex align-items-center mb-3 mb-md-0">
          <img
            src="https://www.interiorcompany.com/_next/image?url=%2Fassets%2Fimages%2Fwe-work-web.webp&w=1080&q=75"
            alt="The Way We Work"
            className="img-fluid" // Ensure the image is responsive
          />
        </div>
        <div className="col-12 col-md-7 px-4">
          <div className="d-flex flex-column">
            <h6 className="text-center">The Way We Work</h6>
            <p className="text-center mb-lg-4 mb-3">
              Five steps is all it takes to elevate your style of living.
            </p>
            <Steppers />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Waywework;
