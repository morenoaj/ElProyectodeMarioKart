import './styles.css'
import { MarioKart } from '../MarioKart'
import { MysteryBox } from '../MarioKart/componentes/MysteryBox'
import { useGlobalContext } from '../../ContextProvider'
import { ContenidoCategoria } from './ContenidoCategoria'

const Portafolio = () => {

  const {categoriaVisible} = useGlobalContext();

  return (
    <div id="Contenedor-Portafolio">
      
      <MarioKart />
      
      <div id="Contenedor-Contenido-Portafolio">

        <div id="Contenedor-MysteryBoxes">
          <MysteryBox titulo={"Imágenes"}/>
          <MysteryBox titulo={"Sonidos"} />
          <MysteryBox titulo={"Videos"} />
          <MysteryBox titulo={"Animaciones"} />
          <MysteryBox titulo={"HTML5 y CSS3 Avanzado"} />
        </div>
        
        {categoriaVisible && 
        
          <div id="Contenedor-Categoria">
            <ContenidoCategoria categoria={categoriaVisible} />
          </div>
        
        }
        
      </div>

    </div>
  )
}

export {Portafolio}