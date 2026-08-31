/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { OrderGuide } from './components/OrderGuide';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c0306] text-[#f7e6e9] relative selection:bg-red-600 selection:text-white">
      
      {/* Ambient background decoration */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-red-800/15 via-rose-950/10 to-transparent blur-[120px]" />
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-red-950/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-rose-950/20 rounded-full blur-[140px]" />
      </div>

      {/* Header */}
      <Header onNavigate={scrollToSection} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onExploreClick={() => scrollToSection('catalog')}
          onHowToOrderClick={() => scrollToSection('how-to-order')}
        />

        {/* How To Order Guide (Prominent & Clear) */}
        <OrderGuide />

        {/* Catalog Section */}
        <ProductCatalog />

        {/* FAQ & Manager Contact Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

    </div>
  );
}
