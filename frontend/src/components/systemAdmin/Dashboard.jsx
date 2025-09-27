import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  // Dummy data
  const [totalUsers, setTotalUsers] = useState(120);
  const [totalBuses, setTotalBuses] = useState(25);
  const [totalCyber, setTotalCyber] = useState(15);

  const [todaysBuses, setTodaysBuses] = useState([
    { number: "BUS101", route: "City A → City B", departure: "09:00 AM", arrival: "12:00 PM" },
    { number: "BUS102", route: "City C → City D", departure: "10:00 AM", arrival: "01:00 PM" },
    { number: "BUS103", route: "City E → City F", departure: "11:30 AM", arrival: "02:30 PM" },
  ]);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500 font-semibold">Total Users</p>
          <p className="text-3xl font-bold text-gray-800">{totalUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500 font-semibold">Total Buses</p>
          <p className="text-3xl font-bold text-gray-800">{totalBuses}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500 font-semibold">Total Cyber Users</p>
          <p className="text-3xl font-bold text-gray-800">{totalCyber}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500 font-semibold">Today's Buses</p>
          <p className="text-3xl font-bold text-gray-800">{todaysBuses.length}</p>
        </div>
      </div>

      {/* Today's Buses Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Today's Buses</h2>
        {todaysBuses.length === 0 ? (
          <p className="text-gray-500">No buses scheduled for today.</p>
        ) : (
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border">Bus Number</th>
                <th className="py-2 px-4 border">Route</th>
                <th className="py-2 px-4 border">Departure</th>
                <th className="py-2 px-4 border">Arrival</th>
              </tr>
            </thead>
            <tbody>
              {todaysBuses.map((bus, index) => (
                <tr key={index} className="text-center border-b">
                  <td className="py-2 px-4 border">{bus.number}</td>
                  <td className="py-2 px-4 border">{bus.route}</td>
                  <td className="py-2 px-4 border">{bus.departure}</td>
                  <td className="py-2 px-4 border">{bus.arrival}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
