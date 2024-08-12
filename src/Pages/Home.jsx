import React from 'react'
import Swiperbanner from '../Components/Swiperbanner'

import SearchRoom from '../Components/SearchRoom'
import SearchByCities from '../Components/SeachByCities';
import Achivment from '../Components/Achivment';
import CitiesCard from '../Components/CitiesCard';
import WhyChooseUs from '../Components/Whychooseus';
import SharedLiving from '../Components/SharedLiving';
import Waywework from '../Components/Waywework';
import Review from '../Components/Review';
import LandLordProperty from '../Components/LandLordProperty';
import BlogSection from '../Components/BlogSection';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';
import HeaderMarquee from '../Components/HeaderMarquee';


function Home() {

  const accordionContent = [
    {
      text: 'City',
      citynames: ['Gurgaon', 'Delhi'],
    },
    {
      text: 'Show me',
      types: ['Room Seekers', 'Team ups to find a place', 'People with rooms', 'Everyone'],
    },
    {
      text: 'Gender',
      buttons: ['Male', 'Female', 'Doesn\'t Matter'],
    },
    {
      text: 'Aged',
      slider: ['18', '99'],
    },
    {
      text: 'Living As',
      buttons: ['Single', 'Couple', 'Doesn\'t Matter'],
    },
    {
      text: 'Status',
      buttons: ['Single', 'Couple', 'Doesn\'t Matter'],
      // Add more content if needed
    }
  ];
  return (
    <div className='container-xxl p-0 w-100 overflow-hidden'>
    <HeaderMarquee/>
    <Swiperbanner/>
    <div className='my-4 my-md-3 my-2'></div>

    <div className='row p-lg-3  d-flex justify-content-center py-5 '>

    <div className='col-lg-9 col-12'><SearchRoom title="Flatmate" content={accordionContent} /></div>
   
      
    </div>

    <div className='my-4 my-md-3 my-2'></div>
    <div className='container'>
    <SearchByCities/>
    </div>
    <div className='my-4 my-md-3 my-3'></div>
    <Achivment/>
    <div className='my-4 my-md-3 my-3'></div>
    <div className='p-5'>
    <h3 className='text-center mb-lg-5  mb-2 fw-bold'>We are live in 5 cites</h3>
    <div className="row px-lg-5 px-md-3 px-2 mb-3">
              {Array(4)
                .fill()
                .map((item, index) => (
                  <div
                    className="col d-flex justify-content-center"
                    key={index}
                  >
                    <CitiesCard name={'Gurugram'} />
                  </div>
                ))}
            </div>


            <div className="row px-lg-5 px-md-3 px-2 mb-3 " >
              {Array(4)
                .fill()
                .map((item, index) => (
                  <div
                    className="col d-flex justify-content-center"
                    key={index}
                    style={{filter:"brightness(0.5)"}}
                  >
                    <CitiesCard name={'We are comming soon'} />
                  </div>
                ))}
            </div>
    </div>


    <div className='container'>
      <WhyChooseUs/>
    </div>

    <div className='container'>
      <SharedLiving/>
    </div>

    <div className='container'>
      <Waywework/>
    </div>

    <div className='review'>
      <Review/>
    </div>


    <div className='landlord'>
    <LandLordProperty/>
    </div>


    <div className='blog py-3'>
      <h2 className='text-center py-3'>Our Blogs</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <BlogSection />
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <BlogSection />
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <BlogSection />
          </div>
          <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <BlogSection />
          </div>
        </div>
      </div>
    </div>

    <div>
      <Newsletter/>
    </div>

    <div>
      <Footer/>
    </div>
    



    
    </div>
  )
}

export default Home