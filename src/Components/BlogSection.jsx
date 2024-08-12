import React from 'react';
import { FaEye, FaRegCommentDots } from 'react-icons/fa'; // Importing from react-icons

const ImageCard = () => {
  return (
    <a href="#" target="_blank" rel="noopener noreferrer" className="image-card">
      <div
        className="image-card-background rounded-3"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)',
        }}
      />
      <div className="image-card-overlay" />
      <div className="image-card-content">
        <div>
          <h6 className="image-card-title">Journey to Swiss Alps</h6>
          <div className="image-card-details">
            <span className="image-card-author text-white">Robert Gluesticker</span>
            <div className="image-card-stats text-end">
              <div className="image-card-stat text-white ">
                <FaEye className="image-card-icon" /> {/* Using FaEye */}
                <span>7847</span>
              </div>
              <div className="image-card-stat">
                <FaRegCommentDots className="image-card-icon" /> {/* Using FaRegCommentDots */}
                <span>5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ImageCard;
