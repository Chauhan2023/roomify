// src/pages/ListingPage.jsx

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequirementModal from '../Components/RequirementModal';
import AddRoomDetail from '../Components/AddRoomDetail';

const ListingPage = () => {
  const [showModalRequirment, setShowModalRequirment] = useState(false);
  const [showModalAddRoom, setShowModalAddRoom] = useState(false);


  const handleShowModal = () => {
  
    setShowModalRequirment(true);
  }

  const handleCloseModal = () => {
    setShowModalRequirment(false);
  }



  const handleShowModal2 = () => {
  
    setShowModalAddRoom(true);
  }

  const handleCloseModal2 = () => {
    setShowModalAddRoom(false);
  }

  return (
    <div className=" mt-5">
      <h1 className="mb-4 text-center">Roomify</h1>
      <h1 className="mb-4 text-center h3">Post Your Requirement</h1>
      <p className='text-center'>Find your perfect roommates or room effortlessly. Just post your </p>
      <p className='text-center'>requirement and let the matching begin</p>

      <div className="row col-12 d-flex justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card p-3">
            <h3><strong>Add Requirement</strong></h3>
            <h3><strong>Roomies</strong></h3>
            <div className="">
              <a href="#" className="btn btn-primary" onClick={() => handleShowModal('Enter Requirement')}>Enter Requirement</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card p-3">
            <h3><strong>List</strong></h3>
            <h3><strong>Room/Flat</strong></h3>
            <div className="">
              <a href="#" className="btn btn-primary" onClick={() => handleShowModal2()}>List Room</a>
            </div>
          </div>
        </div>
      </div>

      <RequirementModal isOpen={showModalRequirment} toggle={handleCloseModal} />
      <AddRoomDetail isOpen={showModalAddRoom} toggle={handleCloseModal2} />
    </div>
  );
}

export default ListingPage;