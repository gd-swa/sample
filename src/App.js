import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import amisoImage from './assets/amiso.png';
import cleanman from './assets/cleanman.jpg';
import time from './assets/time.png';
import guarantee from './assets/guarantee.png';
import houseclean from './assets/houseclean.jpg';
import fast from './assets/fast.png';
import professional from './assets/professional.png';
import home from './assets/home.png';
import window from './assets/window.png';
import office from './assets/office.png';
import girly from './assets/girly.jpg';
import girly1 from './assets/girly1.jpg';
import girly2 from './assets/girly2.jpg';
import clean1 from './assets/clean1.jpg';
import clean2 from './assets/clean2.jpg';
import clean3 from './assets/clean3.png';

const Header = () => (
  <header className="bg-[#297a92] text-white p-4 shadow-md h-190">
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
        <span className="flex items-center space-x-2">
          <i className="fa fa-phone"></i> 
          <span>01234-56789</span>
        </span>
        <span className="flex items-center space-x-2">
          <i className="fa fa-envelope"></i> 
          <span>amiso@gmail.com</span>
        </span>
      </div>
      <div className="flex space-x-4">
        <span>
          <i className="fa fa-facebook-f"></i>
        </span>
        <span>
          <i className="fa fa-twitter-square"></i>
        </span>
        <span>
          <i className="fa fa-instagram"></i>
        </span>
        <span>
          <i className="fa fa-linkedin"></i>
        </span>
        <button className="bg-[#0f7276] text-white px-4 py-2 rounded">
          <i className="fas fa-calculator"></i> Get a Quote
        </button>
      </div>
    </div>
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-white bg-opacity-50 p-1 mt-2">
      <div className="flex items-center space-x-2">
        <img className="w-10 h-10" src={amisoImage} alt="amiso" />
        <h1 className="text-xl md:text-2xl text-black font-bold">amiso</h1>
      </div>
      <nav className="flex flex-wrap justify-center md:justify-end space-x-6 md:space-x-10 font-medium">
        <a href="#" className="hover:text-gray-200 no-underline text-gray-700">
          Home
        </a>
        <a href="#" className="hover:text-gray-200 no-underline text-gray-700">
          About
        </a>
        <a href="#" className="hover:text-gray-200 no-underline text-gray-700">
          Services
        </a>
        <a href="#" className="hover:text-gray-200 no-underline text-gray-700">
          Team
        </a>
        <a href="#" className="hover:text-gray-200 no-underline text-gray-700">
          Contact
        </a>
      </nav>
    </div>
    <div className=" md:text-left mt-6 px-4 md:px-8 ml-6 h-[210px]">
      <p className="text-white tracking-wide">RENEW YOUR LOOK</p>
      <h1 className="text-white text-2xl md:text-4xl mt-2 tracking-wide">
        A TRADITION OF <br /> QUALITY CLEANING
      </h1>
      <button className="px-6 py-2 mt-4 bg-transparent border border-white rounded">
        Contact Us
      </button>
    </div>
  </header>
);


const FeaturesSection = () => (
  <section className="py-20 bg-[#355f9b]">
    <div class="container  grid grid-cols-1 md:grid-cols-3 gap-8 flex justify-center item-center mt-[-110px] ">
      <div className="p-4 border rounded shadow-sm bg-white text-center flex flex-col items-center">
        <img className="w-20 h-15 mb-4" src={home} alt="home" />
        <h3 className="text-xl font-bold">Professional Cleaning</h3>
        <p className="text-gray-400">HouseKeeping is responsible for minor security in hotel Ecosystem for Food and cleaner through.</p>
      </div>
      <div class="p-4 border rounded shadow-sm  bg-white text-center flex flex-col items-center">
        <img className="w-20 h-15 mb-4 " src={window} alt="window" />
        <h3 class="text-xl font-bold"> Fast and efficient</h3>
        <p className="text-gray-400">Our Aim is to keep the House Clean-Your Aim Will Help!the through Digital Innovation World Summit.</p>
      </div>
      <div class="p-4 border rounded shadow-sm bg-white text-center flex flex-col items-center">
        <img className="w-20 h-15 mb-4" src={office} alt="office" />
        <h3 class="text-xl font-bold">Renew your look</h3>
        <p className="text-gray-400">Both of us take a lot of time in getting cleaned and beautiful Clean Home.Professional Service.</p>
      </div>
    </div>
    <div class="container  grid grid-cols-1 md:grid-cols-3 gap-8 flex justify-center item-center  ">
      <div class="mt-4">
        <h1 className="text-black">A clean House is a
          Happy Place!.</h1>
        <p className="text-white">Washla has met the demands of a growing world.</p>
      </div>
      <div class="mt-4">
        <p className="text-white"><i class="fa fa-wikipedia-w"></i>ashla is a delivery app that offers cleaning and dry cleaning services for items like bags, sneakers, caps, and laundry. Washla also offers leather cleaning services.</p>
      </div>
      <div class="mt-4">
        <p className="text-white">Washla is a delivery app that offers cleaning and dry cleaning services for items like bags, sneakers, caps, and laundry. Washla also offers leather cleaning services.</p>
      </div>
    </div>
  </section>
);


