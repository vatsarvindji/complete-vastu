"use client"

import Hero from '../components/hero';
import TrustIndicators from '../components/trust-indicators';
import WhyChooseUs from '../components/why-choose-us';
import Services from '../components/services';
import CommonProblems from '../components/common-problems';
import Benefits from '../components/benefits';
import ConsultationProcess from '../components/consultation-process';
import AboutDoctor from '../components/about-doctor';
import Testimonials from '../components/testimonials';
import FAQ from '../components/faq';
import ContactSection from '../components/contact-section';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <WhyChooseUs />
      <Services />
      <CommonProblems />
      <Benefits />
      <ConsultationProcess />
      <AboutDoctor />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}