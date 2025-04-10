

import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      console.log("Form submitted:", res.data);
      setFormData({ name: "", email: "", phone: "", msg: "" });
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="bg-[#fdf6ef] w-full py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row overflow-hidden shadow-xl rounded-lg border border-gray-200">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/men2.png"
            alt="Contact Visual"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-orange-600">Get In Touch</h2>

            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-1">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-md focus:outline-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-md focus:outline-orange-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-semibold mb-1">Phone Number</label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-md focus:outline-orange-500"
              />
            </div>

            <div>
              <label htmlFor="msg" className="block text-lg font-semibold mb-1">Message</label>
              <textarea
                id="msg"
                name="msg"
                value={formData.msg}
                onChange={handleChange}
                placeholder="Type your message..."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-md focus:outline-orange-500 h-28 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-200"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
