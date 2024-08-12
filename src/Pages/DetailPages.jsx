import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Carousel,
  Image,
} from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaUser,
  FaRupeeSign,
  FaBed,
  FaTransgender,
} from "react-icons/fa";
import Footer from "../Components/Footer";

const DetailsPage = () => {
    const interests = [
        { name: 'Night Owl', imageUrl: 'https://via.placeholder.com/60' },
        { name: 'Wanderer', imageUrl: 'https://via.placeholder.com/60' },
        { name: 'Party Lover', imageUrl: 'https://via.placeholder.com/60' },
        { name: 'Pet Lover', imageUrl: 'https://via.placeholder.com/60' },
        { name: 'Music Lover', imageUrl: 'https://via.placeholder.com/60' },
      ];
  return (
    <>
        <Container className="mt-5">
      {/* Hyperlink at the top */}
      <Row className="mb-3">
        <Col>
          <a href="/">Home</a> / <a href="/">Looking for Roommate</a> /{" "}
          <a href="/">Shaurya Thapa</a>
        </Col>
      </Row>
      <Row>
        {/* Left Card */}
        <Col md={5} className="d-flex justify-content-center">
          <Card
            className="text-center mb-4 shadow col-10"
            style={{ height: "300px" }}
          >
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/144"
                className="rounded-circle mb-3"
                style={{ width: "144px", height: "144px" }}
              />
              <Card.Title>Shaurya Thapa</Card.Title>
              <div className="d-flex justify-content-center">
                <Button variant="primary" className="me-3">
                  Chat
                </Button>
                <Button variant="secondary">Call</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Card */}
        <Col md={7}>
          <Card className="shadow mb-4 position-relative">
            <Card.Body>
              {/* Booked Room Button at the top right */}
              <Button
                variant="success"
                className="position-absolute"
                style={{ top: "25px", right: "10px" }}
              >
                Booked Room
              </Button>

              <Card.Title>Location</Card.Title>
              <Card.Text className="d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" /> Delhi, India
              </Card.Text>
              <hr />
              <Card.Title>Basic Info</Card.Title>
              <Row>
                <Col md={6}>
                  <Card.Text className="d-flex align-items-center">
                    <FaUser className="me-2" /> Gender: Male
                  </Card.Text>
                  <Card.Text className="d-flex align-items-center">
                    <FaRupeeSign className="me-2" /> Approx Rent: ₹10000
                  </Card.Text>
                </Col>
                <Col md={6}>
                  <Card.Text className="d-flex align-items-center">
                    <FaBed className="me-2" /> Occupancy: Single
                  </Card.Text>
                  <Card.Text className="d-flex align-items-center">
                    <FaTransgender className="me-2" /> Looking For: Any
                  </Card.Text>
                </Col>
              </Row>
              <hr />
              {/* Status Section */}
              <Card.Title>Status</Card.Title>
              <Card.Text>Available</Card.Text>
              <hr />
              {/* Pictures Section */}
              <Card.Title>Pictures</Card.Title>
              <Carousel className="mb-4">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/200x300"
                    alt="First slide"
                    style={{
                      width: "200px",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/200x300"
                    alt="Second slide"
                    style={{
                      width: "200px",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/200x300"
                    alt="Third slide"
                    style={{
                      width: "200px",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "15px",
                      margin: "auto",
                    }}
                  />
                </Carousel.Item>
              </Carousel>
              <hr />
              {/* Preferences Section */}
              <Card.Title>Preferences</Card.Title>
              <Row className="text-center">
                {interests.map((interest, index) => (
                  <Col
                    key={index}
                    className="mb-3 col-md-4 d-flex flex-column align-items-center"
                  >
                    <Image src={interest.imageUrl} roundedCircle />
                    <div>{interest.name}</div>
                  </Col>
                ))}
              </Row>
              <hr />
              {/* Description Section */}
              <Card.Title>Description</Card.Title>
              <Card.Text style={{fontSize:"var(--small-font-size)"}}>
                Looking for a roommate who shares similar interests and
                lifestyle preferences. The room is well-furnished and located in
                a prime area of Delhi with easy access to public transport,
                markets, and parks. The apartment includes a separate washroom,
                attached balcony, and housekeeping services. Ideal for someone
                who values convenience and a comfortable living environment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </Container>
    <Footer/>
    </>
  );
};

export default DetailsPage;
