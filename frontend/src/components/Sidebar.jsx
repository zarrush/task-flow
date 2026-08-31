// src/components/Sidebar.jsx
import { Calendar, CalendarDays, CalendarRange, BarChart3 } from 'lucide-react';

export default function Sidebar({ currentPlan, onPlanChange }) {
  const plans = [
    { name: 'Daily', icon: Calendar, value: 'daily' },
    { name: 'Weekly', icon: CalendarDays, value: 'weekly' },
    { name: 'Monthly', icon: CalendarRange, value: 'monthly' },
    { name: 'Yearly', icon: BarChart3, value: 'yearly' },
  ];

  return (
    <div className="space-y-2">
      <h2 className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-6 px-4">
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