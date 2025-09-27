import React, { useState } from "react";
import { Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import backgroundImg from "../../assets/busAuth.png";
import axios from "axios";

const RegisterUser = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [photo, setPhoto] = useState(null);
  const [phone, setPhone] = useState("");

  // Handle form submission
  const handleRegister = async () => {
    if (!name || !email || !age || !aadhar || !photo) {
      alert("Please fill all fields and upload a photo");
      return;
    }

    const newUser = {
      name,
      email,
      age,
      aadhar,
      photo: URL.createObjectURL(photo),
    };

    setUsers([...users, newUser]);

     // Send SMS via backend
    try {
      const message = `Hello ${name}, you have been registered successfully! if you have any query then contact on 1100110011`;
      await axios.post("http://localhost:5000/api/sms/send", {
        phone,
        message,
      });
      console.log("SMS sent successfully");
    } catch (err) {
      console.error("Failed to send SMS:", err);
    }

    setName("");
    setEmail("");
    setAge("");
    setAadhar("");
    setPhoto(null);
  };

  // Remove user
  const handleRemove = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center p-6 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-40 z-0"></div> */}

      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-10 text-yellow-500 text-center z-10 drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Register User
      </motion.h1>

      {/* Form */}
      <motion.div
        className="bg-white bg-opacity-40 p-8 rounded-2xl shadow-2xl w-full max-w-md mb-8 z-10"
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
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="text"
            placeholder="Aadhar Number"
            value={aadhar}
            onChange={(e) => setAadhar(e.target.value)}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
          <motion.button
            onClick={handleRegister}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition flex items-center justify-center"
          >
            Register User
          </motion.button>
        </div>
      </motion.div>

      {/* Registered Users */}
      <motion.div
        className="w-full max-w-6xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-extrabold mb-4 text-yellow-400 drop-shadow-md">
          Registered Users
        </h2>
        {users.length === 0 ? (
          <p className="text-white text-lg drop-shadow-md">
            No users registered yet.
          </p>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map((user, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.3)",
                }}
                className="flex flex-col justify-start items-center p-4 rounded-2xl shadow-md bg-white bg-opacity-90 hover:bg-opacity-100 transition cursor-pointer h-72"
              >
                {/* Image on top */}
                <img
                  src={user.photo}
                  alt="User"
                  className="w-24 h-24 rounded-full object-cover border-1 border-yellow-500 mb-4 shadow-md"
                />
                <div className="text-center flex-1">
                  <p className="font-bold text-gray-800">{user.name}</p>
                  <p className="text-gray-600 text-sm">{user.email}</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Age: {user.age} | Aadhar: {user.aadhar}
                  </p>
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

export default RegisterUser;
