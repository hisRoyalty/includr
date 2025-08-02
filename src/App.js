import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Translate from './component/Translator';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Tools from './component/Tools';
import ContactUs from './component/ContactUs';
import Types from './component/Types';
import News from './component/News';
import Chatbot from './component/Chatbot';
import XMLDisplay from './component/Calculator';
import SettingsPanel from './component/SettingsPanel';
import { FontProvider, useFont } from './FontContext';
import SignLanguageRecognizer from './component/SignLanguageDetector';

const Layout = ({ settings, toggleSetting }) => {
  const { dyslexicFont } = useFont();

  const settingClasses = `
    ${dyslexicFont ? 'font-dyslexic' : 'font-sans'}
    ${settings.highContrast ? 'bg-black text-white' : ''}
    ${settings.colorBlindMode ? 'color-blind-mode' : ''}
    ${settings.largeText ? 'text-xl' : 'text-base'}
  `;

  return (
    <div className={`${settingClasses} min-h-screen flex flex-col`}>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-detector" element={<SignLanguageRecognizer />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/feedback" element={<ContactUs />} />
          <Route path="/types" element={<Types />} />
          <Route path="/news" element={<News />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/calculator" element={<XMLDisplay />} />
          <Route
            path="/settings"
            element={<SettingsPanel settings={settings} toggleSetting={toggleSetting} />}
          />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  const [settings, setSettings] = useState({
    highContrast: false,
    colorBlindMode: false,
    largeText: false,
  });

const toggleSetting = (key) => {
  setSettings((prev) => {
    const newSettings = { ...prev, [key]: !prev[key] };
    console.log('Settings updated:', newSettings);
    return newSettings;
  });
};


  return (
    <FontProvider>
      <Router>
        <Layout settings={settings} toggleSetting={toggleSetting} />
      </Router>
    </FontProvider>
  );
};

export default App;


