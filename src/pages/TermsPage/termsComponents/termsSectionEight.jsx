import React from 'react';

const TermsGoverningLaw = () => {
  return (
    <section className="bg-white pb-0">
      <div className="max-w-4xl w-[90%] mx-auto text-center pt-16 pb-10 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">6. Governing Law</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          These terms shall be governed and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law provisions.
        </p>
      </div>

      {/* Thoda sa design add karna h, bhtt simple lag rha h warna ye page */}
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

export default TermsGoverningLaw;
