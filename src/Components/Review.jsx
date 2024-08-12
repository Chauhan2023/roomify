import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const Review = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const reviews = [
    {
      id: 1,
      text: "This is an amazing product! I was genuinely impressed by its quality and performance. Highly recommend it to anyone looking for a reliable and efficient solution.",
      name: "John Doe",
      image: "https://via.placeholder.com/50",
      platform: "Google",
    },
    {
      id: 2,
      text: "Great service and fast delivery! The product arrived ahead of schedule, and it was exactly as described. The customer support team was also very helpful and responsive.",
      name: "Jane Smith",
      image: "https://via.placeholder.com/50",
      platform: "Facebook",
    },
    {
      id: 3,
      text: "Exceptional quality and customer service. I had a few questions about the product, and the support team addressed all my concerns promptly. The product itself exceeded my expectations.",
      name: "Sam Wilson",
      image: "https://via.placeholder.com/50",
      platform: "Google",
    },
    {
      id: 4,
      text: "Really enjoyed the experience. The product works as advertised and has been a great addition to my daily routine. I will definitely buy again and recommend it to my friends.",
      name: "Chris Evans",
      image: "https://via.placeholder.com/50",
      platform: "Facebook",
    },
    {
      id: 5,
      text: "Top-notch product and support! From the ease of purchase to the quality of the product, everything was perfect. The support team went above and beyond to ensure satisfaction.",
      name: "Natasha Romanoff",
      image: "https://via.placeholder.com/50",
      platform: "Google",
    },
    {
      id: 6,
      text: "Very satisfied with my purchase. The product has been exactly what I needed, and the customer service was outstanding. The whole experience was smooth and hassle-free.",
      name: "Bruce Wayne",
      image: "https://via.placeholder.com/150",
      platform: "Facebook",
    },
  ];

  const handleShowMore = (review) => {
    setSelectedReview(review);
    onOpen();
  };

  return (
    <Box p={5} className="my-5">
      <h3 className="fw-bold text-center">
        What Our Customer<span>Are Saying</span>
      </h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true, el: null }} // Hide pagination
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        style={{ padding: "20px" }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <Box
              p={4}
              borderWidth="1px"
              borderRadius="md"
              boxShadow="sm"
              backgroundColor="white"
              textAlign="center"
              maxW="250px" // Added max width for better responsiveness
              mx="auto" // Center slide content
            >
              <Flex
                align="center"
                mb={4}
                direction={{ base: "column", md: "row" }}
                className="justify-content-between align-items-center"
              >
                <Image
                  borderRadius="full"
                  boxSize="50px"
                  src={review.image}
                  alt={review.name}
                  mb={{ base: 2, md: 0 }} // Margin bottom on smaller screens
                  mr={{ md: 4 }} // Margin right on medium and up screens
                />

                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="d-flex justify-content-between gap-3">
                    <Text
                      className="small-font"
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {review.name}
                    </Text>
                    <Text className="small-font" color="gray.500">
                      {review.platform}
                    </Text>
                  </div>
                  <div className="d-flex gap-1 justify-content-start w-100">
                    {Array(5)
                      .fill()
                      .map((_, index) => (
                        <FaStar key={index} size={10} color="#ffc107" />
                      ))}
                  </div>
                </div>
              </Flex>
              <Text fontSize={{ base: "sm", md: "sm" }} color="gray.700" mb={2}>
                {review.text.length > 100
                  ? review.text.slice(0, 100) + "..."
                  : review.text}
              </Text>
              {review.text.length > 100 && (
                <Button
                  variant="link"
                  color="blue.500"
                  onClick={() => handleShowMore(review)}
                >
                  Show More
                </Button>
              )}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isOpen} onClose={onClose} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedReview && (
              <Box>
                <Image
                  borderRadius="full"
                  boxSize="80px"
                  src={selectedReview.image}
                  alt={selectedReview.name}
                  mb={4}
                />
                <Text fontSize="lg" fontWeight="bold" color="gray.800">
                  {selectedReview.name}
                </Text>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  by {selectedReview.platform}
                </Text>
                <Text fontSize="md" color="gray.700">
                  {selectedReview.text}
                </Text>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Review;
