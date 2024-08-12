import React from "react";

function Achivment() {
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-around align-items-center">
        {/* First Section */}
        <div className="d-flex flex-column align-items-center gap-2 border-end pe-3 col-4 border-end border-dark">
          <img 
            src="https://www.interiorcompany.com/assets/images/interior-projects-1.svg" 
            alt="Icon" 
            className="mb-2" // Margin bottom for spacing
          />
          <span className="text-center">
            <strong>500+</strong>
            <br />
            Booking Complete
          </span>
        </div>

        {/* Second Section */}
        <div className="d-flex flex-column align-items-center gap-2 border-end pe-3 col-4 border-end border-dark">
          <img 
            src="https://www.interiorcompany.com/assets/images/interior-projects-1.svg" 
            alt="Icon" 
            className="mb-2" // Margin bottom for spacing
          />
          <span className="text-center">
            <strong>3</strong>
            <br />
            Awarded by NewsX
          </span>
        </div>

        {/* Third Section */}
        <div className="d-flex flex-column align-items-center gap-2  pe-3 col-4 ">
          <img 
            src="https://www.interiorcompany.com/assets/images/interior-projects-1.svg" 
            alt="Icon" 
            className="mb-2" // Margin bottom for spacing
          />
          <span className="text-center">
            <strong>3</strong>
            <br />
            Awarded by NewsX
          </span>
        </div>

      
      </div>
    </div>
  );
}

export default Achivment;
