import './App.css';
import Counter from './component/Counter';
import Effect from './component/Effect';
import KeyPress from './component/KeyPress';
import Location from './component/Location';
import Mouse from './component/Mouse';

function App() {
  return (
    <div className='App'>
      {/* <Counter /> */}
      {/* <Effect /> */}
      {/* <Location /> */}
      <Mouse />
      <KeyPress />
    </div>
  );
}

export default App;
