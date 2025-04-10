import React from 'react';

const TermsAccountSecurity = () => {
  return (
    <section className="bg-white pb-0 pt-16">
      <div className="max-w-4xl w-[90%] mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">5. Account Security</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          You are responsible for maintaining the confidentiality of your account and password and for restricting access to your device.
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
            fill="#FFF7ED"
          />
        </svg>
      </div>
    </section>
  );
};

export default TermsAccountSecurity;
