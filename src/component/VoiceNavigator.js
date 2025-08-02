// src/component/VoiceNavigator.js
import React, { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom';

const VoiceNavigator = () => {
  const navigate = useNavigate();

  const commands = [
    {
      command: ['Go to *', 'Open *', 'Navigate to *'],
      callback: (site) => {
        const route = site.toLowerCase();
        if (route.includes('home')) navigate('/');
        else if (route.includes('news')) navigate('/news');
        else if (route.includes('tools')) navigate('/tools');
        else if (route.includes('types')) navigate('/types');
        else if (route.includes('sign detector')) navigate('/sign-detector');
        else if (route.includes('chatbot')) navigate('/chatbot');
        else if (route.includes('feedback')) navigate('/feedback');
      },
    },
    {
      command: ['scroll down', 'scroll down a bit'],
      callback: () => {
        window.scrollBy({ top: 300, behavior: 'smooth' });
      },
    },
    {
      command: ['scroll up', 'scroll up a bit'],
      callback: () => {
        window.scrollBy({ top: -300, behavior: 'smooth' });
      },
    },
  ];

  const { transcript, listening, resetTranscript } = useSpeechRecognition({ commands });

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Your browser doesn't support speech recognition.");
    }
  }, []);

  const handleMicClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  return (
    <button
      onClick={handleMicClick}
      className={`ml-4 p-2 rounded-full ${listening ? 'bg-green-500' : 'bg-gray-300'} hover:bg-gray-400 transition`}
      title="Voice Navigation"
    >
      🎤
    </button>
  );
};

export default VoiceNavigator;
