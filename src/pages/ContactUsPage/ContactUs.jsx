import React from 'react' ;
import NavBar from '../../components/NavBar';
import ContactCards from './ContactComponents/sectionTwo';
import ConnectWithBAYG from './ContactComponents/sectionThree';
import ContactForm from './ContactComponents/sectionFour';

const ContactUs = () => {
  return (
    <>
    <ImageComp></ImageComp>
    <ContactCards></ContactCards>
    <ConnectWithBAYG></ConnectWithBAYG>
    <ContactForm></ContactForm>
    </>
  )
}

export default ContactUs ;
