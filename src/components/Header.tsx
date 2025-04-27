import React from 'react';
import { ShieldAlert } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  onReportClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReportClick, isDarkMode, toggleDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4 px-4 sm:px-6 md:px-8 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <ShieldAlert className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-2" />
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Safety Incident Dashboard</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={onReportClick}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Report Incident
          </button>
          
          <ThemeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>
    </header>
  );
};

export default Header;