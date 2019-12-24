import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import Personimage  from "../images/Project.svg"
import '../components/layout/layout.css'

export default () => (
  <Layout>
    <section className="md:pt-10 md:pl-20 ">
      <div className="container mx-auto px-8 lg:flex flex flex-wrap">
        <div className="text-center lg:text-left py-10 lg:w-1/2  ">
          <h1 className="text-4xl lg:text-5xl py-10 xl:text-6xl font-bold leading-none">
            Victor Carrizalez
          </h1>
          <p className="text-xl lg:text-2xl  border-l-4 border-gray-800 px-12 py-3 font-light">
            Free landing page template to promote your business startup and generate leads for the
            offered services
          </p>
        </div>
        <div className="lg:w-1/2 sm:w-1 object-center px-8 sm:py-4 lg:px-32 md:w-1/2 md:mx-32 lg:-mx-1">
          <img src={Personimage}/>
        </div>
      </div>
    </section>
    <section id="features" className="">
      <div className="w-auto bg-gray-700 top-auto py-16">
          <ui className="flex justify-center flex-wrap">
                <a href="#buyer" className="bg-white hover:bg-blue-700 text-black hover:text-white font-bold ml-4 py-2 px-6 mt-3 border border-blue-700
              rounded"> BUYER  </a>
              <a href="#seller" className="bg-white hover:bg-blue-700 text-black hover:text-white font-bold ml-4 py-2 px-6 mt-3 border border-blue-700 rounded">SELLER  </a>
              <a href="#retaltor" className="bg-white hover:bg-blue-700 text-black hover:text-white font-bold py-2 ml-4 px-6 mt-3 border border-blue-700 rounded">REALTOR  </a>
          </ui>
          <p class="text-center justify-center py-6 px-12 sm:text-center md:text-center lg:text-center xl:text-center ...">Lorem ipsum dolor sit amet ...</p>
        </div>
    </section>
    <section id="buyer" className="py-20 h-screen bg-gray-300 ">
      <div className="container mx-auto text-center h-screen ">
        <LabelText className="text-black lg:text-4xl md:text-4xl md:py-12">Our Buyer says</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 md:text-xl md:py-2 lg:px-24 lg:py-8 lg:text-2xl">
          {/* <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div> */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24 md:text-xl md:py-2 lg:py-8 lg:text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </div>
      </div>
    </section>
    <section id="seller" className="h-screen py-20 bg-gray-100">
      <div className="container mx-auto h-screen lg:pt-32 ">
        <LabelText className="mb-8 text-black lg:text-4xl sm:text-6xl md:text-4xl text-center py-2">saying about seller</LabelText>
        {/* <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div> */}
        <div className="flex flex-col sm:flex-row mt-8 text-center lg:py-8 lg:text-2xl md:text-xl md:py-2 sm:text-xs lg:px-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="flex flex-col sm:flex-row mt-8 text-center md:text-xl md:py-2 lg:text-2xl lg:px-24">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>    
      
    </section>
    <section id="retaltor" className="lg:h-screen bg-gray-300 lg:pt-42 md:pt-48" >
      <div className="container mx-auto my-20 py-24 bg-yellow-300  rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
        </p>
      </div> 
      
    </section>
    <section id="" className="lg:h-screen lg:pt-2 md:pt-48" >
      <div className="container mx-auto my-20 py-24  bg-yellow-400 shadow-2xl  items-center rounded-lg ">
      <h3 className="text-5xl font-semibold container mx-auto border-b-2 border-gray-900 text-gray-700 text-center">Contact US</h3>
        <form class="w-full max-w-lg lg:py-4 py-4 lg:ml-64 md:ml-32 sm:m-auto lg:px-16 lg:mt-5 sm:mt-4">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 px-6 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-black text-xs  font-bold mb-2" for="grid-first-name">
                First Name:
              </label>
              <input class="appearance-none block w-full bg-gray-200  text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            </div>
            <div class="w-full md:w-1/2 px-6 ">  
              <label class="block uppercase tracking-wide  text-xs text-black font-bold mb-2" for="grid-last-name">
                Last Name:
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 px-4 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-password">
                Gmail:
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-gmail" type="text" placeholder="honey@gmail.com" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 px-4 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-password">
                Phone Number:
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-numb" type="text" placeholder="1234567890" />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 px-4 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-black text-xs font-bold mb-2" for="grid-password">
                Leave your message here:
              </label>
              <textarea class="resize border rounded focus:outline-none focus:shadow-outline px-4  bg-gray-200 text-gray-700 " placeholder="Leave your message here.........."></textarea>
            </div>
          </div>
          <div className="px-4"> 
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">Submit </button>
          </div>
        </form>  
      </div>    
    </section>
  </Layout>
);
