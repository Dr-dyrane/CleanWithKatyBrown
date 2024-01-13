// src/components/Team/TeamMember.jsx
import React from "react";

const TeamMember = ({ name, role }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img
        src="https://via.placeholder.com/150" // Placeholder image URL
        alt={name}
        className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default TeamMember;
