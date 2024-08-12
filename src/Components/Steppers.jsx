import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Text, Circle } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

const slides = [
  { title: 'Step 1', description: 'This is the description for step 1. It provides some details about the first step.' },
  { title: 'Step 2', description: 'This is the description for step 2. It elaborates on what you need to do in the second step.' },
  { title: 'Step 3', description: 'This is the description for step 3. Here are the instructions for the third step.' },
  { title: 'Step 4', description: 'This is the description for step 4. It explains what needs to be done in the fourth step.' },
  { title: 'Step 5', description: 'This is the description for step 5. This is the final step with its details.' },
];

const steps = [
  { title: 'Step 1', description: 'Contact Info' },
  { title: 'Step 2', description: 'Date & Time' },
  { title: 'Step 3', description: 'Select Rooms' },
  { title: 'Step 4', description: 'Review' },
  { title: 'Step 5', description: 'Submit' },
];

const StepCircle = ({ isActive, index, totalSteps }) => (
  <Box position="relative" textAlign="center" p={1} flex="1">
    <Circle
      size="15px"
      bg={isActive ? 'blue.500' : 'gray.300'}
      color="white"
      fontSize="8px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="absolute"
      top="-7px" // Adjust to align the circle with the line
      left="50%"
      transform={`translate(-50%, -50%)`}
      zIndex={1}
    >
      {index + 1}
    </Circle>
    <Box mt="10px"> {/* Adjust the margin top to align text below the circle */}
      <Text fontSize="10px" fontWeight="bold" mb={1}>
        {steps[index].title}
      </Text>
      <Text fontSize="9px">{steps[index].description}</Text>
    </Box>
  </Box>
);

function CustomStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
        setActiveStep((prevStep) => (prevStep + 1) % steps.length);
      }
    }, 1000); // Change step every 1 second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <Box>
        {/* Stepper Header */}
        <Box position="relative" height="50px" mb={4} className="line-behind-circle">
          <Flex justify="space-between" align="center" position="relative">
            {steps.map((step, index) => (
              <StepCircle key={index} isActive={index === activeStep} index={index} totalSteps={steps.length} />
            ))}
          </Flex>
        </Box>
      </Box>

      {/* Swiper */}
      <Box height="100px" p={1}> {/* Set a height for the Swiper container */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: false }} // Disable pagination clicks
          allowTouchMove={false} // Disable touch interactions
          loop={true}
          ref={swiperRef}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box textAlign="center" p={4}>
                
                <Text fontSize="md" color="gray.700">
                  {slide.description}
                </Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default CustomStepper;
