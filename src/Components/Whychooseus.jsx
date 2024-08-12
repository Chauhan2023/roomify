import React from 'react';

import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";
import icon5 from "../assets/icons/4.png";


const cardData = [
  { image: icon1, title: 'Virtual Visit', text: 'Explore our offerings virtually.' },
  { image: icon2, title: 'Safety', text: 'Your safety is our top priority.' },
  { image: icon3, title: 'Versatile People', text: 'Our team adapts to your needs.' },
  { image: icon4, title: 'Price Match Guarantee', text: 'We match any competitor’s price.' },
  { image: icon5, title: 'Flexible Accommodation', text: 'Our accommodations are flexible.' },
  // Add more cards as needed
];

function CardComponent({ image, title, text }) {
  return (
    <div className='' style={{ border: '', borderRadius: '8px', overflow: 'hidden', width: '100%', margin: '5px' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '80px', objectFit: 'contain' }} />
      <div className='card-body' style={{ padding: '10px' }}>
        <h5 className='card-title text-center' style={{ marginBottom: '5px', fontWeight: '600', fontSize: '1rem' }}>{title}</h5>
        <p className='card-text text-center' style={{ margin: '0', fontSize: '0.875rem' }}>{text}</p>
      </div>
    </div>
  );
}

function WhyChooseUs() {
  // Group cards into sections of 5 cards each
  const sections = [];
  for (let i = 0; i < cardData.length; i += 5) {
    sections.push(cardData.slice(i, i + 5));
  }

  return (
    <div className='container py-lg-5 py-3'>
      <h3 className='text-center'>Why Choose Us</h3>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className='row justify-content-between'>
          {section.map((item, index) => (
            <div className='col-md-2 d-flex justify-content-center' key={index} style={{ padding: '10px' }}>
              <CardComponent image={item.image} title={item.title} text={item.text} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WhyChooseUs;
