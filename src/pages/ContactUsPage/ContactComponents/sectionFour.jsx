import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

        // @Shivam , jab API bana le tab yahan change kar lena use, aur ye bhi check kar lena ki ye dhang se kaam kar rha hai ya nahi

      const res = await axios.post("http://localhost:5000/api/contact", formData);
      console.log("Form submitted:", res.data);
      alert("Form submitted successfully! We will contact you soon.");
      setFormData({ name: "", email: "", phone: "" });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-[#fdf6ef] w-full py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-md border border-gray-300">
        {/* Left Wali Image Yahan Lagani Hai*/}
        <div className="w-full md:w-1/2">
          <img
            src="/homePageIntroPhoto.png"
            alt="Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Start karna hai yahan se */}
        <div className="w-full md:w-1/2 bg-[#fdf6ef] p-6 flex flex-col justify-between">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-lg font-bold">Please Fill Your Details</h2>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium font-mono">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Value"
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-orange-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium font-mono">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Value"
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-orange-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium font-mono">Phone Number</label>
              <input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Value"
                required
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-orange-500"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 mt-4 w-full"
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
