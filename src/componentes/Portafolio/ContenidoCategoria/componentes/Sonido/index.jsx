const Sonido = ({src, titulo}) => {
  return (
    <div className="Sonido-Portafolio">
      <h3>{titulo}</h3>
      <audio controls>
        <source src={src} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export {Sonido}