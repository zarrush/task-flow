// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useState } from 'react';

export default function Layout() {
  const [currentPlan, setCurrentPlan] = useState('daily');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6 space-y-6 flex flex-col items-center">
      
      <Header />

      <div className="w-[70%] flex gap-6 min-h-[60vh]">
        <aside className="w-64 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6 self-start">
          <Sidebar currentPlan={currentPlan} onPlanChange={setCurrentPlan} />
        </aside>

        <main className="flex-1 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8 overflow-y-auto">
          <Outlet context={{ currentPlan, setCurrentPlan }} />
        </main>
      </div>

      <Footer />
      
    </div>
  );
}