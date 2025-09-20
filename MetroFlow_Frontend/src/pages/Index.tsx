import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import LiveRushIndicator from '../components/LiveRushIndicator';
import SeatAvailability from '../components/SeatAvailability';
import RouteComparison from '../components/RouteComparison';
import GamifiedInput from '../components/GamifiedInput';
import VoiceAssistant from '../components/VoiceAssistant';
import PricingSection from '../components/PricingSection';
import USPSection from '../components/USPSection';
import RoadmapSection from '../components/RoadmapSection';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    // Page enter animation
    document.body.classList.add('animate-page-enter');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <LiveRushIndicator />
        <SeatAvailability />
        <RouteComparison />
        <GamifiedInput />
        <VoiceAssistant />
        <PricingSection />
        <USPSection />
        <RoadmapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
