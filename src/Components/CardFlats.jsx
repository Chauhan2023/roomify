import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import QuarterCircle from './QuaterCircle';

function CardFlats({ profile }) {
  const {
    id,
    profileImgSrc,
    name,
    age,
    images = [],
    price,
    roomType,
    bedrooms,
    apartmentType,
    leaseDuration,
    location
  } = profile;

  return (
    <Link to={`/details/${id}`} className="card-link mb-3" style={{ textDecoration: 'none', color: '#000' }}>
      <Card className='cardflat '>
        <Card.Body className='p-0 position-relative'>
          <Card.Title className='d-flex gap-2 align-items-center px-2 m-0 my-1'>
            <img className='col-3 rounded-circle' src={profileImgSrc} alt='Profile' />
            <p className='h6' style={{ fontWeight: '600' }}>{name}</p>
            <p className='h6' style={{ color: 'var(--primary-dark-color)', fontWeight: 'bold' }}>{age}</p>
          </Card.Title>
          <Carousel interval={null} indicators={false} className='carousel-wrapper'>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className='d-block w-100 '
                  src={image}
                  alt={`Slide ${index + 1}`}
                  style={{ height: '120px', objectFit: 'cover' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Text className='px-2 d-flex flex-column my-1 '>
            <p className='mb-1 fw-body'>
              ₹ <span style={{ fontSize: 'var(--h6-font-size)', fontWeight: 'bold' }}>{price}</span> <span>/month</span>
            </p>
            <p className='mb-1 fw-body'>
              <span>{roomType}</span> . <span>{bedrooms} Bedroom</span>
            </p>
            <p className='mb-1 fw-body'>
              <span>{apartmentType}</span>
            </p>
            <p className='mb-1  fw-body' style={{fontSize:"var(--body-font-size)"}}>
              <span>Date</span> - <span>{leaseDuration} Months</span>
            </p>
            <p className='mb-1 text-secondary fw-small'>{location}</p>
          </Card.Text>
          <QuarterCircle />
        </Card.Body>
      </Card>
    </Link>
  );
}

export default CardFlats;
