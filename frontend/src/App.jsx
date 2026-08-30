// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        {/* صفحه لاگین Layout نداره (هدر و سایدبار نمی‌خواد) */}
        <Route path="/login" element={<Login />} />

        {/* بقیه صفحات داخل Layout مشترک هستن */}
        <Route element={<Layout />}>
          <Route path="/" element={<Tasks />} /> {/* پیش‌فرض میره تو تسک‌ها */}
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;