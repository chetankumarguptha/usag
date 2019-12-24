import React from 'react';

const Footer = () => (
  <div className="bg-black  py-16 px-3 ">
  <footer className="container mx-auto text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold text-white">About Us</h2>
        <p className="mt-5 text-gray-500">Lorem ipsum dolor sit amet,minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
      </div>
      <div className="flex-1 px-3 text-white">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="">Privacy-Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold text-white">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href=" ">Dev.to</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
);

export default Footer;
