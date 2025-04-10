import React from 'react';

const TermsHero = () => {
  return (
    <section className="bg-gradient-to-r from-orange-100 to-orange-300 pb-0 pt-24">
      <div className="max-w-5xl w-[90%] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Terms of Service</h1>
        <p className="text-lg md:text-xl text-gray-700">
          Please read our terms carefully before using our services.
        </p>
      </div>

      <div className="overflow-hidden">
        <svg
          className="w-full h-16"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C360,80 1080,0 1440,40 L1440,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default TermsHero;
