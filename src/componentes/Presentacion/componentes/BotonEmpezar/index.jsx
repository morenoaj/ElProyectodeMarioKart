import { useGlobalContext } from "../../../../ContextProvider"

const BotonEmpezar = () => {

  const {setActivar} = useGlobalContext()

  const empezar = () => {
    setActivar(true)
  }

  return (
    <button id="BotonEmpezar" onClick={empezar}>Empezar</button>
  )
}
  
export {BotonEmpezar}