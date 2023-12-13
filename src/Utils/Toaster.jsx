import React, { useEffect } from 'react';

const Toast = ({ message, type, showToast, setShowToast }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000); // 3000ms (3 seconds) - adjust according to your preference

    return () => clearTimeout(timer);
  }, [setShowToast]);

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div
      className={`text-center absolute bottom-0 right-0 left-1/2 transform -translate-x-1/2 p-4 rounded-md text-white ${getBgColor()} ${
        showToast ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300 ease-in-out`}
    >
      {message}
    </div>
  );
};

export default Toast;

