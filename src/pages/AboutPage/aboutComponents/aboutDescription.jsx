import React from 'react';

const AboutMiddleSection = () => {
  return (
    <section className="bg-orange-50 py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">

        {/* Left Wala Part */}

        <div className="md:w-1/2 flex justify-center">
          <img
            src="aboutPhotoTwo.png"
            alt="Business man at desk"
            className="w-full max-w-md rounded-md shadow-md"
          />
        </div>

        {/* Right Wala Part */}

        <div className="md:w-1/2 text-center md:text-left text-gray-800">
          <p className="text-base md:text-lg leading-relaxed">
            <strong>BAYG Engineering Solutions</strong> is a leading trading firm specializing in various industrial products. We are committed to delivering high-quality solutions catering to multiple industries, ensuring reliability, efficiency, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMiddleSection;