const AboutUsSection = () => (
  <section className="py-8 bg-white ">
    <div className="container mx-auto text-center">
      <p className="mt-4 text-gray-600 font-medium">WHY CHOOSE US</p>
      <h2 className="text-3xl font-bold">Tradition of Trust</h2>
      <p className="mt-4 text-gray-600">
        We specialize in intelligent & effective search and believe in the power of <br />
        partnership to grow businesses.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <img
            className="w-16 h-16 border rounded-full mb-4"
            src={cleanman}
            alt="cleanman"
          />
          <h3 className="text-xl font-bold">Professional Team</h3>
          <p className="text-gray-400 mt-2">
            Our team uses a sanitizing solution to <br />
            swipe down light switches and doorknobs.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-16 h-16 border rounded-full mb-4"
            src={time}
            alt="24/7 Services"
          />
          <h3 className="text-xl font-bold">24/7 Services</h3>
          <p className="text-gray-400 mt-2">
            We encourage our customers to let us <br />
            know in advance of an appointment.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            className="w-16 h-16 border rounded-full mb-4"
            src={guarantee}
            alt="Service Guarantee"
          />
          <h3 className="text-xl font-bold">Service Guarantee</h3>
          <p className="text-gray-400 mt-2">
            We ensure our team members switch out all <br />
            cleaning cloths and mop heads.
          </p>
        </div>
      </div>
    </div>
  </section>
);


const ServiceSection = () => (
  <section className="py-10 ">
    <div className="container mx-auto flex items-center">
      <div className="flex-shrink-0">
        <img
          className="w-[670px] h-[390px] -z-10 relative"
          src={houseclean}
          alt="House Cleaning"
        />
      </div>
    </div>
  </section>
);


