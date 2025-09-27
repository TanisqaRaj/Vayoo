import React, { useState } from "react";
import { Trash2, Edit, PlusCircle } from "lucide-react";
import RoutesData from "../user/RoutesData";
import { motion } from "framer-motion";
// import backgroundImg from "../../assets/busAuth.png"; // Add your background image here

const EditRoutes = () => {
  const [routes, setRoutes] = useState(RoutesData);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [stations, setStations] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  // Add or Update route
  const handleAddOrUpdate = () => {
    const stationArray = stations.split(",").map((s) => s.trim());
    if (editingIndex !== null) {
      const updatedRoutes = [...routes];
      updatedRoutes[editingIndex] = {
        source,
        destination,
        stations: stationArray,
      };
      setRoutes(updatedRoutes);
      setEditingIndex(null);
    } else {
      setRoutes([...routes, { source, destination, stations: stationArray }]);
    }
    setSource("");
    setDestination("");
    setStations("");
  };

  // Edit route
  const handleEdit = (index) => {
    const route = routes[index];
    setSource(route.source);
    setDestination(route.destination);
    setStations(route.stations.join(", "));
    setEditingIndex(index);
  };

  // Delete route
  const handleDelete = (index) => {
    const filteredRoutes = routes.filter((_, i) => i !== index);
    setRoutes(filteredRoutes);
  };

  return (
    <div
      className="min-h-screen p-8 bg-cover bg-center bg-no-repeat flex flex-col items-center"
      style={{ backgroundImage:  "url(/busAuth.png)" }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-10 text-yellow-500 text-center drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Bus Route Management
      </motion.h1>

      {/* Form to add or edit route */}
      <motion.div
        className="bg-white bg-opacity-40 p-8 rounded-2xl shadow-2xl w-full max-w-lg mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-extrabold mb-6 text-yellow-500 drop-shadow-lg">
          {editingIndex !== null ? "Edit Route" : "Add New Route"}
        </h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="text"
            placeholder="Stations (comma separated)"
            value={stations}
            onChange={(e) => setStations(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <motion.button
            onClick={handleAddOrUpdate}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition flex items-center justify-center gap-2"
          >
            {editingIndex !== null ? "Update Route" : "Add Route"}
            <PlusCircle size={20} />
          </motion.button>
        </div>
      </motion.div>

      {/* List of routes */}
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-yellow-500 drop-shadow-md">
          Existing Routes
        </h2>
        {routes.length === 0 ? (
          <p className="text-white text-lg drop-shadow-md">
            No routes available.
          </p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map((route, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
                }}
                className="flex justify-between items-center p-4 rounded-2xl shadow-md bg-white hover:bg-gray-50 transition cursor-pointer"
              >
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {route.source} ➝ {route.destination}
                  </p>
                  <p className="text-gray-600 mt-1 text-sm">
                    Stations: {route.stations.join(" → ")}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-yellow-600 hover:text-yellow-800 transition"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default EditRoutes;
