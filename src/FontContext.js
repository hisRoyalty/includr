import React, { createContext, useContext, useState } from 'react';


const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const [dyslexicFont, setDyslexicFont] = useState(false);

  const toggleFont = () => {
    setDyslexicFont((prev) => !prev);
  };

  return (
    <FontContext.Provider value={{ dyslexicFont, toggleFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext);
