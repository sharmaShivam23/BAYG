// import React, { useEffect } from 'react' ;
// import NavBar from '../../components/NavBar';
// import Image from './homeComponents/image';
// import Welcome from './homeComponents/welcome';
// import BenefitsSection from './homeComponents/benefits';
// import Objectives from './homeComponents/objectives';
// import PowerTools from './homeComponents/powerTools';
// // import { useEffect } from 'react';

// const Home = () => {

//   useEffect(() => {
//   window.scrollTo({
//     top : 0,
//   behavior : "smooth"  })
//   },[])
//   return (
    
//     <>
//     {/* Image Daalni Hai Idhar */}

//     <Image></Image>

//     {/* Power Tools to be put here */}

//     <PowerTools></PowerTools>

//     {/* Welcome Idhar Rakhna Hai */}

//     <Welcome></Welcome>

//     {/* Benefits and Impact Idhar Rakhna Hai */}

//     <BenefitsSection></BenefitsSection>

//     {/* Objectives Idhar Rakhna Hai */}

//     <Objectives></Objectives>

//     </>
//   )
// }

// export default Home ;

import React, { useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Image from './homeComponents/image';
import Welcome from './homeComponents/welcome';
import BenefitsSection from './homeComponents/benefits';
import Objectives from './homeComponents/objectives';
import PowerTools from './homeComponents/powerTools';

const Home = () => {
     

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }, []);
  

  return (
    <>
      {/* --- Header Image Section --- */}
      <Image />

      {/* --- Power Tools Section --- */}
      <PowerTools />

      {/* --- Welcome Section --- */}
      <Welcome />

      {/* --- Benefits and Impact Section --- */}
      <BenefitsSection />

      {/* --- Objectives Section --- */}
      <Objectives />
    </>
  );
};

export default Home;
