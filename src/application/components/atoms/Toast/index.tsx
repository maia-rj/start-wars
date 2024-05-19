import React from 'react';
import ToastMessage from './ToastMessage';
import { Container } from './index.styles';
import { useToast } from 'application/context/toast';

const ToastContainer: React.FC = () => {
    const { toasts, removeToast } = useToast();
  
    if (toasts.length === 0) return null;
  
    return (
      <Container>
        {toasts.map((toast) => (
          <ToastMessage key={toast.id} onClick={() => removeToast(toast.id)}>
            {toast.message}
          </ToastMessage>
        ))}
      </Container>
    );
  };


export default ToastContainer;
