// src/components/Layout.jsx
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* سایدبار */}
      <aside className="w-64 bg-gray-800 text-white p-5 flex flex-col">
        <h2 className="text-xl font-bold mb-10">برند</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/tasks" className="hover:text-gray-300">تسک‌ها</Link>
          <Link to="/dashboard" className="hover:text-gray-300">داشبورد</Link>
          <Link to="/profile" className="hover:text-gray-300">پروفایل</Link>
        </nav>
        {/* فوتر رو می‌تونیم پایین سایدبار یا پایین کل صفحه بذاریم */}
        <footer className="mt-auto text-sm text-gray-400">فوتر</footer>
      </aside>

      {/* محتوای اصلی */}
      <main className="flex-1 overflow-y-auto">
        {/* هدر */}
        <header className="bg-white p-4 shadow-sm">
          <h1 className="text-lg font-semibold">هدر</h1>
        </header>

        {/* اینجا محتوای صفحات (Tasks, Dashboard, Profile) لود میشه */}
        <Outlet />
      </main>
    </div>
  );
}