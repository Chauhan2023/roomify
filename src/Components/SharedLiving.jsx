import React from 'react';

// Import images
import image1 from '../assets/images/337607-PANYU5-177.jpg';
import image2 from '../assets/images/2691166.jpg';
import image3 from '../assets/images/10198948.jpg';

const contentData = [
  {
    image: image1,
    title: 'Looking for A Place To Stay?',
    description: 'Find Comfy Rooms and Like-Minded Roommates in Mumbai, Delhi, Bengaluru, and More!',
    link: '#'
  },
  {
    image: image2,
    title: 'Meet Like Minded Roomies',
    description: 'Share Your Vacant Room in Delhi, Bengaluru, Hyderabad and Beyond!',
    link: '#'
  },
  {
    image: image3,
    title: 'Rent PGs & Flats Directly',
    description: 'Connect Directly with Property Owners Offering Youth-Friendly PGs & Flats in Mumbai, Pune, Chennai, and More!',
    link: '#'
  },
];

function SharedLiving() {
  return (
    <div className='container py-5'>
      <h2 className='text-center'>Easy Shared Living in Top Indian Cities!</h2>
      <div className='row pt-5'>
        {contentData.map((item, index) => (
          <div key={index} className='col-lg-4 col-md-6 mb-4 d-flex justify-content-center'>
            <div className='card' style={{ width: '100%', border: 'none' }}>
              <img 
                src={item.image} 
                alt={item.title} 
                className='card-img-top img-fluid' 
                style={{ height: '', objectFit: 'cover' }} 
                loading='lazy'
              />
              <div className='card-body text-center'>
                <h5 className='card-title'>
                  <a href={item.link} className='text-main text-dark'>
                    {item.title}
                  </a>
                </h5>
                <p className='card-text shared-section-detail'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SharedLiving;
