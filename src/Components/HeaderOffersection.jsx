import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import { Container, Row, Col } from 'react-bootstrap';

// Import Swiper modules
import { Autoplay,  Pagination, Navigation } from 'swiper/modules'; // Import necessary modules

// Example offers
const offers = [
  "10% off for new roomies",
  "20% off on first booking",
  "Free breakfast for first month",
  "Refer a friend and get 15% off",
  "No security deposit for the first 3 months"
];

const HeaderOffersection = () => {
  return (
    <div style={{ backgroundColor: 'var(--primary-dark-color)', padding: ' 0' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} sm={12}>
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
             
              
              className="offer-swiper"
            >
              {offers.map((offer, index) => (
                <SwiperSlide key={index} className="text-center text-white">
                  <span>{offer}</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderOffersection;
