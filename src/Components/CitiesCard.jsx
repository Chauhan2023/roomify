import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CitiesCard({name}) {
  return (
    <Card  className='rounded-3 mb-2 position-relative card-cities-width'>
      <Card.Img variant="" className='rounded-3' src="https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg" />
      <div className='p-2 position-absolute col-10 start-50 translate-middle-x rounded-3' style={{ background: '#3F3F3F7D', boxShadow: 'rgb(188 188 188 / 56%) 0px 6px 8px', bottom: '10px', zIndex: '1' }}>
        <Link to="/detail/:id" className='text-decoration-none'>
          <h6 className='text-white p-0' style={{ fontWeight: '600' }}>{name}</h6>
        </Link>
      </div>
      {/* Ensure the z-index of the Card is higher than the shadow's */}
     
    </Card>
  );
}

export default CitiesCard;