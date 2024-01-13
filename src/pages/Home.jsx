// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import CleaningServiceCard from "../components/Home/CleaningServiceCard";
import LocationRow from "../components/Home/LocationRow";
import SearchBar from "../components/Search/SearchBar";
import { cleaningCategories, featuredServices } from "../data/cleaningData";
import Rating from "../components/Home/Rating";

const Home = () => {
  const rating = 4.95;
  const reviews = 73;

  const createInfiniteLoop = (items) => {
    const loopedItems = [];
    for (let i = 0; i < 10; i++) {
      loopedItems.push(...items);
    }
    return loopedItems;
  };

  // Create infinite loops of categories and featuredServices
  const infiniteCategories = createInfiniteLoop(cleaningCategories);
  const infiniteFeaturedServices = createInfiniteLoop(featuredServices);

  return (
    <div className="p-4 flex flex-col items-center justify-center relative">
      <div className="w-full text-slate-100 text-start font-semibold text-4xl sm:text-5xl p-5 md:py-8 bg-hero bg-cover h-60 sm:h-[425px] lg:w-[640px] block justify-center absolute top-0 start-0 lg:z-20">
        <p>
          Clean With <br className="md:hidden" />
          Katy Brown
        </p>
        <p className="italic text-xs hidden md:block w-80 my-8 font-normal">
          "Exceptional cleaning services tailored for your space. Experience
          cleanliness like never before!"
        </p>

        <div className="flex items-start flex-col mt-5">
          <div className="flex">
            <Rating rating={rating} reviews={reviews} />
          </div>
        </div>
      </div>
      <div className="hidden lg:block bg-hero h-[425px] lg:w-[707px] xl:w-[640px] justify-center absolute top-0 right-0"></div>
      <div className="hidden xl:block bg-hero h-[425px] w-[640px] justify-center absolute top-0 right-[640px] z-10"></div>

      <div className="w-full lg:flex-row mt-60 sm:mt-[425px] lg:mt-[340px] z-30 flex flex-col space-x-0 lg:justify-between lg:space-x-2">
        <LocationRow />
        <SearchBar placeholder="Find Cleaning Services..." />
      </div>
      <div className="mt-8 relative">
        <h2 className="flex text-2xl font-bold mb-4 items-center justify-start">
          Service Categories
        </h2>
        <p className="text-start text-xs sm:text-sm mb-4 opacity-80 font-medium italic">
          Explore a variety of cleaning services for different spaces.
        </p>
        <div className="justify-center space-x-2 items-center py-2 flex mt-4 max-w-sm sm:max-w-[640px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl overflow-x-scroll hide-scroll-bar">
          {infiniteCategories.map((service, index) => (
            <div key={`${service.id}-${index}`} className="py-1 inline-block">
              <CleaningServiceCard service={service} />
            </div>
          ))}
          <div className="flex items-center absolute right-0 top-1 text-xs font-medium">
            <Link
              to="/services"
              className="bg-transparent border-[1px] border-indigo-700 text-indigo-700 px-2.5 py-1.5 rounded-3xl hover:bg-indigo-700 hover:text-white focus:outline-none focus:border-indigo-800 focus:ring focus:ring-indigo-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 relative">
        <h2 className="flex text-2xl font-bold mb-4 items-center justify-start">
          Featured Services
        </h2>
        <p className="text-start text-xs m:text-sm opacity-80 mb-4 font-medium italic">
          Indulge in our top-notch cleaning services for a spotless environment.
        </p>
        <div className="flex items-center justify-center space-x-2 py-1 max-w-sm sm:max-w-[640px] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto overflow-scroll hide-scroll-bar">
          {infiniteFeaturedServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="inline-block py-2 px-0.5 h-64 hover:animate-pulse"
            >
              <CleaningServiceCard service={service} />
            </div>
          ))}
          <div className="flex items-center absolute right-0 top-1 text-xs font-medium">
            <Link
              to="/services"
              className="bg-transparent border-[1px] border-indigo-700 text-indigo-700 px-2.5 py-1.5 rounded-3xl hover:bg-indigo-700 hover:text-white focus:outline-none focus:border-indigo-800 focus:ring focus:ring-indigo-200"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
