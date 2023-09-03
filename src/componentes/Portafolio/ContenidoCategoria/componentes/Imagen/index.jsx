const Imagen = ({src, titulo}) => {
  return (
    <div className="Imagen-Portafolio">
      <h3>{titulo}</h3>
      <img src={src} alt={titulo} />
    </div>
  )
}

export {Imagen}