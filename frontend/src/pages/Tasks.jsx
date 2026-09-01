// src/pages/Tasks.jsx
import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import api from '../api/axios';
import { TaskModalContext } from '../context/TaskModalContext';

export default function Tasks() {
  const [searchParams] = useSearchParams();
  const currentPlan = searchParams.get('plan') || 'daily';
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { openModal } = useContext(TaskModalContext);

  useEffect(() => {
    loadTasks();
  }, [currentPlan]);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/tasks/?plan_type=${currentPlan}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewTask = () => {
    openModal(null, loadTasks);
  };

  const handleEditTask = (task) => {
    openModal(task, loadTasks);
  };

  const handleToggleStatus = async (task) => {
    try {
      await api.patch(`/tasks/${task.id}/toggle_status/`);
      loadTasks();
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  const handleDelete = async (taskId) => {
    if (confirm('Are you sure you want to delete this task?')) {
      try {
        await api.delete(`/tasks/${taskId}/`);
        loadTasks();
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    }
  };

  const planInfo = {
    daily: { title: 'Daily Planning', description: 'View your tasks for today' },
    weekly: { title: 'Weekly Planning', description: 'View your tasks for this week' },
    monthly: { title: 'Monthly Planning', description: 'View your tasks for this month' },
    yearly: { title: 'Yearly Planning', description: 'View your tasks for this year' },
  };

  const { title, description } = planInfo[currentPlan] || planInfo.daily;

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-amber-100 text-amber-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-200">
        <h2 className="text-xl font-bold text-indigo-700">{title}</h2>
        <p className="text-sm text-indigo-600">{description}</p>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="flex-1 px-6 py-3 bg-slate-50 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleNewTask}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition shadow-lg hover:shadow-xl"
        >
          <FaPlus /> New Task
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-500">Loading tasks...</div>
      ) : tasks.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-slate-500">No tasks found. Create your first task!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`bg-white p-5 rounded-xl border border-slate-200 flex items-center justify-between transition hover:shadow-lg ${
                task.status === 'completed' ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-center gap-4 flex-1">
                <button
                  onClick={() => handleToggleStatus(task)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition ${
                    task.status === 'completed'
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-br from-indigo-400 to-purple-500 text-white'
                  }`}
                >
                  {task.status === 'completed' ? '✓' : task.id}
                </button>
                <div className="flex-1">
                  <h3 className={`font-bold text-slate-800 ${
                    task.status === 'completed' ? 'line-through' : ''
                  }`}>
                    {task.title}
                  </h3>
                  <p className="text-sm text-slate-500">{task.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-4 py-2 rounded-full text-xs font-bold ${getPriorityColor(task.priority)}`}>
                  {task.priority}
                </span>
                <button
                  onClick={() => handleEditTask(task)}
                  className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}