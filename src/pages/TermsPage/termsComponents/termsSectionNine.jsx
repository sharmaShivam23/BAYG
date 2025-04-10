import React from 'react';

const TermsContact = () => {
  return (
    <section className="bg-orange-100 pb-0">
      <div className="max-w-4xl w-[90%] mx-auto text-center pt-16 pb-10 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">7. Contact Us</h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          If you have any questions about these terms, please contact us at{' '}
          <span className="text-blue-500 underline">
            <a href="mailto:bayg.sales@gmail.com">bayg.sales@gmail.com</a>
          </span>.
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

export default TermsContact;
