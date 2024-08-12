import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import CardFlats from "./CardFlats";

const cities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Patna",
];

const userProfiles = [
  {
    id: 1,
    profileImgSrc: "https://via.placeholder.com/150",
    name: "User 1",
    age: 25,
    images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    price: 5000,
    roomType: "Shared",
    bedrooms: 2,
    apartmentType: "Apartment",
    leaseDuration: 12,
    location: "Mumbai",
  },
  {
    id: 2,
    profileImgSrc: "https://via.placeholder.com/150",
    name: "User 2",
    age: 30,
    images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150"],
    price: 6000,
    roomType: "Single",
    bedrooms: 1,
    apartmentType: "Flat",
    leaseDuration: 6,
    location: "Delhi",
  },
  // ... other profiles
];

const SearchByCities = () => {
  return (
    <div className="bg-white shadow-lg p-3">
      <Swiper
  slidesPerView={6} // default for larger screens
  spaceBetween={20}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  pagination={{ clickable: true, el: null }}
  modules={[Navigation, Pagination]}
  breakpoints={{
    // When window width is >= 320px
    320: {
      slidesPerView: 2, // Show 2 cities in view on mobile devices
    },
    // When window width is >= 640px
    640: {
      slidesPerView: 3, // Show 3 cities in view on small tablets
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 4, // Show 4 cities in view on tablets
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 6, // Show 6 cities in view on laptops/desktops
    },
  }}
  className="mySwiper"
>
  {cities.map((city, index) => (
    <SwiperSlide key={index}>
      <button className="btn border border-1 btn-white rounded-pill button-cities-swiper w-100">
        {city}
      </button>
    </SwiperSlide>
  ))}
  <div className="swiper-button-prev bg-white rounded-circle shadow-lg"></div>
  <div className="swiper-button-next bg-white rounded-circle shadow-lg"></div>
</Swiper>

      <div className="my-4 my-md-3 my-2"></div>

      <div className="w-100 p-3 rounded-3">
        <Tabs className="tab-container">
          <div className="tab-list">
            <TabList className="px-3 py-3 d-flex d-md-block">
              <Tab className="w-50 w-md-100 btn">1 BHK</Tab>
              <Tab className="w-50 w-md-100 btn ">2 BHK</Tab>
            </TabList>
          </div>
          <div className="tab-panels">
            <TabPanels>
              <TabPanel>
                <Box className="row">
                  {userProfiles.map((profile) => (
                    <div className="col-12 col-md-4 mb-3">
                      <CardFlats key={profile.id} profile={profile} />
                    </div>
                  ))}
                </Box>
              </TabPanel>

              <TabPanel>
                <Box className="row">
                  {userProfiles.map((profile) => (
                    <div className="col-12 col-md-4 mb-3">
                      <CardFlats key={profile.id} profile={profile} />
                    </div>
                  ))}
                </Box>
              </TabPanel>
            </TabPanels>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchByCities;
