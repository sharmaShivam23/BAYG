import React from "react";

const ImageComp = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh]">
      <img
        src="/contactPagePhotoOne.png"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-opacity-40">
        <div className="absolute bottom-6 left-6 sm:left-12 lg:left-20">
          <h1 className="text-white font-poppins text-2xl sm:text-4xl md:text-5xl font-bold text-left animate-slideUpFadeIn">
            Get In Touch <br /> With BAYG
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageComp;
