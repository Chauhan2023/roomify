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
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ],
    price: 5000,
    roomType: "Shared",
    bedrooms: 2,
    apartmentType: "Apartment",
    leaseDuration: 12,
    location: "Mumbai"
  },
  {
    id: 2,
    profileImgSrc: "https://via.placeholder.com/150",
    name: "User 2",
    age: 30,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ],
    price: 6000,
    roomType: "Single",
    bedrooms: 1,
    apartmentType: "Flat",
    leaseDuration: 6,
    location: "Delhi"
  },
  {
    id: 3,
    profileImgSrc: "https://via.placeholder.com/150",
    name: "User 3",
    age: 28,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ],
    price: 5500,
    roomType: "Shared",
    bedrooms: 2,
    apartmentType: "House",
    leaseDuration: 9,
    location: "Bengaluru"
  },
  {
    id: 4,
    profileImgSrc: "https://via.placeholder.com/150",
    name: "User 4",
    age: 32,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ],
    price: 7000,
    roomType: "Single",
    bedrooms: 1,
    apartmentType: "Penthouse",
    leaseDuration: 18,
    location: "Hyderabad"
  },
  {
    id: 5,
    profileImgSrc: "https://via.placeholder.com/150",
    name: "User 5",
    age: 27,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ],
    price: 5200,
    roomType: "Shared",
    bedrooms: 3,
    apartmentType: "Villa",
    leaseDuration: 12,
    location: "Ahmedabad"
  },
  {
    id: 6,
    profileImgSrc: "https://via.placeholder.com/150",
    name: "User 6",
    age: 29,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150"
    ],
    price: 5800,
    roomType: "Single",
    bedrooms: 2,
    apartmentType: "Loft",
    leaseDuration: 15,
    location: "Chennai"
  }
];


const SearchByCities = () => {
  return (
    <div className="bg-white shadow-lg p-3">
      <Swiper
        slidesPerView={8}
        spaceBetween={0}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, el: null }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {cities.map((city, index) => (
          <SwiperSlide key={index}>
            <button className="btn border border-1 btn-white rounded-pill">
              {city}
            </button>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev bg-white rounded-circle shadow-lg"></div>
        <div className="swiper-button-next bg-white rounded-circle shadow-lg"></div>
      </Swiper>

      <div className="my-4 my-md-3 my-2"></div>

      <div className="w-100  p-3 rounded-3">
        <Tabs orientation="vertical" variant="soft-rounded" colorScheme="blue">
          <TabList className="col-3 px-3 py-3">
            <Tab>1 BHK</Tab>
            <Tab>2 BHK</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Box  className="row">
                {userProfiles.map((profile) => (
                  <div className="col-4 mb-3">
                  <CardFlats key={profile.id} profile={profile} />
                  </div>
                ))}
              </Box>
            </TabPanel>

            <TabPanel>
              <Box display="flex" flexWrap="wrap" gap={4}>
                {userProfiles.map((profile) => (
                  <Box
                    key={profile.id}
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    p={4}
                    boxShadow="sm"
                    flex="1 1 calc(33.333% - 16px)"
                    marginBottom={4}
                    minWidth="0"
                  >
                    <img
                      src={profile.profileImgSrc}
                      alt={`${profile.name}'s profile`}
                      width="100%"
                    />
                    <Box mt={2}>
                      <Box
                        fontWeight="bold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                      >
                        {profile.name}
                      </Box>
                      <Box>{profile.age}</Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchByCities;
