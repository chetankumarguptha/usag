import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import"./layout.css";

const Header = () => (
  
  <header className=" sticky bg-gray-100 top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between  lg:px-24 py-8 ">
      <div className="flex  text-2xl cursor-pointer lg:-ml-4  text-blue-600 lg:float-left" href="#">
        <div className="w-12 mr-3 sm:content-left cursor-pointer  ">
          {/* <LogoIcon /> */}
        </div>
       VR
      </div>
      <div className="flex mt-4 sm:mt-0">
     {/* Menu list
          <AnchorLink className="px-4" href="#features">
            Features
          </AnchorLink>
          <AnchorLink className="px-4" href="#services">
            Services
          </AnchorLink>
          <AnchorLink className="px-4" href="#stats">
            Stats
          </AnchorLink>
          <AnchorLink className="px-4" href="#testimonials">
            Testimonials
          </AnchorLink>
        */}
      </div>
    </div>
  </header>
);

export default Header;



