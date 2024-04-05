import React, { useState } from 'react';
import { translationMap } from './Data.js';
import './index.css'

const Main = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  
  const translateToEmojis = (text) => {
    
    const words = text.toLowerCase().split(" ");

    
    const translatedText = words.map(word => {
    
      if (translationMap[word]) {
        return translationMap[word]; 
      } else {
        return word; 
      }
    });

    return translatedText.join(" ");
  };

 
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const translatedText = translateToEmojis(inputText);
    setTranslatedText(translatedText);
  };

  return (
    <div>
      <h1>Emoji Interpreter</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter text..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button type="submit">Translate</button>
      </form>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2>Translated Text:</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default Main;