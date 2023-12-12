// SpeechComponent.js
import React, { useState, useEffect } from 'react';
import './SpechComand.css';
const SpeechComponent = () => {
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setText(transcript);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onerror = (error) => {
        console.error('Speech recognition error:', error);
        setListening(false);
      };

      recognition.onspeechend = () => {
        recognition.stop();
      };

      recognitionRef.current = recognition;
    } else {
      console.error('SpeechRecognition is not supported in this browser');
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };

  const handleTextToSpeech = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const recognitionRef = React.useRef(null);

  return (
    <div className="speech-container">
      <h1>Speech-to-Text and Text-to-Speech</h1>
      <div className="speech-buttons">
        <button onClick={startListening} disabled={listening}>
          <i className="fas fa-microphone"></i> Start Listening
        </button>
        <button onClick={stopListening} disabled={!listening}>
          <i className="fas fa-stop"></i> Stop Listening
        </button>
      </div>
      <div className="speech-result">
        <h2>Text Result:</h2>
        <p>{text}</p>
        <button onClick={handleTextToSpeech}>
          <i className="fas fa-volume-up"></i> Text to Speech
        </button>
      </div>
    </div>
  );
};

export default SpeechComponent;
