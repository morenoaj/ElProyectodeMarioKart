import './styles.css'
import { BotonEmpezar } from "./componentes/BotonEmpezar"
import { Portada } from "./componentes/Portada"

const Presentacion = () => {
    return (
        <div id="Presentacion">
            <Portada />
            <BotonEmpezar />
        </div>
    )
}

export {Presentacion}