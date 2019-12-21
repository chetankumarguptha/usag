import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl cursor-pointer text-blue-600">
        <div className="w-12 mr-3 cursor-pointer">
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
