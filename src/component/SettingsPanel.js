import React from 'react';
import { useFont } from '../FontContext';

const SettingsPanel = ({ settings, toggleSetting }) => {
  const { dyslexicFont, toggleFont } = useFont();

  return (
    <div className="absolute right-10 top-20 bg-white shadow-lg rounded-lg p-4 w-64 z-50">
      <h2 className="text-lg font-semibold mb-2">Settings</h2>

      {/* Dyslexia Font Toggle */}
      <div className="flex items-center justify-between mb-3">
        <span>Dyslexia Font</span>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={dyslexicFont}
            onChange={toggleFont}
          />
          <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-600 rounded-full peer transition-all duration-300" />
        </label>
      </div>



    </div>
  );
};

export default SettingsPanel;



