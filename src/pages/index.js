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
    <section className="md:pt-10 md:pl-20 " href="home" id="#home"> 
      <div className="container mx-auto px-8 lg:flex flex flex-wrap">
        <div className="text-center lg:text-left py-10 lg:w-1/2  ">
          <h1 className="text-4xl lg:text-5xl py-10 xl:text-6xl font-bold leading-none">
            Victor Carrizalez
          </h1>
          <p className="text-xl lg:text-lg leading-normal  border-l-4 border-gray-800 px-8 py-3 font-light">
          My goal is to cultivate a partnership, utilizing my <a className="font-semibold text-black hover:text-black">EXPERIENCE</a> to bring your ambitions of buying, selling or facilitating real estate sales come to fruition. By taking ownership of your <a className="font-semibold text-black hover:text-black">GOALS</a> a space is created for ultimate satisfaction and fulfillment. As a firm believer that a team is only as strong as it’s weakest link, I play the role of facilitator to the fullest. Willing and able, those around me are <a className="font-semibold text-black hover:text-black">EMPOWERED</a> to reach their highest potential. 
          </p>
            <div className="text-xl lg:text-xl leading-normal   px-12 py-3 font-light">What’s your <a className="font-semibold text-black hover:text-black">DREAM TEAM</a> look like? </div>
        </div>
        <div className="lg:w-1/2 sm:w-1 object-center px-8 sm:py-4 lg:px-32 md:w-1/2 md:mx-32 lg:-mx-1">
          <img src={Personimage}/>
        </div>
      </div>
    </section>
    <section id="" className=" lg:-mt-4 sm:mt-2">
      <div className="w-auto bg-gray-700 top-auto py-16">
          <ui className="flex justify-center flex-wrap">
                <a href="#buyer" className="bg-white hover:bg-blue-700 text-black hover:text-white font-bold ml-4 py-2 px-6 mt-3 border border-blue-700
              rounded"> BUYER  </a>
              <a href="#seller" className="bg-white hover:bg-blue-700 text-black hover:text-white font-bold ml-4 py-2 px-6 mt-3 border border-blue-700 rounded">SELLER  </a>
              <a href="#retaltor" className="bg-white hover:bg-blue-700 text-black hover:text-white font-bold py-2 ml-4 px-6 mt-3 border border-blue-700 rounded">REALTOR  </a>
          </ui>
          <p class="text-center justify-center py-6 px-12 sm:text-center md:text-center lg:text-center  text-white xl:text-center ...">
            The best way to find yourself is by losing yourself in the service of others."  - Mahatma Gandhi</p>
        </div>
    </section>
    <section id="buyer" className="lg:h-screen bg-gray-300 lg:pt-48" >
      <div className="container mx-auto my-20 py-24   rounded-lg text-center">
        <h3 className="text-5xl font-semibold"> Buyer</h3>
        <p className="mt-8 text-xl lg:py-4 font-light">
        If you are looking for <a className="font-semibold text-black hover:text-black">RESILIENT</a> support in one of the biggest investments most people ever make in their life, you came to the right place. In a space of uncertainties, rest assured that as your realtor, I will be your beacon of <a className="font-semibold text-black hover:text-black">LIGHT</a>, guiding you through this joyous journey. Please <a className="font-semibold text-black hover:text-black">GIVE</a> me the pleasure of helping you realize your <a className="font-semibold text-black hover:text-black">DREAMS! </a>
        </p>
      </div> 
      
    </section>
    <section id="seller" className="lg:h-screen bg-gray-100 lg:pt-48" >
      <div className="container mx-auto my-20 py-24   rounded-lg text-center">
        <h3 className="text-5xl font-semibold"> Seller</h3>
        <p className="mt-8 text-xl lg:py-4 font-light">
        <a className="font-semibold text-black hover:text-black">Ease</a> and <a className="font-semibold text-black hover:text-black">Grace</a> is what you get when you say, “VICTOR HELP ME SELL” then hand me the keys. Naturally, one will be put at ease from beginning to end, with constant communication and knowing that you and your goals are supported by a network of individuals who understand the power and importance of collaboration. Implementing proven strategies, anticipating, and true listening is how we will remain in the domain of grace. So...the sooner we close this chapter of your life, the sooner we can open up the next. 
        </p>
      </div> 
      
    </section>
    <section id="retaltor" className="lg:h-screen bg-gray-200 lg:pt-48" >
      <div className="container mx-auto my-20 py-24   rounded-lg text-center">
        <h3 className="text-5xl font-semibold"> Realtor</h3>
        <p className="mt-8 text-xl lg:py-4 font-light">
        My intention is to create a space for <a className="font-semibold text-black hover:text-black">COLLABORATION</a> in order to provide our clients with an experience they will <a className="font-semibold text-black hover:text-black">FOREVER</a> remember. I’ve been fortunate enough to cross paths with soul-centered entrepreneurs who have extended their <a className="font-semibold text-black hover:text-black">RESOURCES</a> to me. To express my never-ending <a className="font-semibold text-black hover:text-black">GRATITUDE</a> I wish to do the same. <a className="font-semibold text-black hover:text-black">ASK ME</a> how I can help you grow your business. Thoughts become reality and I choose <a className="font-semibold text-black hover:text-black">ABUNDANCE</a> for everyone. </p>
      </div> 
      
    </section>
    {/* <section id="" className="lg:h-screen lg:pt-2 md:pt-48" >
      <div className="container mx-auto my-20 py-24  bg-yellow-400 shadow-2xl  items-center rounded-lg ">
      <h3 className="text-5xl font-semibold container mx-auto lg:-mt-4 text-gray-700 text-center">Contact US</h3>
      <div className="border-b-2 border-gray-900"></div>
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
    </section> */}
  </Layout>
);
