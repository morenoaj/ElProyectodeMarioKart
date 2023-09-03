const Portada = () => {
    return (
      <div id="Portada">

        <h1 className="rainbow">Universidad Tecnológica de Panamá</h1>
        <h1 className="rainbow">Facultad de Ingenieria de Sistemas Computacionales</h1>
        <h1 className="rainbow">Carrera de Licenciatura en Desarrollo de Software</h1>
        <h1 className="rainbow">Desarrollo de Software V</h1>

        <div id="Contenedor-DatosEstudiante">
          <img className="mariokart-star left-star" src='/assets/star.png' alt='mariokart-start' />
          <div id="DatosEstudiante">
            <h2 className="rainbow">Pertenece a: Alex Moreno</h2>
            <h2 className="rainbow">Grupo: 1LS231</h2>
          </div>
          <img className="mariokart-star right-star" src='/assets/star.png' alt='mariokart-start' />
        </div>

      </div>
    )
}
  
export {Portada}