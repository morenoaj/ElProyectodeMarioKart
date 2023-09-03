const ContenidoWeb = ({src, titulo}) => {
  return (
    <div className="ContenidoWeb-Portafolio">
      <h3>{titulo}</h3>
      <a rel="noreferrer" href={src} target="_blank" >Visualizar</a>
    </div>
  )
}

export {ContenidoWeb}