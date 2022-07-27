import React, { useState } from 'react';

function App() {
  const [helloMessage, setHelloMessage] = useState(false);
  return (
    <div className='App'>
      <h1>Cypress Deep Dive</h1>
      <button
        onClick={() => {
          setHelloMessage(!helloMessage);
        }}
      >
        show hello message
      </button>
      <button
        onClick={() => {
          alert('button clicked');
        }}
      >
        alert user
      </button>
      {helloMessage && <h2>hello user</h2>}
    </div>
  );
}

export default App;
