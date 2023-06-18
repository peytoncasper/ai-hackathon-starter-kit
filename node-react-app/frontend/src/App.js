import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/query', {
        "query_string": textAreaValue
      });

      setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Type a query
        </p>
        <textarea
            id="promptBox"
            value={textAreaValue}
            onChange={e => setTextAreaValue(e.target.value)}
        />
        <button id="submitButton" onClick={handleSubmit}>
          Submit
        </button>

        <table>
          <thead>
          <tr>
            <th>ID</th>
            <th>Score</th>
          </tr>
          </thead>
          <tbody>
          {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.score}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
