import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';

function App() {
  return (
    <div className="App">
      <h1>React con typescript</h1>
      <h2>useState</h2>
      <hr />
      <Counter/>
      <Usuario/>

      <h2 className='mt-5'>useEffect - useRef</h2>
      <hr />
      <TimerPadre/>
    </div>
  );
}

export default App;
