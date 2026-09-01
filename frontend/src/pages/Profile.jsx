// src/pages/Profile.jsx
import { FaUser, FaEnvelope, FaLock, FaSave, FaCamera } from 'react-icons/fa';

export default function Profile() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Profile Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account information.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Avatar Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 flex flex-col items-center text-center">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              A
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-indigo-600 transition border border-slate-200">
              <FaCamera size={16} />
            </button>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mt-4">Ari</h2>
          <p className="text-sm text-slate-500">ari@zask.com</p>
          <button className="mt-6 w-full py-2 border border-indigo-200 text-indigo-600 rounded-xl font-medium hover:bg-indigo-50 transition">
            Change Password
          </button>
        </div>

        {/* Edit Form Section */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <FaUser size={14} className="text-slate-400" /> Username
              </label>
              <input
                type="text"
                defaultValue="Ari"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <FaEnvelope size={14} className="text-slate-400" /> Email
              </label>
              <input
                type="email"
                defaultValue="ari@zask.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <FaLock size={14} className="text-slate-400" /> Bio
            </label>
            <textarea
              rows="4"
              defaultValue="Full-stack developer passionate about building clean and efficient web applications."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            />
          </div>

          <div className="flex justify-end pt-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg hover:shadow-xl">
              <FaSave /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}