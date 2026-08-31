// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-6 space-y-6">
      
      {/* هدر - کاملاً جدا */}
      <Header />

      {/* بدنه اصلی - سایدبار و محتوا در یک container ولی جدا از هم */}
      <div className="flex gap-6 min-h-[60vh]">
        {/* سایدبار - کارت جدا */}
        <aside className="w-64 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-6">
          <Sidebar />
        </aside>

        {/* محتوای اصلی - کارت جدا */}
        <main className="flex-1 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* فوتر - کاملاً جدا */}
      <Footer />
      
    </div>
  );
}