const GreatServiceSection = () => (
  <section className="bg-blue-100 py-16 ">
    <div className="text-left ml-[670px] mt-[-450px] w-[750px] p-6 bg-white border rounded-lg shadow-lg">
      <p className="mt-4 text-gray-600 font-medium uppercase tracking-wider">
        MAID FOR YOU
      </p>
      <h2 className="text-3xl font-bold mt-2">
        A Cleaner Place is a Safer Place.
      </h2>
      <p className="mt-4 text-gray-600">
        Washing cleaning service. We are a company dedicated to giving customers back the
        <br />
        time they deserve to enjoy the things that matter most.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <img
            className="w-16 h-16 border rounded-full mb-4"
            src={fast}
            alt="fast"
          />
          <h3 className="text-xl font-bold">Professional Cleaning</h3>
          <p className="text-gray-500 mt-2">
            Housekeeping is responsible for major
            <br />
            security in hotels.
          </p>
        </div>
        <div className="">
          <img
            className="w-16 h-16 border rounded-full mb-4"
            src={professional}
            alt="professional"
          />
          <h3 className="text-xl font-bold">Fast and efficient</h3>
          <p className="text-gray-500 mt-2">
            Both of us take a lot of time in getting
            <br />
            cleaned clean home.
          </p>
        </div>
      </div>
    </div>
    <div className="text-center mb-8 mt-8">
      <h5 className="text-white font-medium uppercase">Why Choose Us</h5>
      <h1 className="text-3xl font-bold text-gray-800">Our Great Services</h1>
      <p className="text-white mt-4">
        Washing cleaning service. We are a company dedicated to giving customers back the
        <br />
        time they deserve to enjoy the things that matter most.
      </p>
    </div> <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
      <div className="p-6 border rounded shadow-sm bg-[#0dcaf0] flex items-start flex-col">
        <img className="w-12 h-12 mr-4" src={home} alt="Home Cleaning" />
        <div>
          <h3 className="text-lg font-bold text-white">Home Cleaning</h3>
          <div className="mt-4 text-white">
            <p>Our home cleaning services include deep cleaning of living rooms, bedrooms, kitchens, and bathrooms. We use eco-friendly products to ensure the safety of your home.</p>
          </div>
        </div>
      </div>
      <div className="p-6 border rounded shadow-sm bg-[#0dcaf0] flex items-start flex-col">
        <img className="w-12 h-12 mr-4" src={window} alt="Window Cleaning" />
        <div>
          <h3 className="text-lg font-bold text-white">Window Cleaning</h3>
          <div className="mt-4 text-white">
            <p>Our window cleaning service ensures your windows are streak-free and crystal clear. We handle both interior and exterior cleaning for all types of windows.</p>
          </div>
        </div>
      </div>
      <div className="p-6 border rounded shadow-sm bg-[#0dcaf0] flex items-start flex-col">
        <img className="w-12 h-12 mr-4" src={office} alt="Office Cleaning" />
        <div>
          <h3 className="text-lg font-bold text-white">Office Cleaning</h3>
          <div className="mt-4 text-white">
            <p>Our office cleaning service keeps your work environment spotless. We clean desks, floors, restrooms, and other areas, promoting a healthier workplace.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const TeamSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h3 className="text-gray-500">MEET OUR</h3>
      <h2 className="text-3xl font-bold">Our Team</h2>
      <p className="text-gray-500">The member of our highly experienced team is dedicated to providing you <br />
        with only the best service we can posssibly provide
      </p>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="flex justify-center">
          <img className="w-100 h-45 " src={girly} alt="House Cleaning" />
        </div>
        <div className="flex justify-center">
          <img className="w-100 h-45" src={girly1} alt="House Cleaning" />
        </div>
        <div className="flex justify-center">
          <img className="w-100 h-45" src={girly2} alt="House Cleaning" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
        <div className="p-4 border rounded shadow-sm ml-4 mt-[-4]">
          <h3 className="mt-4 font-bold">Monica Garden</h3>
          <p>House Cleaning</p>
        </div>
        <div className="p-4 border rounded shadow-sm">
          <h3 className="mt-4 font-bold">Laura Jones</h3>
          <p>Cleaner</p>
        </div>
        <div className="p-4 border rounded shadow-sm">
          <h3 className="mt-4 font-bold">Sara Ryan</h3>
          <p>Office Cleaner</p>
        </div>
      </div>
    </div>
  </section>
);


const TeamCleanSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h6 className="text-gray-400">WHY CHOOSE US</h6>
      <h2 className="text-3xl font-bold">Recent News</h2>
      <p className="text-gray-500">We specailaise in intelligent & effective serach and believes in the power of <br />
        partnerships to grow business
      </p>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="flex justify-center relative overflow-hidden">
          <div className="absolute transform rotate-45 bg-[#297a92] text-center text-white font-semibold py-4 right-[-55px] top-[-5px] w-[190px]">
            NOV 11
          </div>
          <img className="w-100 h-45 " src={clean1} alt="House Cleaning" />
        </div>
        <div className="flex justify-center relative overflow-hidden">
          <div className="absolute transform rotate-45 bg-[#297a92] text-center text-white font-semibold py-4 right-[-55px] top-[-5px] w-[190px]">
            NOV 12
          </div>
          <img className="w-100 h-45" src={clean2} alt="House Cleaning" />
        </div>
        <div className="flex justify-center relative overflow-hidden">
          <div className="absolute transform rotate-45 bg-[#297a92] text-center text-white font-semibold py-4 right-[-55px] top-[-5px] w-[190px]">
            NOV 13
          </div>
          <img className="w-100 h-45" src={clean3} alt="House Cleaning" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="p-4 border rounded shadow-sm ml-4 mt-[-4] text-left">
          <h5 className="text-gray-500 text-left">CLEANING</h5>
          <h3 className="mt-4 font-bold">Temporary Ruling</h3>
          <p className="text-gray-500">Washla has met the demands of a growing,world cleaning tremendous</p>
          <span><i class="fa fa-user-circle-o"></i> Martha Smith</span>
        </div>
        <div className="p-4 border rounded shadow-sm text-left">
          <h5 className="text-gray-500 text-left">CLEANING</h5>
          <h3 className="mt-4 font-bold">The Expands California</h3>
          <p className="text-gray-500">Washla has met the demands of a growing,world cleaning tremendous</p>
          <span><i class="fa fa-user-circle-o"></i> Laura Jones</span>
        </div>
        <div className="p-4 border rounded shadow-sm text-left">
          <h5 className="text-gray-500 text-left">CLEANING</h5>
          <h3 className="mt-4 font-bold">Temporary Ruling Issued</h3>
          <p className="text-gray-500"> Washla has met the demands of a growing,world cleaning tremendous</p>
          <span><i class="fa fa-user-circle-o"></i> Matt Ryan</span>
        </div>
      </div>
    </div>
  </section>
);


const FooterSection = () => (
  <footer className="text-black py-10 ">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-2">
          <img className="w-10 h-10" src={amisoImage} alt="amiso" />
          <h1 className="text-2xl text-black font-bold">amiso</h1>
        </div>
        <p className="text-gray-500 mt-2">Washla has met the demands of a growing, world cleaning tremendous</p>
      </div>
      <div>
        <h4 className="text-lg font-bold">Get in Touch</h4>
        <p className="text-gray-500">8273 NW 56th ST Miami,Florida.</p>
        <p className="text-gray-500">33195 United States</p>
        <p className="text-gray-500">Email: info@example.com</p>
        <p className="text-gray-500">Phone: (123) 456-7890</p>
      </div>
      <div>
        <h4 className="text-lg font-bold ml-8">Quick Links</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="text-left">
            <li>
              <a href="/home" className="text-gray-500 hover:text-blue-500 no-underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-500 hover:text-blue-500 no-underline">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-500 hover:text-blue-500 no-underline">
                Services
              </a>
            </li>
            <li>
              <a href="/team" className="text-gray-500 hover:text-blue-500 no-underline">
                Team
              </a>
            </li>
          </ul>
          <ul className="text-left">
            <li>
              <a href="/faq" className="text-gray-500 hover:text-blue-500 no-underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-500 hover:text-blue-500 no-underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/gallery" className="text-gray-500 hover:text-blue-500 no-underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="/blog" className="text-gray-500 hover:text-blue-500 no-underline">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">Our Newsletter</h4>
        <p className="text-gray-500">Subscribe to our newsletter to receive the latest news about our services.</p>
        <form>
          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 p-2 rounded bg-gray-200 text-black border border-gray-300"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </footer>
);


const DetailSection = () => (
  <section className="py-10">
    <div className="flex justify-between items-center">
      <div className="flex space-x-4 px-16">
        <span>
          <i className="fa fa-copyright"></i> 2023 amiso all rights reserved.
        </span>
      </div>
      <div className="flex space-x-4 px-6">
        <span>
          <i className="fa fa-facebook-f"></i>
        </span>
        <span>
          <i className="fa fa-twitter-square"></i>
        </span>
        <span>
          <i className="fa fa-instagram"></i>
        </span>
        <span>
          <i className="fa fa-linkedin"></i>
        </span>
      </div>
    </div>
  </section>
);


const App = () => {
  return (
    <div>
      <Header />
      <FeaturesSection />
      <AboutUsSection />
      <ServiceSection />
      <GreatServiceSection />
      <TeamSection />
      <TeamCleanSection />
      <FooterSection />
      <DetailSection />
    </div>
  );
};

export default App;
