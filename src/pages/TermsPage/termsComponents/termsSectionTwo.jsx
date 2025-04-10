import React from 'react';

const TermsIntro = () => {
  return (
    <section className="bg-white py-16 pb-0">
      <div className="max-w-4xl w-[90%] mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">1. Introduction</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Welcome to our website. By accessing or using our service, you agree to be bound by these terms. These terms apply to all visitors, users, and others who access the service.
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
            fill="#fff7ed"
          />
        </svg>
      </div>
    </section>
  );
};

export default TermsIntro;
