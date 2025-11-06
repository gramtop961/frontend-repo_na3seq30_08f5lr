import React, { useState } from 'react';
import { Calendar, Clock, Scissors, CheckCircle2 } from 'lucide-react';

const services = [
  { id: 'classic', name: 'Classic Cut', duration: '30 min', price: 25 },
  { id: 'fade', name: 'Skin Fade', duration: '45 min', price: 35 },
  { id: 'beard', name: 'Beard Trim', duration: '20 min', price: 15 },
  { id: 'combo', name: 'Cut + Beard Combo', duration: '60 min', price: 45 },
];

const times = [
  '10:00', '10:30', '11:00', '11:30', '12:00',
  '13:00', '13:30', '14:00', '14:30', '15:00',
  '16:00', '16:30', '17:00', '17:30'
];

const Booking = () => {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!date || !time) return;
    setConfirmed(true);
  };

  return (
    <section id="booking" className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Book Your Visit</h2>
          <p className="text-neutral-600 mt-2">Choose a service, pick a time, and you’re set.</p>

          <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Service</label>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`flex items-center justify-between w-full border rounded-lg p-4 text-left hover:border-black ${selectedService === s.id ? 'border-black bg-white' : 'border-neutral-300 bg-white'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-black text-white"><Scissors size={16}/></span>
                      <div>
                        <div className="font-medium">{s.name}</div>
                        <div className="text-xs text-neutral-500 flex items-center gap-1"><Clock size={12}/> {s.duration}</div>
                      </div>
                    </div>
                    <div className="font-semibold">${s.price}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Calendar size={16}/> Date</label>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Clock size={16}/> Time</label>
                <div className="grid grid-cols-3 gap-2">
                  {times.map((t)=> (
                    <button type="button" key={t} onClick={()=>setTime(t)} className={`px-3 py-2 rounded-md border text-sm ${time===t ? 'border-black bg-white' : 'border-neutral-300 bg-white hover:border-black'}`}>{t}</button>
                  ))}
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-black text-white py-3 rounded-md shadow hover:opacity-90">Confirm Booking</button>

            {confirmed && (
              <div className="flex items-start gap-3 p-4 rounded-md bg-green-50 text-green-800 border border-green-200">
                <CheckCircle2 className="mt-0.5"/>
                <div>
                  <div className="font-medium">Booking confirmed!</div>
                  <div className="text-sm">{new Date(date).toLocaleDateString()} at {time} for {services.find(s=>s.id===selectedService)?.name}.</div>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-6 shadow-sm">
          <h3 className="font-semibold">Why choose us</h3>
          <ul className="mt-4 space-y-3 text-neutral-600">
            <li>• Master barbers with 10+ years experience</li>
            <li>• Online booking with instant confirmation</li>
            <li>• Premium products and clean environment</li>
            <li>• Loyalty rewards for returning clients</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Booking;
