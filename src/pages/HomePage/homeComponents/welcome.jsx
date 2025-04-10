import React from "react";

const Welcome=()=>{
    return(
        <>
<div className="w-[80%] mx-auto px-4 py-6">
  <div className="flex flex-col md:flex-row gap-6">
    <div className="flex-1  p-4 rounded">
      {/* Left wala part yahan */}
      <img
        src="/homePageWelcomePhoto.png"
        alt="Hero"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1  p-4 rounded">
      {/* Right wala part yahan*/}
      <div className="w-[80%] mx-auto sm:px-4 py-10 text-center md:text-left">
  <p className="text-gray-500 uppercase text-xs sm:text-lg font-semibold mb-2">Welcome to our site!</p>
  <h1 className="text-2xl md:text-4xl font-bold mb-4">
    We are the best company for your visit
  </h1>
  <p className="text-gray-700 text-xs sm:text-lg leading-relaxed mb-8">
    BAYG Engineering Solutions takes pride in being a leading trading firm that offers a diverse range of high-quality industrial products. 
    With a strong commitment to reliability, efficiency, and customer satisfaction, we cater to multiple industries, ensuring cutting-edge solutions 
    for your business needs.
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
    <div>
      <p className="text-orange-500 text-2xl font-bold">20+</p>
      <p className="text-sm text-gray-600">Years<br />Experience</p>
    </div>
    <div>
      <p className="text-orange-500 text-2xl font-bold">100+</p>
      <p className="text-sm text-gray-600">Happy<br />Customer</p>
    </div>
    <div>
      <p className="text-orange-500 text-2xl font-bold">5+</p>
      <p className="text-sm text-gray-600">Choice<br />of Services</p>
    </div>
    <div>
      <p className="text-orange-500 text-2xl font-bold">10+</p>
      <p className="text-sm text-gray-600">Professional<br />Guides</p>
    </div>
  </div>
</div>

    </div>
  </div>
</div>

        </>
    )
}

export default Welcome ;