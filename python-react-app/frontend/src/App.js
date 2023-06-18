import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/prompt', {
        "prompt": textAreaValue
      });

      setData(response.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Type a Prompt
        </p>
        <textarea
            id="promptBox"
            value={textAreaValue}
            onChange={e => setTextAreaValue(e.target.value)}
        />
        <button id="submitButton" onClick={handleSubmit}>
          Submit
        </button>

        <label>
          Response: {data}
        </label>
      </header>
    </div>
  );
}

export default App;
