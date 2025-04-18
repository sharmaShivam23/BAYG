import React, { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone: "",
    message: "",
    recaptchaValue: "",
  });

  const reset = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleRecaptchaChange = (captchaValue) => {
    // console.log("Recaptcha:", captchaValue);
    setFormData({ ...formData, recaptchaValue: captchaValue });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Valid()) {
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://baygbackend.onrender.com/bayg/contact",
        formData
      );
      // console.log("Form submitted:", res);
      toast.success(res.data.message);
      // Reset form
      setFormData({
        name: "",
        email: "",
        Phone: "",
        message: "",
        recaptchaValue: "",
      });
      reset.current.reset();
    } catch (err) {
      // console.error(err);
      if(err.response.data){
      toast.error(err.response.data.message);
      }else {
        toast.error("Something went wrong. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  function Valid() {
    if (formData.name.length < 3) {
      toast.error("Name must contain at least 2 characters");
      return false;
    } else if (formData.Phone.length != 10) {
      toast.error("Invalid phone number");
      return false;
    } else if (formData.message.length < 10) {
      toast.error("message is too short");
      return false;
    }
    return true;
  }

  return (
    <div className="bg-[#fdf6ef] w-full py-12 px-4">
      <Toaster />
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
              <label
                htmlFor="name"
                className="block text-lg font-semibold mb-1"
              >
                Name
              </label>
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
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-1"
              >
                Email
              </label>
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
              <label
                htmlFor="Phone"
                className="block text-lg font-semibold mb-1"
              >
                Phone Number
              </label>
              <input
                id="Phone"
                name="Phone"
                type="number"
                value={formData.Phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-md focus:outline-orange-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message..."
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-md focus:outline-orange-500 h-28 resize-none"
              />
            </div>

            {/* <div className="flex gap-2 sm:w-1/2  justify-center items-center cursor-pointer w-full"> */}
            <div className="flex justify-center items-center ">
              <ReCAPTCHA
                ref={reset}
                sitekey="6Le3-QArAAAAADn9ym4vDs6qMQN3DpD0yZe183m-"
                onChange={handleRecaptchaChange}
                className="cursor-pointer"
              />
            </div>
            {/* </div> */}


            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 cursor-pointer text-white font-semibold h-[40px] rounded-md hover:bg-orange-600 transition duration-200 flex items-center justify-center"
            >
              {loading ? (
                <span className="flex space-x-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
