import { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import PainPoints from './components/PainPoints';
import ChooseSolution from './components/ChooseSolution';
import CardMachineTypes from './components/CardMachineTypes';
import IntegratedEPOS from './components/IntegratedEPOS';
import KeyBenefits from './components/KeyBenefits';
import IndustryCards from './components/IndustryCards';
import SwitchProvider from './components/SwitchProvider';
import ProviderComparison from './components/ProviderComparison';
import SwitcherMicroFunnel from './components/SwitcherMicroFunnel';
import CaseStudies from './components/CaseStudies';
import CommercialOffer from './components/CommercialOffer';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import EnquiryModal from './components/EnquiryModal';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

export default function App() {
  const [modalPrefill, setModalPrefill] = useState(null);
  const [page, setPage] = useState(
    () => (window.location.pathname === '/thank-you' ? 'thank-you' : 'home')
  );

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setPage(window.location.pathname === '/thank-you' ? 'thank-you' : 'home');
      window.scrollTo({ top: 0 });
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleContextSelect = useCallback((context) => {
    setModalPrefill(context);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalPrefill(null);
  }, []);

  const handleFormSubmit = useCallback(() => {
    setModalPrefill(null);
    window.history.pushState({}, '', '/thank-you');
    setPage('thank-you');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = useCallback(() => {
    window.history.pushState({}, '', '/');
    setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (page === 'thank-you') {
    return (
      <>
        <Header />
        <ThankYou onBack={handleBackToHome} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero
          onOpenModal={handleContextSelect}
          onContextSelect={handleContextSelect}
          onFormSubmit={handleFormSubmit}
        />

        <TrustStrip />

        <PainPoints onContextSelect={handleContextSelect} />

        <ChooseSolution onContextSelect={handleContextSelect} />

        <CardMachineTypes onContextSelect={handleContextSelect} />

        <IntegratedEPOS onContextSelect={handleContextSelect} />

        <KeyBenefits onContextSelect={handleContextSelect} />

        <IndustryCards onContextSelect={handleContextSelect} />

        <SwitchProvider onContextSelect={handleContextSelect} />

        <ProviderComparison onContextSelect={handleContextSelect} />

        <SwitcherMicroFunnel onFormSubmit={handleFormSubmit} />

        <CaseStudies onContextSelect={handleContextSelect} />

        <CommercialOffer onContextSelect={handleContextSelect} />

        <HowItWorks onContextSelect={handleContextSelect} />

        <WhyChooseUs onContextSelect={handleContextSelect} />

        <FAQ />

        <FinalCTA onContextSelect={handleContextSelect} />
      </main>

      <Footer />
      <EnquiryModal prefill={modalPrefill} onClose={handleCloseModal} onFormSubmit={handleFormSubmit} />
    </>
  );
}
