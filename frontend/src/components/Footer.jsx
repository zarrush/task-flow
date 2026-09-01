// src/components/Footer.jsx
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socials = [
    { name: 'GitHub', icon: FaGithub, url: 'https://github.com' },
    { name: 'X', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com' },
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
  ];

  return (
    <footer className="w-[70%] bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 px-8 py-4 flex items-center justify-between">
      {/* سمت چپ: کپی‌رایت */}
      <p className="text-sm text-slate-500">
        © 2026 <span className="font-bold text-indigo-600">Zask</span>. All rights reserved.
      </p>

      {/* وسط: دکمه بنفش Dashboard */}
      <Link
        to="/dashboard"
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-bold transition shadow-lg hover:shadow-xl text-sm"
      >
        Dashboard
      </Link>

      {/* سمت راست: آیکون‌ها + About Us */}
      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-9 h-9 bg-indigo-100 hover:bg-indigo-600 rounded-full transition-all duration-300 text-indigo-600 hover:text-white"
            aria-label={social.name}
          >
            <social.icon size={18} />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {social.name}
            </span>
          </a>
        ))}
        <Link
          to="/about"
          className="text-sm text-indigo-600 hover:text-indigo-700 font-medium ml-4"
        >
          About Us
        </Link>
      </div>
    </footer>
  );
}