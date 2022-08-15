import { useState } from 'react';
import './App.css';
import Classbased from './components/Classbased';
import LifeCycle from './components/LifeCycle';

function App() {
  const [view, setView] = useState(true);

  return (
    <div className='App'>
      <h1>React Class-based Components!</h1>
      <button onClick={() => setView(!view)}>Change View</button>
      {view && <Classbased info='Hey how are you?' />}
      {!view && <LifeCycle />}
    </div>
  );
}

export default App;
