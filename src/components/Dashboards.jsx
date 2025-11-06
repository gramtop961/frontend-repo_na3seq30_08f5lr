import React, { useState } from 'react';
import { User, LogIn, Mail, Lock, ShieldCheck, BarChart3, Calendar } from 'lucide-react';

const AuthCard = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    if (email && password) onLogin({ email, role: email.includes('admin') ? 'admin' : 'user' });
  };

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4"><LogIn size={18}/> <span className="font-semibold">Login</span></div>
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 flex items-center gap-2"><Mail size={16}/> Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 flex items-center gap-2"><Lock size={16}/> Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2.5 rounded-md hover:opacity-90">Sign in</button>
      </form>
      <p className="text-xs text-neutral-500 mt-3">Tip: use an email containing "admin" to preview the admin dashboard.</p>
    </div>
  );
};

const UserDashboard = ({ user }) => {
  return (
    <div id="dashboard" className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4"><User size={18}/> <span className="font-semibold">Your Dashboard</span></div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-neutral-200">
          <div className="text-sm text-neutral-500">Upcoming</div>
          <div className="mt-1 font-medium flex items-center gap-2"><Calendar size={16}/> No bookings yet</div>
        </div>
        <div className="p-4 rounded-lg border border-neutral-200">
          <div className="text-sm text-neutral-500">Membership</div>
          <div className="mt-1 font-medium">Standard</div>
        </div>
      </div>
      <a href="#booking" className="inline-block mt-4 px-4 py-2 rounded-md bg-black text-white">Book your first cut</a>
    </div>
  );
};

const AdminDashboard = () => {
  return (
    <div id="admin" className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4"><ShieldCheck size={18}/> <span className="font-semibold">Admin Dashboard</span></div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border border-neutral-200">
          <div className="text-sm text-neutral-500">Today Bookings</div>
          <div className="mt-1 font-bold text-2xl">12</div>
        </div>
        <div className="p-4 rounded-lg border border-neutral-200">
          <div className="text-sm text-neutral-500">Revenue</div>
          <div className="mt-1 font-bold text-2xl">$540</div>
        </div>
        <div className="p-4 rounded-lg border border-neutral-200">
          <div className="text-sm text-neutral-500">New Clients</div>
          <div className="mt-1 font-bold text-2xl">4</div>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-lg border border-neutral-200 flex items-center gap-3">
        <BarChart3/> <span className="text-sm">Analytics coming soon</span>
      </div>
    </div>
  );
};

const Dashboards = () => {
  const [user, setUser] = useState(null);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        <AuthCard onLogin={setUser} />
        {user ? (
          user.role === 'admin' ? <AdminDashboard/> : <UserDashboard user={user}/>
        ) : (
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
            <div className="text-neutral-700">Sign in to view your dashboard.</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboards;
