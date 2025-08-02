import React from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const GEMINI_API_KEY = 'AIzaSyBtN38YlfjBvUoNzRCwlVsXVRAWlzoGV1Y'; // Replace with your actual key

  const handleMessage = async (mes) => {
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: mes }]
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't get that.";
      const botMessage = createChatBotMessage(reply);
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage]
      }));
    } catch (error) {
      console.error('Gemini API error:', error);
      const errorMessage = createChatBotMessage("Oops! Something went wrong.");
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage]
      }));
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { actions: { handleMessage } })
      )}
    </div>
  );
};

export default ActionProvider;

  // AIzaSyBtN38YlfjBvUoNzRCwlVsXVRAWlzoGV1Y
