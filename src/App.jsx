import { useState } from 'react';
import logosena from './assets/logosena.png';
import './App.css';
import Saludo from './components/saludo';

function App() {
  const [count, setCount] = useState(4); 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-pink-200">
      <div className="mb-8 flex justify-center">
        <a href="https://logosena.dev" target="_blank">
          <img 
            src={logosena} 
            className="logo w-48 md:w-64" 
            alt="Logo SENA" 
          />
        </a>
      </div>
      
     
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-purple-800">
        Mi primer app
      </h1>

      <div className="text-xl mb-6 text-center">
        <Saludo nombre="Yuliana" />
      </div>
 
      <div className="card bg-white p-6 rounded-lg shadow-md text-center max-w-md w-full mb-6">
        <p className="text-2x1 mb-4">El contador está en {count}</p>
        <div className="flex justify-center gap-4 mb-4">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600"
          >
            Increment
          </button>
          <button 
            onClick={() => setCount((count) => count - 1)}
            className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600"
          >
            Decrement
          </button>
        </div>
        <p className="text-gray-600">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
  
      <p className="text-gray-500 text-center max-w-md">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
