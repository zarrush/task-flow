// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskModalProvider } from './context/TaskModalContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import About from './pages/About';
import TaskModal from './components/TaskModal';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TaskModalProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Tasks />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
          <TaskModal />
        </TaskModalProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;