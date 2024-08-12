import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure FontAwesome is imported
import HeaderOfferSection from './HeaderOffersection';
import HeaderMarquee from './HeaderMarquee';

const CustomNavbar = () => {

  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("navbar-show");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY && currentScrollY > 50) {
        setScrollDirection("navbar-hide");
      } else {
        setScrollDirection("navbar-show");
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
        <section><HeaderOfferSection/></section>
      <Navbar color="white" light expand="lg" className={`shadow sticky-top container-xxl p-0 navbar ${scrollDirection}`}>
   
   <div className="container-fluid d-flex align-items-center justify-content-between">
     {/* Logo */}
     <NavbarBrand tag={Link} to="/" className="d-flex align-items-center">
       <img
         height={40}
         width={70}
         src="https://roomify.akashsaini.info/wp-content/uploads/2024/04/ROOMIEFY.jpeg"
         alt="Roomify Logo"
       />
     </NavbarBrand>

     {/* Centered Buttons */}
     <div className="mx-auto d-flex gap-3 d-none d-lg-block">
       <NavItem className="list-unstyled rounded-pill text-white btn btn-primary " color="primary">
         <NavLink tag={Link} to="/find_flat" className="btn btn-primary">
           Find a Room
         </NavLink>
       </NavItem>
       <NavItem className="list-unstyled btn btn-primary rounded-pill">
         <NavLink tag={Link} to="/listing" className="">
           Find a Roomie
         </NavLink>
       </NavItem>
     </div>

     {/* Toggler and Login Section */}
     <div className="d-flex align-items-center gap-3">
       <Button
         className="navbar-toggler"
         color="link"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </Button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <Nav className="ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3" navbar>
           {/* <NavItem>
             <NavLink tag={Link} to="/tenant-signup">
               <Button color="light" className="rounded-3" style={{ fontWeight: '600' }}>
                 Tenant Sign Up
               </Button>
             </NavLink>
           </NavItem>

           <NavItem>
             <NavLink tag={Link} to="/signup">
               <Button color="primary" className="rounded-3 text-white" style={{ fontWeight: '600' }}>
                 Roomie Sign Up
               </Button>
             </NavLink>
           </NavItem> */}

           <NavItem>
             <Dropdown isOpen={dropdownOpen} toggle={toggle}>
               <DropdownToggle className="bg-white rounded-pill" style={{ border: '1px solid var(--primary-color)' }}>
                 <i className="fas fa-user" style={{ fontSize: '1rem', color: 'var(--primary-color)' }}></i>
               </DropdownToggle>
               <DropdownMenu end className="bg-white border-0 rounded-3 shadow-lg p-4">
                 {/* <DropdownItem header>Hi, Girish</DropdownItem> */}
                 {/* <DropdownItem divider /> */}
                 <DropdownItem tag={Link} to="/login">Login Tenant</DropdownItem>
                 <DropdownItem tag={Link} to="/profile">Login Roomies</DropdownItem>
                 {/* <DropdownItem tag={Link} to="/notifications">My Notifications</DropdownItem>
                 <DropdownItem tag={Link} to="/preferences">My Preferences</DropdownItem>
                 <DropdownItem tag={Link} to="/bookingstatus">Booking Status</DropdownItem>
                 <DropdownItem tag={Link} to="/">Need Help?</DropdownItem> */}
                 {/* <DropdownItem divider /> */}
                 {/* <DropdownItem tag={Link} className="text-danger" to="/logout">Logout</DropdownItem> */}
               </DropdownMenu>
             </Dropdown>
           </NavItem>
         </Nav>
       </div>
     </div>
   </div>
 </Navbar>

    </>
  );
};

export default CustomNavbar;
