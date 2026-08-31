
// src/components/Header.jsx
import { FaGlobe } from 'react-icons/fa6';
import { FiMoon } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-[70%] bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center bg-indigo-100 hover:bg-indigo-200 rounded-full transition text-indigo-600"
        >
          <FaGlobe size={20} />
        </button>

        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center bg-indigo-100 hover:bg-indigo-200 rounded-full transition text-indigo-600"
        >
          <FiMoon size={20} />
        </button>
      </div>

      <h1 className="text-3xl font-black tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Zask
      </h1>

      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-bold transition shadow-lg hover:shadow-xl"
        >
          Start
        </Link>
      </div>
    </header>
  );
}

