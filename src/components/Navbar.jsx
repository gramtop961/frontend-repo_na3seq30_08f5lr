import React from 'react';
import { Scissors, Calendar, User, Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-black text-white">
            <Scissors size={18} />
          </span>
          <span className="font-semibold tracking-tight text-lg">Haji Manap Barbershop</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#booking" className="text-neutral-600 hover:text-black flex items-center gap-2"><Calendar size={16}/> Book</a>
          <a href="#dashboard" className="text-neutral-600 hover:text-black flex items-center gap-2"><User size={16}/> Account</a>
          <a href="#admin" className="text-neutral-600 hover:text-black flex items-center gap-2"><Shield size={16}/> Admin</a>
        </nav>

        <a href="#booking" className="ml-4 inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm shadow hover:opacity-90">
          <Calendar size={16}/> Book Now
        </a>
      </div>
    </header>
  );
};

export default Navbar;
