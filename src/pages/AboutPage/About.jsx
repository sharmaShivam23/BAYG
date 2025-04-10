import React from 'react' ;
import NavBar from '../../components/NavBar';
import AboutIntroSection from './aboutComponents/aboutIntro';
import AboutMiddleSection from './aboutComponents/aboutDescription';
import AboutLastSection from './aboutComponents/aboutStyles';

const About = () => {
  return (
    <>
    <AboutIntroSection></AboutIntroSection>
    <AboutMiddleSection></AboutMiddleSection>
    <AboutLastSection></AboutLastSection>
    </>
  )
}

export default About ;
