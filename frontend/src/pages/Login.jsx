// src/pages/Login.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Toast from '../components/Toast';

export default function Login() {
  const [activeTab, setActiveTab] = useState('signin');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login, register } = useContext(AuthContext);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

const handleSignIn = async (e) => {
  e.preventDefault();
  setError('');
  const formData = new FormData(e.target);
  try {
    await login(formData.get('username'), formData.get('password'));
    setShowToast(true);
    setTimeout(() => {
      navigate('/tasks');
    }, 1000);
  } catch (err) {
    setError(err.response?.data?.detail || 'Invalid credentials');
  }
};

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const formData = new FormData(e.target);
    const password = formData.get('password');
    const password2 = formData.get('password2');

    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    try {
      await register(
        formData.get('username'),
        formData.get('email'),
        password,
        password2
      );
      setSuccess('Account created! Please sign in.');
      setActiveTab('signin');
    } catch (err) {
      const errors = err.response?.data;
      if (errors) {
        const messages = Object.values(errors).flat().join(', ');
        setError(messages);
      } else {
        setError('Registration failed');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-wider bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Zask
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            {activeTab === 'signin' ? 'Welcome back!' : 'Create your account'}
          </p>
        </div>

        <div className="flex bg-slate-100 rounded-xl p-1 mb-6">
          <button
            onClick={() => { setActiveTab('signin'); setError(''); setSuccess(''); }}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'signin' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setActiveTab('signup'); setError(''); setSuccess(''); }}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              activeTab === 'signup' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'
            }`}
          >
            Sign Up
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm">
            {success}
          </div>
        )}

        {activeTab === 'signin' ? (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
              <input
                name="username"
                type="text"
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-bold transition shadow-lg"
            >
              Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
              <input name="username" type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input name="email" type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input name="password" type="password" required minLength="8" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Confirm Password</label>
              <input name="password2" type="password" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-bold transition shadow-lg">
              Sign Up
            </button>
          </form>
        )}
      </div>
      {showToast && (
      <Toast message="Login successful! Welcome back." onClose={() => setShowToast(false)} />
      )}
    </div>
  );
}