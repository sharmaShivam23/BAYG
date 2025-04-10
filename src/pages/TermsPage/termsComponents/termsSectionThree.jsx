import React from 'react';

const TermsAcceptance = () => {
  return (
    <section className="bg-orange-100 py-16 pb-0">
      <div className="max-w-4xl w-[90%] mx-auto text-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">2. Acceptance of Terms</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          By using our service, you confirm your acceptance of these terms. If you do not agree, please discontinue using the site immediately.
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

export default TermsAcceptance;
