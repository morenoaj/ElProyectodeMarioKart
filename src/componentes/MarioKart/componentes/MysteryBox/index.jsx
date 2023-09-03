import { useGlobalContext } from '../../../../ContextProvider';

const MysteryBox = ({titulo}) => {

    const {setCategoriaVisible} = useGlobalContext();

    return (
      <div className="MysteryBox">
          <h1>{titulo}</h1>
          <button
            onClick={() => {setCategoriaVisible(titulo)}}
          >
            <img src="/assets/mysterybox.png" alt="mystery-box" />
          </button>
      </div>
    )
}

export {MysteryBox}; 