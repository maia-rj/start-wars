import React from 'react';
import { Message } from './ToastMessage.styles';

const ToastMessage: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ children, onClick }) => {
    return <Message onClick={onClick}>{children}</Message>;
};

export default ToastMessage;
