import React from 'react';

const AboutIntroSection = () => {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-orange-300 py-12 px-4 md:px-16 relative overflow-hidden">
      {/* Wave Part Aayega Yahan */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-white rounded-t-[100%]"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content Yahan Aayega */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Us
            <span className="inline-block ml-2 transform -rotate-12">✈️</span>
          </h2>
          <p className="text-black font-small">
            A passionate team dedicated to delivering<br />
            high-quality solutions with integrity and innovation.
          </p>
        </div>

        {/* Right Image Yahan Aayegi */}
        
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/aboutPhotoOne.png
            "
            alt="Team working illustration"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
