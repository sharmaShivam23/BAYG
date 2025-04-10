import React from 'react' ;

const Image = () => {
  return (
    <div className="relative  w-full h-[60vh] md:h-[70vh] lg:h-[90.5vh]">
      <img
        src="/homePageIntroPhoto.png"
        alt="Hero"
        className="w-full h-full object-cover opacity-100"
      />
      <div className="absolute inset-0 bg-opacity-10 bottom-24 flex items-center justify-center">
        <h1 className="text-white sm:absolute bottom-6 right-64 font-serif mt-64 text-2xl md:text-5xl font-bold text-left px-4 animate-slideUpFadeIn">
          Empowering Industries <br/> with Engineering  Precision
        </h1>
      </div>
    </div>
  )
}

export default Image ;
