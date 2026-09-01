// src/pages/Dashboard.jsx
import { FaTasks, FaCheckCircle, FaClock, FaExclamationTriangle } from 'react-icons/fa';

export default function Dashboard() {
  // آمار فرضی
  const stats = [
    { label: 'Total Tasks', value: 42, icon: FaTasks, color: 'text-indigo-600 bg-indigo-100' },
    { label: 'Completed', value: 28, icon: FaCheckCircle, color: 'text-green-600 bg-green-100' },
    { label: 'Pending', value: 10, icon: FaClock, color: 'text-amber-600 bg-amber-100' },
    { label: 'High Priority', value: 4, icon: FaExclamationTriangle, color: 'text-red-600 bg-red-100' },
  ];

  // تولید دیتای فرضی برای گراف فعالیت (28 روز)
  const activityData = Array.from({ length: 28 }, () => Math.floor(Math.random() * 4));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
        <p className="text-slate-500 mt-1">Welcome back! Here's your productivity overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6 flex items-center justify-between transition hover:shadow-xl hover:-translate-y-1">
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Activity Graph (GitHub Style) */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/50 p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Activity (Last 4 Weeks)</h2>
        <div className="flex gap-2 flex-wrap">
          {activityData.map((level, index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-sm transition hover:scale-125 ${
                level === 0 ? 'bg-slate-100' :
                level === 1 ? 'bg-indigo-200' :
                level === 2 ? 'bg-indigo-400' :
                'bg-indigo-600'
              }`}
              title={`${level} tasks completed`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
          <span>Less</span>
          <div className="w-4 h-4 rounded-sm bg-slate-100" />
          <div className="w-4 h-4 rounded-sm bg-indigo-200" />
          <div className="w-4 h-4 rounded-sm bg-indigo-400" />
          <div className="w-4 h-4 rounded-sm bg-indigo-600" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}