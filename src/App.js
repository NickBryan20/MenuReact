import { Routes , Route} from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Saludos from './components/Saludos';
import Mision from './components/Mision';
import Vision from './components/Vision';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <div className="App">
      <Navegacion />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/saludos' element={<Saludos />} />
        <Route path='/mision-pucese' element={<Mision />} />
        <Route path='/vision-pucese' element={<Vision />} />
      </Routes>
    </div>
  );
}

export default App;
