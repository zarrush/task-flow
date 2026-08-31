
// src/pages/Tasks.jsx
import { useOutletContext } from 'react-router-dom';

export default function Tasks() {
  const { currentPlan } = useOutletContext();

  const planInfo = {
    daily: {
      title: 'Daily Planning',
      description: 'View your tasks for today',
    },
    weekly: {
      title: 'Weekly Planning',
      description: 'View your tasks for this week',
    },
    monthly: {
      title: 'Monthly Planning',
      description: 'View your tasks for this month',
    },
    yearly: {
      title: 'Yearly Planning',
      description: 'View your tasks for this year',
    },
  };

  const { title, description } =
    planInfo[currentPlan] || planInfo.daily;

  const tasks = [1, 2, 3, 4];

  return (
    <div className="space-y-6">
      {/* Plan Header */}
      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
        <h2 className="text-xl font-bold text-indigo-700">
          {title}
        </h2>

        <p className="text-sm text-indigo-600">
          {description}
        </p>
      </div>

      {/* Search & New Task */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="flex-1 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        />

        <button
          type="button"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition shadow-lg hover:shadow-xl"
        >
          + New Task
        </button>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        {tasks.map((taskNumber) => (
          <div
            key={taskNumber}
            className="bg-slate-50 hover:bg-slate-100 p-5 rounded-xl border border-slate-200 flex items-center justify-between transition"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {taskNumber}
              </div>

              <div>
                <h3 className="font-bold text-slate-800">
                  Sample Task {taskNumber}
                </h3>

                <p className="text-sm text-slate-500">
                  Description goes here...
                </p>
              </div>
            </div>

            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold">
              High Priority
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
