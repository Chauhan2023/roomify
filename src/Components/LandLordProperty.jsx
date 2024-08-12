import React from "react";
import { Button } from "reactstrap";
import { FaArrowRight } from "react-icons/fa";

function LandLordProperty() {
  return (
    <div>
      <div
        style={{ height: "50vh", background: "#FAFAFA", overflow: "hidden" }}
        className="col-12 "
      >
        <div className="row h-100">
          <div className="col-md-7 col-12  ">
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
              <h2
                className="col-10 prime_color h3"
                style={{ fontWeight: "800" }}
              >
                Are you a landlord or a property manager?
              </h2>
              <h6
                style={{ fontSize: "13px", lineHeight: "1.5" }}
                className="col-md-10 col-0"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                <br /> labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in
                <br /> voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </h6>
            </div>

            <Button className="mt-3 rounded-5 m-5 d-flex align-items-center btn-primary border-0">
              Learn more{" "}
              <FaArrowRight
                style={{
                  marginLeft: "8px",
                  fontWeight: "100",
                  fontSize: "12px",
                }}
              />
            </Button>
          </div>
          <div className="col-5 d-flex align-items-center h-100">
            <img
              src="https://roomify.akashsaini.info/wp-content/uploads/2024/04/Navyom-Living-dining.jpg"
              className="w-100 "
              style={{
                objectFit: "contain",
                borderRadius: "85px 0 0 85px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandLordProperty;
