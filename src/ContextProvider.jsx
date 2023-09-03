import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext();

export const ContextProvider = ({children}) => {
  
    const [activar, setActivar] = useState(false);
    const [posicionCorredor, setPosicionCorredor] = useState({x: 1125, y: 460});
    const [categoriaVisible, setCategoriaVisible] = useState(null);

    const corredores = {
        yoshi: '/assets/yoshi.png',
        mario: '/assets/mario.png',
        bowser: '/assets/bowser.png'
    }

    const aExportar = {
        //activar o desactivar simulacion de mariokart
        activar,
        setActivar,

        //corredor
        posicionCorredor,
        setPosicionCorredor,

        //corredores
        corredores,

        //display de categorias
        categoriaVisible,
        setCategoriaVisible
    }

    return (
        <GlobalContext.Provider value={aExportar}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)