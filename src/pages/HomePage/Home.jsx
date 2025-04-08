import React from 'react' ;
import NavBar from '../../components/NavBar';
import Image from './homeComponents/image';
import Welcome from './homeComponents/welcome';
import BenefitsSection from './homeComponents/benefits';
import Objectives from './homeComponents/objectives';
import PowerTools from './homeComponents/powerTools';

const Home = () => {
  return (
    
    <>
    {/* Image Daalni Hai Idhar */}

    <Image></Image>

    {/* Power Tools to be put here */}

    <PowerTools></PowerTools>

    {/* Welcome Idhar Rakhna Hai */}

    <Welcome></Welcome>

    {/* Benefits and Impact Idhar Rakhna Hai */}

    <BenefitsSection></BenefitsSection>

    {/* Objectives Idhar Rakhna Hai */}

    <Objectives></Objectives>

    </>
  )
}

export default Home ;
