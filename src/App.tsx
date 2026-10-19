import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { BackgroundOrbs } from './components/layout/BackgroundOrbs';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Services } from './components/sections/Services';
import { Trajectory } from './components/sections/Trajectory';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen overflow-x-hidden">
          <BackgroundOrbs />
          <Navbar />
          <main>
            <Hero />
            <TechStack />
            <Projects />
            <Services />
            <Trajectory />
          </main>
          <Contact />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
