// src/components/Toast.jsx
import { useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-50 animate-slide-in">
      <div className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl">
        <FaCheckCircle size={20} />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}