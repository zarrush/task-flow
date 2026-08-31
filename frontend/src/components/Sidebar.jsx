
// src/components/Sidebar.jsx
import {
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendarDays,
  FaChartBar,
} from 'react-icons/fa6';

export default function Sidebar({ currentPlan, onPlanChange }) {
  const plans = [
    { name: 'Daily', icon: FaCalendarDay, value: 'daily' },
    { name: 'Weekly', icon: FaCalendarWeek, value: 'weekly' },
    { name: 'Monthly', icon: FaCalendarDays, value: 'monthly' },
    { name: 'Yearly', icon: FaChartBar, value: 'yearly' },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-6 px-4">
        Planning
      </h2>

      <nav className="flex flex-col">
        {plans.map((plan, index) => {
          const isActive = currentPlan === plan.value;
          const Icon = plan.icon;

          return (
            <div key={plan.name}>
              <button
                type="button"
                onClick={() => onPlanChange(plan.value)}
                className={`w-full px-4 py-3 rounded-xl font-medium transition-all flex items-center gap-3 text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'hover:bg-indigo-50 text-slate-600 hover:text-indigo-600'
                }`}
              >
                <Icon size={20} />
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

