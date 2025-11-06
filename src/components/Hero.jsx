import React from 'react';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Premium Cuts. Effortless Booking.
          </h1>
          <p className="mt-4 text-neutral-600 text-lg">
            Haji Manap Barbershop delivers classic and modern styles with meticulous attention to detail. Book your appointment in seconds.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#booking" className="bg-black text-white px-5 py-3 rounded-md shadow hover:opacity-90">Book an Appointment</a>
            <a href="#dashboard" className="px-5 py-3 rounded-md border border-neutral-300 hover:border-black">Go to Dashboard</a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-neutral-600 text-sm">
            <Star className="text-yellow-500" size={16} />
            <span>Rated 4.9/5 by 1,200+ happy clients</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIzNTg2NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
