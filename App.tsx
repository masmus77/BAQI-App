
import React, { useState, useEffect, useCallback } from 'react';
import { HijaiyahModule } from './components/HijaiyahModule';
import { HarakatModule } from './components/HarakatModule';
import { TajwidModule } from './components/TajwidModule';
import { ReadingPracticeModule } from './components/ReadingPracticeModule';
import { AboutPage } from './components/AboutPage';

type View = 'hijaiyah' | 'harakat' | 'tajwid' | 'latihan' | 'tentang';

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const App: React.FC = () => {
  const [view, setView] = useState<View>('hijaiyah');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);

  const renderView = () => {
    switch (view) {
      case 'hijaiyah': return <HijaiyahModule />;
      case 'harakat': return <HarakatModule />;
      case 'tajwid': return <TajwidModule />;
      case 'latihan': return <ReadingPracticeModule />;
      case 'tentang': return <AboutPage />;
      default: return <HijaiyahModule />;
    }
  };

  const NavLink: React.FC<{ currentView: View; targetView: View; onClick: (v: View) => void; children: React.ReactNode }> = ({ currentView, targetView, onClick, children }) => {
    const isActive = currentView === targetView;
    return (
      <button
        onClick={() => onClick(targetView)}
        className={`px-3 py-2 rounded-md text-sm sm:text-base font-medium transition-colors duration-200 ${
          isActive
            ? 'bg-primary-light text-white shadow-md'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-dark dark:text-primary-light">
                <span lang="ar">اقرأ</span> Iqra'
              </span>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-2">
              <NavLink currentView={view} targetView="hijaiyah" onClick={setView}>Huruf Hijaiyah</NavLink>
              <NavLink currentView={view} targetView="harakat" onClick={setView}>Harakat</NavLink>
              <NavLink currentView={view} targetView="tajwid" onClick={setView}>Tajwid</NavLink>
              <NavLink currentView={view} targetView="latihan" onClick={setView}>Latihan Baca</NavLink>
              <NavLink currentView={view} targetView="tentang" onClick={setView}>Tentang</NavLink>
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
          <div className="sm:hidden flex overflow-x-auto py-2 -mx-4 px-4 space-x-2 scrollbar-hide">
              <NavLink currentView={view} targetView="hijaiyah" onClick={setView}>Hijaiyah</NavLink>
              <NavLink currentView={view} targetView="harakat" onClick={setView}>Harakat</NavLink>
              <NavLink currentView={view} targetView="tajwid" onClick={setView}>Tajwid</NavLink>
              <NavLink currentView={view} targetView="latihan" onClick={setView}>Latihan</NavLink>
              <NavLink currentView={view} targetView="tentang" onClick={setView}>Tentang</NavLink>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
        <div key={view} className="animate-module-entry">
          {renderView()}
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aplikasi Belajar Al-Qur'an Interaktif. Dibuat dengan ❤️.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;