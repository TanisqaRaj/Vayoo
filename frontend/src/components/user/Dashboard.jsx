import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bus } from "lucide-react";
import runningVideo from "../../assets/runningbusundefined.mp4";

const Dashboard = () => {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/routes", { state: { source, destination } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated Background */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={runningVideo} type="video/mp4" />
      </video> */}

      {/* Form Container */}
      <motion.div
        className="relative z-10 flex items-center justify-center w-full p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.form
          className="bg-white bg-opacity-60 p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          onSubmit={handleSubmit}
        >
          {/* Header */}
          <motion.h2
            className="text-2xl font-semibold text-black text-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Track Your Bus
          </motion.h2>

          {/* Source */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label htmlFor="source" className="block text-sm font-medium mb-1">
              Source
            </label>
            <input
              id="source"
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter source address"
              className="w-full px-4 py-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </motion.div>

          {/* Destination */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label
              htmlFor="destination"
              className="block text-sm font-medium mb-1"
            >
              Destination
            </label>
            <input
              id="destination"
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              className="w-full px-4 py-3 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </motion.div>

          {/* Submit button with bus animation */}
          <motion.button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Bus icon always visible */}
            <Bus size={24} className="text-yellow-400" />
            <span>Track Bus</span>

            {/* Optional: animated roadline */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-yellow-400 w-full"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Dashboard;
