import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

function AddRoomDetail({ isOpen, toggle }) {
  const [roomTitle, setRoomTitle] = useState(""); // New state for room title
  const [selectedLookingFor, setSelectedLookingFor] = useState("");
  const [selectedOccupancy, setSelectedOccupancy] = useState("");
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [location, setLocation] = useState("");
  const [approxRent, setApproxRent] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const preferences = [
    "working full time",
    "college student",
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
      setRoomTitle(""); // Reset room title
      setSelectedLookingFor("");
      setSelectedOccupancy("");
      setSelectedPreferences([]);
      setSelectedAmenities([]);
      setLocation("");
      setApproxRent("");
      setCity("");
      setDescription("");
      setImages([]);
    }
  }, [isOpen]);

  const amenities = [
    "TV",
    "Fridge",
    "Kitchen",
    "WiFi",
    "Washing Machine",
    "AC",
    "Power Backup",
    "Cook",
    "Parking",
  ];

  const cities = ["Delhi", "Mumbai", "Bengaluru", "Pune"];

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

  const handleAmenityClick = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prev) => [...prev, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    const data = {
      roomTitle, // Include room title in the data
      location,
      approxRent,
      city,
      lookingFor: selectedLookingFor,
      occupancy: selectedOccupancy,
      preferences: selectedPreferences,
      amenities: selectedAmenities,
      description,
      images, // Handle images separately if needed
    };

    try {
      console.log(data);
      const response = await axios.post(`http://localhost:3000/api/createrooms`, data); // Adjust URL as needed
      console.log(`res`, response);
      
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
          <h3 className="fw-light text-center">Add Your Room Details</h3>
          <p className="fw-light text-center">
            So that other users can contact you
          </p>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* Title of Room Input */}
                <div className="mb-3">
                  <label htmlFor="roomTitle" className="form-label">
                    Title of Room
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="roomTitle"
                    value={roomTitle}
                    onChange={(e) => setRoomTitle(e.target.value)}
                    placeholder="Enter the title of the room"
                  />
                </div>
                
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

            <div className="text-center p-4 border-dashed border-secondary m-3" style={{ border: '1px dashed #007bff' }}>
              <input
                type="file"
                multiple
                className="form-control-file"
                id="fileUpload"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileUpload"
                className="btn btn-outline-primary rounded-pill"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  padding: '20px',
                  cursor: 'pointer',
                }}
              >
                Click to upload images here
              </label>
              <div className="mt-3">
                {images.map((image, index) => (
                  <div key={index} className="d-inline-block position-relative me-2 mb-2">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Uploaded ${index}`}
                      className="img-thumbnail"
                      style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <button
                      type="button"
                      className="btn btn-sm btn-danger position-absolute top-0 end-0 rounded-circle"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <IoMdClose />
                    </button>
                  </div>
                ))}
              </div>
              <p className="">* You can upload 5 images upto <strong>25MB</strong></p>
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

            <p>Add amenities</p>
            <div className="mb-3">
              {amenities.map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  className={`btn rounded-pill ${
                    selectedAmenities.includes(amenity)
                      ? "btn-primary"
                      : "btn-outline-primary"
                  } me-2 mb-2`}
                  onClick={() => handleAmenityClick(amenity)}
                >
                  {amenity}
                </button>
              ))}
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
                className="btn btn-lg rounded-pill btn-primary px-5"
                onClick={handleSave}
              >
                Submit
                <span>
                  <IoIosArrowForward />
                </span>
              </button>
            </div>

            <div className="d-flex justify-content-center my-3">
              <p>
                Have room & need roommate?{" "}
                <a href="#">
                  <strong>
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

export default AddRoomDetail;
