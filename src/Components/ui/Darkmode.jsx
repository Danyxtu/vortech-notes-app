import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <div >
      <div className="flex items-center justify-center">
            <Sun className={`w-6 mr-1 h-6 transition-colors duration-300 ${
              isDark ? 'text-gray-400' : 'text-primary'
            }`} />
            
            {/* Toggle Switch */}
            <button
              onClick={toggleDarkMode}
              className={`relative inline-flex h-8 w-16 items-center rounded-full border-2 border-black transition-all duration-300 ${
                isDark 
                  ? 'bg-secondary border-secondary' 
                  : 'bg-primary border-primary'
              }`}
              aria-label="Toggle dark mode"
            >
              <span
                className={`inline-block h-6 w-6 rounded-full bg-white transform transition-transform duration-300 ease-in-out shadow-lg ${
                  isDark ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            
            <Moon className={`w-6 mx-1 h-6 transition-colors duration-300 ${
              isDark ? 'text-secondary  ' : 'text-gray-400'
            }`} />
          </div>
    </div>
  );
}