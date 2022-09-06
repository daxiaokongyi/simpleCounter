import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='app'>
      <h1 className={count < 0 ? 'negative' : count > 0 ? 'positive' : null}>{count}</h1>
      <div className='btn-wrapper'>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default App;
