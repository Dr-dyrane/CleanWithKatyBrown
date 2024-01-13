// src/components/Services/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="rounded-lg shadow-md p-4">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <div className="mt-4">
        <button
          className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:border-indigo-800 focus:ring focus:ring-indigo-200"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
