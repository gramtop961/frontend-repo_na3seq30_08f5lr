import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Dashboards from './components/Dashboards';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
      <Booking />
      <Dashboards />
      <footer className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Haji Manap Barbershop. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#booking" className="hover:text-black">Book</a>
            <a href="#dashboard" className="hover:text-black">Dashboard</a>
            <a href="#admin" className="hover:text-black">Admin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
