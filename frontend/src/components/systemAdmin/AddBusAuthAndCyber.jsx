import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
// import backgroundImg from "../../assets/busAuth.png"; // Add your background image here

const AddBusAuthAndCyber = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);
  const [isBusAuthority, setIsBusAuthority] = useState(false);
  const [busNumbers, setBusNumbers] = useState("");
  const [cafeAddress, setCafeAddress] = useState("");

  const handleAddEntry = () => {
    if (!name || !contact || !email || !aadhar || !address || !photo) {
      alert("Please fill all required fields and upload a photo");
      return;
    }

    const newEntry = {
      name,
      contact,
      email,
      aadhar,
      address,
      photo: URL.createObjectURL(photo),
      isBusAuthority,
      busNumbers: isBusAuthority
        ? busNumbers.split(",").map((b) => b.trim())
        : [],
      cafeAddress: !isBusAuthority ? cafeAddress : "",
    };

    setEntries([...entries, newEntry]);

    // Reset form
    setName("");
    setContact("");
    setEmail("");
    setAadhar("");
    setAddress("");
    setPhoto(null);
    setIsBusAuthority(false);
    setBusNumbers("");
    setCafeAddress("");
  };

  const handleRemove = (index) => {
    const updated = entries.filter((_, i) => i !== index);
    setEntries(updated);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center py-6 px-4 md:px-10 bg-gray-900 bg-cover bg-center relative"
      //   style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-10 text-yellow-400 text-center z-10 drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Add Bus Authority / Cyber Cafe
      </motion.h1>

      {/* Form */}
      <motion.div
        className="bg-white bg-opacity-20 p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-lg mb-8 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="text"
            placeholder="Aadhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isBusAuthority}
                onChange={() => setIsBusAuthority(!isBusAuthority)}
                className="w-4 h-4 accent-yellow-500"
              />
              Is Bus Authority?
            </label>
          </div>

          {isBusAuthority ? (
            <input
              type="text"
              placeholder="Bus Numbers (comma separated)"
              value={busNumbers}
              onChange={(e) => setBusNumbers(e.target.value)}
              className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          ) : (
            <input
              type="text"
              placeholder="Cafe Address"
              value={cafeAddress}
              onChange={(e) => setCafeAddress(e.target.value)}
              className="px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
            />
          )}

          <motion.button
            onClick={handleAddEntry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-white px-4 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition"
          >
            Add Entry
          </motion.button>
        </div>
      </motion.div>

      {/* Entries List */}
      <motion.div
        className="w-full max-w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-extrabold mb-4 text-yellow-500 drop-shadow-md">
          Added Authorities / Cafes
        </h2>

        {entries.length === 0 ? (
          <p className="text-white text-lg drop-shadow-md">No entries yet.</p>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {entries.map((entry, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
                }}
                className="flex flex-col items-center p-4 rounded-2xl shadow-md bg-white bg-opacity-90 hover:bg-opacity-100 transition cursor-pointer h-80"
              >
                <img
                  src={entry.photo}
                  alt="Photo"
                  className="w-24 h-24 rounded-full object-cover border-2 border-yellow-500 mb-4"
                />
                <div className="text-center flex-1">
                  <p className="font-bold text-gray-800">{entry.name}</p>
                  <p className="text-gray-600 text-sm">{entry.email}</p>
                  <p className="text-gray-600 text-sm mt-1">{entry.contact}</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Aadhar: {entry.aadhar}
                  </p>
                  <p className="text-gray-600 text-sm mt-1">{entry.address}</p>
                  {entry.isBusAuthority ? (
                    <p className="text-gray-600 text-sm mt-1">
                      Buses: {entry.busNumbers.join(", ")}
                    </p>
                  ) : (
                    <p className="text-gray-600 text-sm mt-1">
                      Cafe Address: {entry.cafeAddress}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-600 hover:text-red-800 transition mt-4"
                >
                  <Trash2 size={20} />
                </button>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default AddBusAuthAndCyber;
