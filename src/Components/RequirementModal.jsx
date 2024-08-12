// src/components/RequirementModal.jsx

import React, { useState,useEffect  } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";

function RequirementModal({ isOpen, toggle }) {
  const [selectedLookingFor, setSelectedLookingFor] = useState("");
  const [selectedOccupancy, setSelectedOccupancy] = useState("");
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [selectedPG, setSelectedPG] = useState("");
  const [selectedTeams, setSelectedTeams] = useState("");
  const [location, setLocation] = useState("");
  const [approxRent, setApproxRent] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");

  const preferences = [
    "working full time",
    "collage student",
    "25+ age",
    "<25 age",
    "working night shift",
    "Have 2 wheeler",
    "Have 4 wheeler",
    "will shift immediately",
    "Have Pets",
    "Need no furnishing",
    "Pure Vegetarian",
  ];

  useEffect(() => {
    if (isOpen) {
      setSelectedLookingFor("");
      setSelectedOccupancy("");
      setSelectedPreferences([]);
      setSelectedPG("");
      setSelectedTeams("");
      setLocation("");
      setApproxRent("");
      setCity("");
      setDescription("");
 
    }
  }, [isOpen]);

  const cities = ["Delhi", "Mumbai", "Bengaluru", "penvel"];

  const handleLookingForClick = (value) => {
    setSelectedLookingFor(value);
  };

  const handleOccupancyClick = (value) => {
    setSelectedOccupancy(value);
  };

  const handlePreferenceClick = (preference) => {
    setSelectedPreferences((prev) =>
      prev.includes(preference)
        ? prev.filter((p) => p !== preference)
        : [...prev, preference]
    );
  };

  const handlePGClick = (value) => {
    setSelectedPG(value);
  };

  const handleTeamsClick = (value) => {
    setSelectedTeams(value);
  };

  const handleSave = async () => {
    const data = {
      location,
      approxRent,
      city,
      lookingFor: selectedLookingFor,
      occupancy: selectedOccupancy,
      preferences: selectedPreferences,
      pgInterest: selectedPG,
      teamsInterest: selectedTeams,
      description,
    };

    try {
    
      const response = await axios.post( `http://localhost:3000/api/CreateRoommates`, data);
      console.log("Data saved successfully:", response.data);
      toggle(); // Close the modal on successful save
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle} size="xl" backdrop="static">
        <ModalHeader toggle={toggle} className="border-0"></ModalHeader>
        <ModalBody>
          <h3 className="fw-light text-center">Add Your Roomies</h3>
          <p className="fw-light text-center">
            so that other users can contact you
          </p>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Add Your Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="approxRent" className="form-label">
                    Approx Rent
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="approxRent"
                    value={approxRent}
                    onChange={(e) => setApproxRent(e.target.value)}
                    placeholder="Enter approximate rent"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    Cities
                  </label>
                  <select
                    className="form-select"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    aria-label="Default select example"
                  >
                    <option value="" disabled>
                      Select a city
                    </option>
                    {cities.map((data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3 p-3">
                  <label className="form-label me-3">Looking For</label>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Looking For"
                  >
                    <button
                      type="button"
                      className={`btn ${
                        selectedLookingFor === "Male"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => handleLookingForClick("Male")}
                    >
                      Male
                    </button>
                    <button
                      type="button"
                      className={`btn ${
                        selectedLookingFor === "Female"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => handleLookingForClick("Female")}
                    >
                      Female
                    </button>
                    <button
                      type="button"
                      className={`btn ${
                        selectedLookingFor === "Any"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => handleLookingForClick("Any")}
                    >
                      Any
                    </button>
                  </div>
                </div>
                <div className="mb-3 p-3">
                  <label className="form-label me-3">Occupancy</label>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Occupancy"
                  >
                    <button
                      type="button"
                      className={`btn ${
                        selectedOccupancy === "Single"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => handleOccupancyClick("Single")}
                    >
                      Single
                    </button>
                    <button
                      type="button"
                      className={`btn ${
                        selectedOccupancy === "Shared"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                      onClick={() => handleOccupancyClick("Shared")}
                    >
                      Shared
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p>Add your preferences</p>
            <div className="mb-3">
              {preferences.map((preference) => (
                <button
                  key={preference}
                  type="button"
                  className={`btn rounded-pill ${
                    selectedPreferences.includes(preference)
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } me-2 mb-2`}
                  onClick={() => handlePreferenceClick(preference)}
                >
                  {preference}
                </button>
              ))}
            </div>

            <div className="row">
              {/* <div className="col-lg-6 col-md-12 col-12 mb-3 p-3">
                <label className="form-label me-3">
                  Are you interested in PG too?
                </label>
                <div className="btn-group" role="group" aria-label="PG">
                  <button
                    type="button"
                    className={`btn ${
                      selectedPG === "Yes"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handlePGClick("Yes")}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      selectedPG === "No"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handlePGClick("No")}
                  >
                    No
                  </button>
                </div>
              </div> */}
              {/* <div className="col-lg-6 col-md-12 col-12 mb-3 p-3">
                <label className="form-label me-3">
                  Are you interested in making Teams?
                </label>
                <div className="btn-group" role="group" aria-label="Teams">
                  <button
                    type="button"
                    className={`btn ${
                      selectedTeams === "Yes"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handleTeamsClick("Yes")}
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    className={`btn ${
                      selectedTeams === "No"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => handleTeamsClick("No")}
                  >
                    No
                  </button>
                </div>
              </div> */}
            </div>

            <div>
              <p>
                Description <span className="text-danger">*</span>
              </p>
              <textarea
                className="col-12 p-3 form-control shadow-sm"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="d-flex justify-content-center my-3">
              <button
                className="btn rounded-pill btn-primary d-flex align-items-center gap-2 p-2"
                onClick={handleSave}>
                Submit
          
                  <IoIosArrowForward />
             
              </button>
            </div>

            <div className="d-flex justify-content-center my-3">
              <p className="d-flex align-items-center">
                Have room & need roommate?{" "}
                <a href="#" >
                  <strong className="d-flex align-items-center gap-2 p-2">
                    Add Room
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </strong>
                </a>
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RequirementModal;
