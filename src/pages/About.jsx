// src/pages/About.jsx
import React from "react";
import TeamMember from "../components/Team/TeamMember";

const About = () => {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <section className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">About Our Company</h2>
        <p className="text-gray-600">
          Welcome to Clean With Katy Brown Services, your trusted partner for
          professional cleaning solutions. We are dedicated to delivering
          excellence and making your spaces shine.
        </p>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600">
          At Clean With Katy Brown, our mission is to provide top-notch cleaning
          services tailored to meet the unique needs of our clients. We aim to
          create a clean and healthy environment for every space we touch.
        </p>
      </section>

      <section className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Assuming TeamMember component displays information about a team member */}
          <TeamMember name="Katy Brown" role="Founder & CEO" />
          <TeamMember name="John Doe" role="Head of Cleaning Operations" />
          <TeamMember name="Jane Smith" role="Customer Relations Manager" />
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default About;
