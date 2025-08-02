import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import VoiceNavigator from './VoiceNavigator';
import SettingsPanel from './SettingsPanel'; // Make sure this exists

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    darkMode: false,
    textToSpeech: false,
    fontScaling: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="bg-[#4A90E2] py-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo and Title */}
        <div className="flex items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1355848500180422687/1401012825350213732/Screenshot_2025-08-02_at_9.23.04_AM-removebg-preview.png?ex=688eba5f&is=688d68df&hm=ba2e97d2266b8c994d28046bb8be2619f66f314e4cf7ceeeb1150274cfb3e7ec&"
            alt="logo"
            className="ml-4 w-30 h-10 mr-2"
          />
          <div className="text-black font-bold text-xl font-mono">Includr</div>
        </div>

        {/* Center: Navigation */}
        <nav className="flex items-center space-x-6 mr-8">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-800 hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-gray-800 hover:text-white transition duration-300">
                Recent News
              </Link>
            </li>
            <li>
              <Link to="/tools" className="text-gray-800 hover:text-white transition duration-300">
                Wellness Tools
              </Link>
            </li>
            <li>
              <Link to="/types" className="text-gray-800 hover:text-white transition duration-300">
                Types
              </Link>
            </li>
            <li>
              <Link to="/sign-detector" className="text-gray-800 hover:text-white transition duration-300">
                Sign Detector
              </Link>
            </li>
            <li>
              <Link to="/chatbot" className="text-gray-800 hover:text-white transition duration-300">
                Chatbot
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-gray-800 hover:text-white transition duration-300">
                Feedback
              </Link>
            </li>
          </ul>

          {/* Right: Settings Icon and Voice */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 text-gray-800 hover:text-white transition duration-300"
          >
            <CiSettings size={36} />
          </button>
          <VoiceNavigator />
        </nav>
      </div>

      {/* Settings Panel */}
      {isOpen && (
        <SettingsPanel settings={settings} toggleSetting={toggleSetting} />
      )}
    </header>
  );
};

export default Header;
