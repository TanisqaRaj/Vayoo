import React from "react";

// Mock Data
const bookings = [
  {
    customerName: "Ravi Sharma",
    customerNumber: "9876543210",
    customerPic: "https://randomuser.me/api/portraits/men/32.jpg",
    busNumber: "MH12AB1234",
    route: "Mumbai → Pune",
    driverName: "Ramesh Kumar",
    driverNumber: "9876543210",
    timing: "10:00 AM",
  },
  {
    customerName: "Priya Singh",
    customerNumber: "9123456780",
    customerPic: "https://randomuser.me/api/portraits/women/44.jpg",
    busNumber: "MH14CD5678",
    route: "Pune → Nashik",
    driverName: "Suresh Singh",
    driverNumber: "9123456780",
    timing: "2:00 PM",
  },
  {
    customerName: "Anil Verma",
    customerNumber: "9988776655",
    customerPic: "https://randomuser.me/api/portraits/men/56.jpg",
    busNumber: "MH20EF9012",
    route: "Mumbai → Goa",
    driverName: "Anil Sharma",
    driverNumber: "9988776655",
    timing: "6:00 AM",
  },
];

const CyberDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-5xl font-bold mb-6 text-center text-white">
        Cyber Cafe Booking Dashboard
      </h1>

      <div>
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Registererd users details
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Customer Photo */}
            <div className="w-full flex justify-center mt-4">
              <img
                src={booking.customerPic}
                alt={booking.customerName}
                className="w-24 h-24 object-cover rounded-full border-4 border-gray-200"
              />
            </div>

            {/* Customer & Bus Info */}
            <div className="p-6 space-y-4">
              {/* Customer Info */}
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <h2 className="text-lg font-semibold text-gray-700">
                  {booking.customerName}
                </h2>
                <p className="text-gray-500">
                  Contact: {booking.customerNumber}
                </p>
              </div>

              {/* Bus Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-semibold text-gray-700">
                  Bus: {booking.busNumber}
                </h3>
                <p className="text-gray-500">Route: {booking.route}</p>
                <p className="text-gray-500">Timing: {booking.timing}</p>
                <p className="text-gray-500">
                  Driver: {booking.driverName} ({booking.driverNumber})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyberDashboard;
