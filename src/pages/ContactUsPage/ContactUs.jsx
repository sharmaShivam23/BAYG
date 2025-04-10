


import React from 'react';
import NavBar from '../../components/NavBar';
import ContactCards from './ContactComponents/sectionTwo';
import ConnectWithBAYG from './ContactComponents/sectionThree';
import ContactForm from './ContactComponents/sectionFour';
import ImageComp from './ContactComponents/sectionOne';

const ContactUs = () => {
  return (
    <>
      <ImageComp />
      <ContactCards />
      <ConnectWithBAYG />
      <ContactForm />
    </>
  );
};

export default ContactUs;
