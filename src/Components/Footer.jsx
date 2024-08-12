import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
function Footer() {
    return (
      <div>
        <footer
          className="footer footer_type_2 bg-secondary-subtle py-lg-4 py-3 position-relative"
        >
          <div className="footer-middle container position-relative">
            <div className="row row-cols-lg-5 row-cols-2">
              <div className="footer-column footer-menu mb-3 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase text-center text-dark">
                  Company
                </h6>
                <ul className="sub-menu__list list-unstyled">
                  {[
                    { text: 'About Us', link: '/about' },
                    { text: 'Mission', link: '/mission' },
                    { text: 'Vision', link: '/vision' },
                    { text: 'Our Partners', link: '/ourpartner' },
                    { text: 'Career', link: '/careers' },
                    { text: 'Blog', link: '/blog' },
                    { text: 'Press Release', link: '/press' },
                  ].map(({ text, link }) => (
                    <li className="sub-menu__item text-center" key={link}>
                      <Link to={link} className="menu-link menu-link_us-s">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="footer-column footer-menu mb-3 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase text-center text-dark">
                  Policy
                </h6>
                <ul className="sub-menu__list list-unstyled">
                  {[
                    { text: 'Privacy Policy', link: '/privacy-policy' },
                    { text: 'Delivery Policy', link: '/deliverypolicy' },
                    { text: 'Cancellation Policy', link: '/cancelpolicy' },
                    { text: 'Refund Policy', link: '/refund' },
                    { text: 'Terms of Use', link: '/termofuse' },
                    { text: '100% Purchase Protection', link: '/purchaseprotection' },
                    { text: '100% Quality Assurance', link: '/qualityassurance' },
                  ].map(({ text, link }) => (
                    <li className="sub-menu__item text-center" key={link}>
                      <Link to={link} className="menu-link menu-link_us-s">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="footer-column footer-menu mb-3 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase text-center text-dark">
                  Shop
                </h6>
                <ul className="sub-menu__list list-unstyled">
                  {[
                    { text: 'New Arrival', link: '/lookbook' },
                    { text: 'Most Selling', link: '/account_detail' },
                    { text: 'Video Invitation', link: '/store_location' },
                    { text: 'Card Invitation', link: '/contact' },
                    { text: 'Offers & Promotion', link: '/offerAndPromotion' },
                  ].map(({ text, link }) => (
                    <li className="sub-menu__item text-center" key={link}>
                      <Link to={link} className="menu-link menu-link_us-s">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="footer-column footer-menu mb-3 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase text-center text-dark">
                  Make Money with Us
                </h6>
                <ul className="sub-menu__list list-unstyled">
                  {[
                    { text: 'List your Design', link: '/upload' },
                    { text: 'Become an Affiliate', link: '/affiliate' },
                    { text: 'Design with us', link: '/designwithus' },
                    { text: 'Partner with us', link: '/partner' },
                  ].map(({ text, link }) => (
                    <li className="sub-menu__item text-center" key={link}>
                      <Link to={link} className="menu-link menu-link_us-s">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="footer-column mb-3 mb-lg-0">
                <h6 className="sub-menu__title text-uppercase text-center text-dark">
                  Account
                </h6>
                <ul className="sub-menu__list list-unstyled">
                  {[
                    { text: 'My Account', link: '/account_detail' },
                    { text: 'My Order', link: '/orders' },
                    { text: 'My Wishlist', link: '/store_location' },
                    { text: 'Gift Cards', link: '/contact' },
                    { text: 'My Offers', link: '/myoffer' },
                    { text: 'Request a Card', link: '/requestcard' },
                    { text: 'Request a Video', link: '/requestvideo' },
                    { text: 'Leave a Review', link: '/leavereview' },
                  ].map(({ text, link }) => (
                    <li className="sub-menu__item text-center" key={link}>
                      <Link to={link} className="menu-link menu-link_us-s">
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
  
          <div className="container mb-4 d-flex justify-content-center flex-column">
            <div className="d-flex col-12 align-items-end px-1">
              <div className="col-lg-5 col-2 col-md-3" style={{ height: '2px', background: 'var(--primary-color)' }}></div>
              <div
                className="col-8 col-md-6 col-lg-2 d-flex justify-content-center align-items-end h4 text-dark"
                style={{ transform: 'translateY(20px)' }}
              >
                Get In Touch
              </div>
              <div className="col-lg-5 col-2 col-md-3" style={{ height: '2px', background: 'var(--primary-color)' }}></div>
            </div>
  
            <div
              className="d-flex justify-content-between rounded-2 mb-2 flex-md-row flex-column position-relative p-3"
              style={{
                borderLeft: '2px solid var(--primary-color)',
                borderRight: '2px solid var(--primary-color)',
                borderBottom: '2px solid var(--primary-color)',
              }}
            >
              <div className="d-flex flex-column">
                <h5 className="text-center text-dark">100% Secure Payments:</h5>
                <img src="https://invite.probeyproject.online/assets/images/icon/logo_secure_payment.png" width="190" height="27" alt="" />
              </div>
  
              <div className="d-flex flex-column">
                <h5 className="text-center text-dark">Email</h5>
                <p className="text-center text-dark">roomiefy@gmail.com</p>
              </div>
              <div className="d-flex flex-column">
                <h5 className="text-center text-dark">Phone</h5>
                <p className="text-center text-dark">123456789</p>
              </div>
              <div className="d-flex flex-column">
                <h5 className="text-center text-dark">Follow Us</h5>
                <ul className="social-links list-unstyled d-flex flex-wrap mb-0 justify-content-center">
                  <li>
                    <a
                      href="https://www.facebook.com/ProbeyServices"
                      className="footer__social-link d-block text-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="svg-icon svg-icon_facebook" width="9" height="15" viewBox="0 0 9 15" xmlns="http://www.w3.org/2000/svg">
                        <use href="#icon_facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com"
                      className="footer__social-link d-block text-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="svg-icon svg-icon_twitter" width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
                        <use href="#icon_twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/ProbeyServices"
                      className="footer__social-link d-block text-dark"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="svg-icon svg-icon_instagram" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <use href="#icon_instagram"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
         
          <footer className="footer footer_type_2 bg-secondary-subtle pb-lg-4 py-3 position-relative">
  {/* Other content */}
  <p className="position-absolute bottom-0 start-50 translate-middle-x"> 
    &copy; 2024 All Rights Reserved
  </p>
  <p className="position-absolute bottom-0 end-0"> 
    Powered By Probey
  </p>
</footer>

    
        </footer>
      </div>
    );
  }
  
  export default Footer;
  