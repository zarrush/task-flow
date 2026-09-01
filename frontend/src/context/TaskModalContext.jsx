// src/context/TaskModalContext.jsx
import { createContext, useState } from 'react';

export const TaskModalContext = createContext();

export const TaskModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState(null);
  const [onSaveCallback, setOnSaveCallback] = useState(() => {});

  const openModal = (taskToEdit = null, saveCallback = () => {}) => {
    setTask(taskToEdit);
    setOnSaveCallback(() => saveCallback);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTask(null);
  };

  return (
    <TaskModalContext.Provider value={{ 
      isOpen, 
      task, 
      openModal, 
      onClose: closeModal, 
      onSave: onSaveCallback 
    }}>
      {children}
    </TaskModalContext.Provider>
  );
};