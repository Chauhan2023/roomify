import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Autoplay } from "swiper/modules"; // Import necessary modules
import { FaLocationDot } from "react-icons/fa6";
import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react"; // Import Chakra UI components
import { LiaSearchSolid } from "react-icons/lia";
// Import images
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";
import image3 from "../assets/images/3.jpeg";
import image4 from "../assets/images/4.jpeg";

export default () => {
  return (
    <div style={{ height: "80vh", overflow: "hidden", position: "relative" }}>
      {/* Swiper Container */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-play configuration
        loop={true} // Loop through slides
        modules={[Autoplay]} // Include necessary modules
        style={{ height: "100%" }}
      >
        <SwiperSlide style={{ height: "100%" }}>
          <div className="image-swiper" style={{ height: "100%" }}>
            <img
              src={image1}
              alt="Search Background"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} // Cover the container
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className="image-swiper" style={{ height: "100%" }}>
            <img
              src={image2}
              alt="Search Background"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} // Cover the container
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className="image-swiper" style={{ height: "100%" }}>
            <img
              src={image3}
              alt="Search Background"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} // Cover the container
            />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <div className="image-swiper" style={{ height: "100%" }}>
            <img
              src={image4}
              alt="Search Background"
              style={{ width: "100%", height: "100%", objectFit: "cover" }} // Cover the container
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Fixed Input Field */}
      <div
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -80%)",
          zIndex: 10, // Ensure it appears above Swiper
          width: "80%", // Adjust width as needed
          maxWidth: "600px", // Optional: maximum width
        }}
      >
        <div>
          <h1 className="text-white text-center">Roomiefy</h1>
          <p className="text-white text-center">Discover the flats in Delhi NCR</p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center", // Align items vertically
          }}
        >
          <div style={{ flex: "1 1 40%" }} className="border-end">
            <InputGroup className="rounded-0">
              <InputLeftAddon className="rounded-0">
                <FaLocationDot />
              </InputLeftAddon>
              <select
                className="form-control rounded-0"
                style={{
                  flex: "1 1 30%", // 30% width for dropdown
                  border: "none",
                  padding: "0.5rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center", // Align items vertically
                }}
              >
                <option value="">
                  
                  Select Cities
                </option>
                <option value="option1">Delhi</option>
                <option value="option2">Noida</option>
                <option value="option3">Mumbai</option>
              </select>
            </InputGroup>
          </div>
          <div style={{ flex: "1 1 60%" }}>
            <InputGroup className="rounded-0">
              <InputLeftAddon className="rounded-0">
                <LiaSearchSolid />
              </InputLeftAddon>
              <Input
                id="searchInput"
                type="tel"
                placeholder="Search here "
                className="bg-white rounded-0"
              />
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  );
};
