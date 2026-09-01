// src/components/Header.jsx
import { useContext } from 'react';
import { FaGlobe, FaMoon, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="w-[70%] bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center bg-indigo-100 hover:bg-indigo-200 rounded-full transition text-indigo-600">
          <FaGlobe size={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-indigo-100 hover:bg-indigo-200 rounded-full transition text-indigo-600">
          <FaMoon size={20} />
        </button>
      </div>

      <h1 className="text-3xl font-black tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Zask
      </h1>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            {/* فقط اسم کاربر با آیکون - لینک به پروفایل */}
            <Link
              to="/profile"
              className="flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-full transition"
            >
              <FaUser className="text-indigo-600" />
              <span className="text-sm font-medium text-indigo-700">{user.username}</span>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-full font-medium transition"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-bold transition shadow-lg"
          >
            Start
          </Link>
        )}
      </div>
    </header>
  );
}