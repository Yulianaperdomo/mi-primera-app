import { useState } from 'react';
import logosena from './assets/logosena.png';
import './App.css';
import Saludo from './components/saludo';

function App() {
  const [count, setCount] = useState(4); 

  return (
    <>
      <div>
        <a href="https://logosena.dev" target="_blank">
          <img src={logosena} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1> Mi primer app </h1>

      <div>
        <Saludo nombre="Yuliana" />
      </div>

      <div className="card">
        <p>El contador está en {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App; 
