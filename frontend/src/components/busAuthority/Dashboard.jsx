

// Mock Data
const buses = [
  {
    busNumber: "MH12AB1234",
    route: "Mumbai → Pune",
    totalTickets: 40,
    bookedTickets: 25,
    driver: "Ramesh Kumar",
  },
  {
    busNumber: "MH14CD5678",
    route: "Pune → Nashik",
    totalTickets: 30,
    bookedTickets: 18,
    driver: "Suresh Singh",
  },
  {
    busNumber: "MH20EF9012",
    route: "Mumbai → Goa",
    totalTickets: 50,
    bookedTickets: 35,
    driver: "Anil Sharma",
  },
];

const AuthorityDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0D1224] p-6">
      {/* Header */}
      <h1 className="text-6xl font-bold mb-6 pb-16 text-center text-white">
        Bus Authority Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl  text-center shadow-lg shadow-white hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Total Buses</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">{buses.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl text-center shadow-lg shadow-white hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Total Routes</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {buses.length} {/* Each bus has one route here */}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl text-center shadow-2xl shadow-purple-300 hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Total Tickets Booked</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {buses.reduce((sum, bus) => sum + bus.bookedTickets, 0)}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl  text-center shadow-2xl shadow-white hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold text-gray-700">Tickets Left</h2>
          <p className="mt-2 text-3xl font-bold text-gray-900">
            {buses.reduce((sum, bus) => sum + (bus.totalTickets - bus.bookedTickets), 0)}
          </p>
        </div>
      </div>

      {/* Bus Details Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Bus Details</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Bus Number</th>
                <th className="px-4 py-2 text-left">Route</th>
                <th className="px-4 py-2 text-left">Total Tickets</th>
                <th className="px-4 py-2 text-left">Booked Tickets</th>
                <th className="px-4 py-2 text-left">Tickets Left</th>
                <th className="px-4 py-2 text-left">Driver</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{bus.busNumber}</td>
                  <td className="px-4 py-2">{bus.route}</td>
                  <td className="px-4 py-2">{bus.totalTickets}</td>
                  <td className="px-4 py-2">{bus.bookedTickets}</td>
                  <td className="px-4 py-2">{bus.totalTickets - bus.bookedTickets}</td>
                  <td className="px-4 py-2">{bus.driver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AuthorityDashboard;
