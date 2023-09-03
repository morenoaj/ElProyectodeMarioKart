import './App.css';
import { useGlobalContext } from '../ContextProvider';
import { Presentacion } from '../componentes/Presentacion';
import { Portafolio } from '../componentes/Portafolio';

const App = () => {

  const {activar} = useGlobalContext()

  return (
    <main id="Contenedor-Aplicacion">
      
      {activar ? <Portafolio /> : <Presentacion />}

    </main>
  );
}

export {App};