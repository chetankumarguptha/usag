import React from 'react';
import { FaTwitter } from "react-icons/fa";


const Footer = () => (
  <div className="bg-black  py-16 px-3 ">
  <footer className="container mx-auto text-gray-800 content-center">
    <div className="flex mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold text-white font-light">Victor Carrizalez</h2>
        {/* <p className="mt-5 text-gray-500">Lorem ipsum dolor sit amet,minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p> */}
        <div className="mt-2 text-gray-500">Mobile Num: 1236547890</div>
      </div>
      {/* <div className="flex-1 px-3 text-white">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="">Privacy-Policy</a>
          </li>
        </ul>
      </div> */}
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold text-white font-light	">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href=" ">Facebook</a>
          </li>
          <li>
            <a href="">Twitter </a>
            
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  </div>
);

export default Footer;
