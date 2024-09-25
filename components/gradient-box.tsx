import React from 'react';

const GradientBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
      {children}
    </div>
  );
};

export default GradientBox;
