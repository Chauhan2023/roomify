import React from 'react';

function Newsletter() {
  return (
    <div>
      <div className="bg-custome-newsletter-color py-3 mt-3 pb-5">
        <div className="footer-top container position-relative">
          <div className="block-newsletter dark">
            <h2 className="text-white">Newsletter</h2>
            <h4 className="text-white">Get Personalized Offers On Email</h4>
            <form action="./index.html" className="d-flex">
              <input
                className="form-control mb-2  rounded-0"
                type="email"
                name="email"
                placeholder="Your email address"
                
              />
              <button className="btn btn-dark fw-medium mb-2 rounded-0" type="submit">
                JOIN
              </button>
            </form>

            <h6
              style={{ fontSize: '16px', fontWeight: 200 }} // Corrected inline style
              className="text-white"
            >
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
