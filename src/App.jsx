import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoIHelp from './components/WhoIHelp';
import Portfolio from './components/Portfolio';
import ServicesPricing from './components/ServicesPricing';
import Process from './components/Process';
import TechStack from './components/TechStack';
import AvailabilityBanner from './components/AvailabilityBanner';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleOpenBooking = () => setBookingOpen(true);
  const handleCloseBooking = () => setBookingOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Sticky Header Navigation */}
      <Navbar onBookCall={handleOpenBooking} />

      {/* Main Content Sections in Prompt Order */}
      <main>
        {/* 1. Hero */}
        <Hero onBookCall={handleOpenBooking} />

        {/* 2. Who I Help */}
        <WhoIHelp onBookCall={handleOpenBooking} />

        {/* 3. Portfolio / Case Studies */}
        <Portfolio />

        {/* 4. Services & Pricing */}
        <ServicesPricing onBookCall={handleOpenBooking} />

        {/* 5. Process */}
        <Process />

        {/* 6. Tech Stack & Why Me */}
        <TechStack />

        {/* 7. Availability Banner */}
        <AvailabilityBanner onBookCall={handleOpenBooking} />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Contact */}
        <Contact onBookCall={handleOpenBooking} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={handleCloseBooking} />
    </div>
  );
}
