import React, { useState, useEffect } from "react";
// import bgVideo from "../assets/runningbusundefined.mp4";
// import {
//   FaBus,
//   FaCalendarCheck,
//   FaMapMarkedAlt,
//   FaUsers,
// } from "react-icons/fa";

const Landing = () => {
  const [registeredUsers, setRegisteredUsers] = useState(0);

  useEffect(() => {
    setRegisteredUsers(128);
  }, []);

  return (
    <div className="w-full">
      <div className="relative h-screen w-full">
        {/* Background Video */}
        <div className="relative h-screen w-full overflow-hidden">
          <video
            className="absolute top-[-100px] left-0 w-full h-auto min-h-full object-cover -z-10"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./runningbusundefined.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

          {/* Hero Section */}
          <div className="flex flex-col justify-center items-center h-full text-white text-center">
            <h1 className="text-9xl font-bold mb-4">Welcome to Vayoo</h1>
            <p className="text-3xl max-w-2xl">
              Book your tickets easily, track buses in real time, and manage
              routes with just a click.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0D1224] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Book Tickets",
                desc: "Reserve your seat on any bus route instantly.",
              },
              {
                title: "Track Buses",
                desc: "Real-time GPS tracking of buses for safe travel.",
              },
              {
                title: "Manage Routes",
                desc: "Bus authorities can add, edit, or remove routes.",
              },
              {
                title: "Cyber Cafe Booking",
                desc: "Register users and help them book tickets quickly.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-yellow-600 border border-gray-700 p-6 rounded-xl shadow-2xl shadow-purple-500 text-white flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300 min-h-64"
              >
                <h3 className="text-3xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300 text-xl">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Total Registered Users
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl">{registeredUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
