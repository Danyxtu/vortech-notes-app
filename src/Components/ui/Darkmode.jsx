import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle({setDarkMode, darkMode}) {

  const toggleDarkMode = () => {
    if(darkMode == false){
      setDarkMode(true);
    }else {
      setDarkMode(false);
    }

    if (darkMode) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  };

  return (
    <div className="flex items-center justify-center">
      <Sun className={`w-6 mr-1 h-6 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-yellow-500'}`} />
      <button
        onClick={toggleDarkMode}
        className={`relative inline-flex h-8 w-16 items-center rounded-full transition-all duration-300 ${
          darkMode ? 'bg-gray-700' : 'bg-secondary'
        }`}
        aria-label="Toggle dark mode"
      >
        <span
          className={`inline-block h-6 w-6 rounded-full bg-white transform transition-transform duration-300 shadow-lg ${
            darkMode ? 'translate-x-8' : 'translate-x-1'
          }`}
        />
      </button>
      <Moon className={`w-6 ml-1 h-6 transition-colors duration-300 ${darkMode ? 'text-blue-400' : 'text-gray-400'}`} />
    </div>
  );
}
