import React from "react";

export const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p>© {new Date().getFullYear()} Trackit. All rights reserved.</p>
    </div>
  </footer>
);
