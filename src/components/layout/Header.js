import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import"./layout.css";

const Header = () => (
  <header className=" top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between  mx-auto py-4 ">
      <div className="flex  text-2xl cursor-pointer lg:-ml-4 text-blue-600 lg:float-left" href="#">
        <div className="w-12 mr-3 sm:content-left cursor-pointer">
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



{/* <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article> */}