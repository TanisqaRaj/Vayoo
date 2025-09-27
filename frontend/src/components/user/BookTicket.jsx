import React, { useState } from "react";
import { FaBus, FaTrash } from "react-icons/fa";

const BookTicket = () => {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    source: "",
    destination: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.source || !form.destination || !form.date) {
      alert("Please fill all fields!");
      return;
    }
    setTickets([...tickets, form]);
    setForm({ name: "", email: "", source: "", destination: "", date: "" });
  };

  const removeTicket = (index) => {
    setTickets(tickets.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-[#0D1224] min-h-screen text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        <FaBus className="text-yellow-400" /> Book Your Ticket
      </h1>

      {/* Booking Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-[#1A1F3A] p-6 rounded-2xl shadow-lg space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-[#0D1224] text-white outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-[#0D1224] text-white outline-none"
        />
        <div className="flex gap-4">
          <input
            type="text"
            name="source"
            placeholder="Source"
            value={form.source}
            onChange={handleChange}
            className="w-1/2 p-3 rounded-xl bg-[#0D1224] text-white outline-none"
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={form.destination}
            onChange={handleChange}
            className="w-1/2 p-3 rounded-xl bg-[#0D1224] text-white outline-none"
          />
        </div>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-[#0D1224] text-white outline-none"
        />
        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-yellow-500"
        >
          Book Ticket
        </button>
      </form>

      {/* Booked Tickets */}
      <h2 className="text-2xl font-semibold mt-12 mb-6 text-center">Your Booked Tickets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tickets.length === 0 ? (
          <p className="text-gray-400 col-span-full text-center">
            No tickets booked yet.
          </p>
        ) : (
          tickets.map((ticket, index) => (
            <div
              key={index}
              className="bg-[#1A1F3A] p-6 rounded-2xl shadow-lg relative"
            >
              <button
                onClick={() => removeTicket(index)}
                className="absolute top-3 right-3 text-red-400 hover:text-red-600"
              >
                <FaTrash />
              </button>
              <h3 className="text-xl font-bold mb-2">{ticket.name}</h3>
              <p className="text-gray-300 text-sm mb-1">{ticket.email}</p>
              <p className="mb-1">
                <span className="text-yellow-400">From:</span> {ticket.source}
              </p>
              <p className="mb-1">
                <span className="text-yellow-400">To:</span> {ticket.destination}
              </p>
              <p className="text-gray-300 text-sm">Date: {ticket.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookTicket;
