import './styles.css'
import { Pista } from './componentes/Pista'
import {Corredor} from './componentes/Corredor'
import { Titulo } from './componentes/Titulo'
import { useGlobalContext } from '../../ContextProvider'

const MarioKart = () => {

  const {corredores} = useGlobalContext();

  return (
    <div id="Contenedor-MarioKart">
      <Titulo />
      <Pista />
      <Corredor corredor={corredores.yoshi} lugar={"corredor1"}/>
      <Corredor corredor={corredores.mario} lugar={"corredor2"}/>
      <Corredor corredor={corredores.bowser} lugar={"corredor3"}/>
    </div>
  )
}

export {MarioKart}