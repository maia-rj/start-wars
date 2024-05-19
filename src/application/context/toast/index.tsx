import ToastContainer from '@components/atoms/Toast';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Toast {
  id: number;
  message: string;
}

interface ToastContextType {
  toasts: Toast[];
  addToast: (message: string) => void;
  removeToast: (id: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string) => {
    const id = Date.now();
    console.log('aqui')
    setToasts((prevToasts) => [...prevToasts, { id, message }]);
    setTimeout(() => removeToast(id), 3000); // Auto remove after 3 seconds
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer/>
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};


export default ToastProvider;
export { ToastProvider, useToast };
