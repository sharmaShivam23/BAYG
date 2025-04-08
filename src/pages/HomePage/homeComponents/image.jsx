import React from 'react' ;


const Image = () => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
      <img
        src="/homePageIntroPhoto.png"
        alt="Hero"
        className="w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-opacity-10 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4 animate-slideUpFadeIn">
          Empowering Industries with Engineering Precision
        </h1>
      </div>
    </div>
  )
}

export default Image ;
