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
          <p className="text-xl lg:text-2xl  border-l-8 px-12 py-3 font-light">
            Free landing page template to promote your business startup and generate leads for the
            offered services
          </p>
        </div>
        <div className="lg:w-1/2 sm:w-1 object-center px-8 sm:py-4  md:w-1/2 md:mx-32 lg:-mx-1">
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
    <section id="seller" className="py-20  bg-red-600 ">
      <div className="container mx-auto text-center h-screen lg:pt-32">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="buyer" className=" py-20 bg-orange-600">
      <div className="container mx-auto h-screen  ">
        <LabelText className="mb-8 text-gray-600 text-center py-2">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto">
        <LabelText className=" text-gray-600 text-center ">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
      
    </section>
    <section id="retaltor" className="lg:h-screen  bg-yellow-300 pt-6" >
      <div className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
        </p>
      </div> 
      <div className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
        </p>
      </div> 
      
    </section>
  </Layout>
);
