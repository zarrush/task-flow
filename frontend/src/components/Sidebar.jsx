// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const plans = [
    { name: 'Daily', icon: '📅', path: '/tasks?plan=daily' },
    { name: 'Weekly', icon: '📆', path: '/tasks?plan=weekly' },
    { name: 'Monthly', icon: '🗓️', path: '/tasks?plan=monthly' },
    { name: 'Yearly', icon: '📊', path: '/tasks?plan=yearly' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
        Planning
      </h2>
      <nav className="flex flex-col gap-3">
        {plans.map((plan) => (
          <NavLink
            key={plan.name}
            to={plan.path}
            className={({ isActive }) =>
              `px-4 py-3 rounded-xl font-medium transition flex items-center gap-3 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                  : 'hover:bg-indigo-50 text-slate-600'
              }`
            }
          >
            <span className="text-xl">{plan.icon}</span>
            {plan.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}