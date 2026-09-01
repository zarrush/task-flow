// src/components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCalendarDay, FaCalendarWeek, FaCalendarAlt, FaChartBar } from 'react-icons/fa';

export default function Sidebar({ currentPlan, onPlanChange }) {
  const location = useLocation();
  // چک می‌کنیم اگه تو صفحه اصلی (Tasks) هستیم، دکمه هوم روشن بشه
  const isHome = location.pathname === '/' || location.pathname === '/tasks';

  const plans = [
    { name: 'Daily', icon: FaCalendarDay, value: 'daily' },
    { name: 'Weekly', icon: FaCalendarWeek, value: 'weekly' },
    { name: 'Monthly', icon: FaCalendarAlt, value: 'monthly' },
    { name: 'Yearly', icon: FaChartBar, value: 'yearly' },
  ];

  return (
    <div className="space-y-6">
      {/* دکمه Home */}
      <Link
        to="/tasks"
        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
          isHome
            ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
            : 'hover:bg-indigo-50 text-slate-600 hover:text-indigo-600'
        }`}
      >
        <FaHome size={20} />
        Home
      </Link>

      {/* خط جداکننده */}
      <div className="h-px bg-slate-200 my-2 mx-4" />

      <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider px-4">
        Planning
      </h2>
      
      <nav className="flex flex-col">
        {plans.map((plan, index) => {
          const isActive = currentPlan === plan.value;
          
          return (
            <div key={plan.name}>
              <button
                onClick={() => onPlanChange(plan.value)}
                className={`w-full px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-3 text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'hover:bg-indigo-50 text-slate-600 hover:text-indigo-600'
                }`}
              >
                <plan.icon size={20} />
                {plan.name}
              </button>
              {index < plans.length - 1 && (
                <div className="h-px bg-slate-200 my-2 mx-4" />
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}

