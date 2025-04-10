import React from 'react';
import TermsHero from './termsSectionOne';
import TermsIntro from './termsSectionTwo';
import TermsAcceptance from './termsSectionThree';
import TermsChanges from './termsSectionFour';
import TermsUserResponsibilities from './termsSectionFive';
import TermsAccountSecurity from './termsSectionSix';
import TermsLiability from './termsSectionSeven';
import TermsGoverningLaw from './termsSectionEight';
import TermsContact from './termsSectionNine';

const TermsWrapper = () => {
  return (
    <main className="w-[90%] md:w-4/5 mx-auto my-10 md:my-16 lg:my-20 rounded-xl shadow-md bg-white dark:bg-gray-900 overflow-hidden">
        <TermsHero></TermsHero>
        <TermsIntro></TermsIntro>
        <TermsAcceptance></TermsAcceptance>
        <TermsChanges></TermsChanges>
        <TermsUserResponsibilities></TermsUserResponsibilities>
        <TermsAccountSecurity></TermsAccountSecurity>
        <TermsLiability></TermsLiability>
        <TermsGoverningLaw></TermsGoverningLaw>
        <TermsContact></TermsContact>
    </main>
  );
};

export default TermsWrapper;
