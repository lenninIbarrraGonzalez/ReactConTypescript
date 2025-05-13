import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';

import { TimerPadre } from './components/TimerPadre';

import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';

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

      <h2>useReducer</h2>
      <hr />
      <ContadorRed/>

      <h2>Custom Hooks</h2>
      <hr />
      <Formulario />
      
    </div>
  );
}

export default App;
