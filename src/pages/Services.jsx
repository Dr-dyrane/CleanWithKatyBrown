// src/pages/Services.jsx
import React from "react";
import { cleaningCategories, featuredServices } from "../data/cleaningData";
import SearchBar from "../components/Search/SearchBar";
import CleaningServiceCard from "../components/Home/CleaningServiceCard";

const Services = () => {
  return (
    <div className="p-4 max-w-screen-xl mx-auto relative">
      <div className="w-full text-slate-200 text-start font-bold text-4xl sm:text-5xl p-5 md:py-8 bg-services bg-cover h-60 sm:h-[425px] lg:w-[640px] block justify-center absolute top-0 start-0 lg:z-20">
        <p className="flex flex-col items-center md:items-start p-2 my-8 bg-slate-900/45 rounded-xl">
          ~ OUR SERVICES ~ <br className="md:hidden" />
          <span className="text-2xl sm:text-3xl font-medium md:ml-[35%]">
            Transforming Spaces, Delighting Clients
          </span>
        </p>
        <p className="items-center italic text-xs hidden md:block my-4 font-medium p-4 bg-slate-900/50 rounded-xl">
          Experience the difference with our professional cleaning services.
          Tailored solutions for homes, offices, and more. We take pride in
          delivering excellence in every cleaning task.
        </p>
      </div>
      <div className="hidden lg:block bg-services h-[425px] lg:w-[707px] xl:w-[640px] justify-center absolute top-0 right-0"></div>
      <div className="hidden xl:block bg-services h-[425px] w-[640px] justify-center absolute top-0 right-[640px] z-10"></div>

      <div className="w-full mb-6 mt-60 sm:mt-[425px] z-30">
        <SearchBar placeholder="Search for Cleaning Service..." />
      </div>

      {/* Featured Services */}
      <section>
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700/95">
          Professional Cleaning Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featuredServices.map((service) => (
            <div key={service.id} className="p-1.5">
              <CleaningServiceCard service={service} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
