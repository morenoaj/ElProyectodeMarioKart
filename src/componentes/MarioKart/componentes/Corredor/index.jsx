import { useGlobalContext } from '../../../../ContextProvider';

const Corredor = ({corredor, lugar}) => {

      //global
      const {posicionCorredor} = useGlobalContext();

      //componente
      return (
        <div 
          className={`Corredor-Carreras ${lugar}`}
          style={{
              left: `${posicionCorredor.x}px`,
              top: `${posicionCorredor.y}px`
          }}
        >
            <img src={corredor} alt="Corredor-carreras" />
        </div>
      )
  }
  
export {Corredor}; 