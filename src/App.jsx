import { useState, useCallback } from 'react';
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
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  const [modalPrefill, setModalPrefill] = useState(null);

  const handleContextSelect = useCallback((context) => {
    setModalPrefill(context);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalPrefill(null);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero
          onOpenModal={handleContextSelect}
          onContextSelect={handleContextSelect}
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

        <SwitcherMicroFunnel />

        <CaseStudies onContextSelect={handleContextSelect} />

        <CommercialOffer onContextSelect={handleContextSelect} />

        <HowItWorks onContextSelect={handleContextSelect} />

        <WhyChooseUs onContextSelect={handleContextSelect} />

        <FAQ />

        <FinalCTA onContextSelect={handleContextSelect} />
      </main>

      <EnquiryModal prefill={modalPrefill} onClose={handleCloseModal} />
      <WhatsAppFloat />
    </>
  );
}
