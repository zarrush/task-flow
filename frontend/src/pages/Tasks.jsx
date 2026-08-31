// src/pages/Tasks.jsx
export default function Tasks() {
  return (
    <div className="space-y-6">
      {/* سرچ باکس و دکمه‌ها */}
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="flex-1 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        />
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition shadow-lg hover:shadow-xl">
          + New Task
        </button>
      </div>

      {/* لیست تسک‌ها */}
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-slate-50 hover:bg-slate-100 p-5 rounded-xl border border-slate-200 flex items-center justify-between transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                {i}
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Sample Task {i}</h3>
                <p className="text-sm text-slate-500">Description goes here...</p>
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