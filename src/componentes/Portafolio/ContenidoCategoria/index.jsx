import {Imagen} from './componentes/Imagen'
import {Sonido} from './componentes/Sonido'
import {Video} from './componentes/Video'
import {ContenidoWeb} from './componentes/ContenidoWeb'
const ContenidoCategoria = ({categoria}) => {

  function mostrarContenido (categoria) {

    let contenido;

    switch (categoria) {
      case "Imágenes":
        
        contenido = 
        <>
          <div className="Lab-Portafolio">
            <h2>Laboratorio 1 - Textos en GIMP</h2>
            <Imagen src={"/assets/evidencias/imagenes/Lab1/Texto_Estandar.jpg"} titulo={"Texto Estandar"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab1/Crear_la _Ruta.png"} titulo={"Crear la Ruta"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab1/Un_efecto_sobre_el_texto.png"} titulo={"Un Efecto Sobre el Texto"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab1/erosion.jpg"} titulo={"Erosión"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab1/frio.jpg"} titulo={"Frío"} />

          </div>

          <div className="Lab-Portafolio">
            <h2>Laboratorio 2 - Imágenes en GIMP</h2>
            <Imagen src={"/assets/evidencias/imagenes/Lab2.1/Lapiz y Pinceles.png"} titulo={"Lapiz y Pinceles"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.1/Muneco de Nieve.jpg"} titulo={"Muneco de Nieve"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.1/Leonardo Da Vinci.png"} titulo={"Leonardo Da Vinci"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.2/gimp05.gif"} titulo={"Selección de Partes de Imagenes"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.2/Gimp06.png"} titulo={"Hacer Desaparecer una Zona de la Imágen por Medio de Clonación"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.2/Gimp07.png"} titulo={"Montaje de 2 Imágenes una Sobre la Otra"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.2/Gimp08.png"} titulo={"Quitar las Arrugas de un Rostro"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.3/Gimp09.jpg"} titulo={"Seleccionar Zonas de una Imágen para Modificar el Fondo"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.3/Gimp10.jpg"} titulo={"Arreglar Color de Imágen"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.3/Gimp11.jpg"} titulo={"Aplicación de Varios Conceptos Selección de Diferentes Modos, Filtros..."} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.3/Gimp12.jpg"} titulo={"Saturación de una Fotografía"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.3/Gimp13.jpg"} titulo={"Foto Quemada con Flash"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.3/Gimp14.jpg"} titulo={"Ejemplo de Modo de Fusión de Capas: Cambiar el Color de los Ojos."} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.3/Gimp15.png"} titulo={"Simetrías y Perspectivas"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab2.3/Gimp16.jpg"} titulo={"Restaurar Fotos Antiguas"} />
          </div>

          <div className="Lab-Portafolio">
            <h2>Laboratorio 3 - Imágenes en Photoshop</h2>
            <Imagen src={"/assets/evidencias/imagenes/Lab3/perro movimiento_listo.jpg"} titulo={"Eliminar un Objeto de la Foto 1"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab3/Lago_Listo.jpg"} titulo={"Eliminar un Objeto de la Foto 2"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab3/Flor_Listo.jpg"} titulo={"Eliminar de Foto Impresa"} />

          </div>

          <div className="Lab-Portafolio">
            <h2>Laboratorio 4 - Imágenes en Photoshop</h2>
            <Imagen src={"/assets/evidencias/imagenes/Lab4/long-curly-layered_Listo.jpg"} titulo={"Como Recortar una Imágen en PhotoShop"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab4/astorga_listo.png"} titulo={"Crear un Efecto Nublado en una Fotografía"} />
            <Imagen src={"/assets/evidencias/imagenes/Lab4/Lamborghini_Listo.jpg"} titulo={"Efecto de Tuneo en un carro, PhotoShop"} />
          </div>
        </>

        break;

      case "Sonidos":
      
        contenido = 
        <>
          <div className="Lab-Portafolio">
            <h2>Laboratorio 5 - Escenarios en Audio y Mejoras en Calidad de Audio</h2>
            <Sonido src={"/assets/evidencias/sonidos/Lab5/Hola a todos, este es un mensaje de prueba - copia.wav"} titulo={"Texto a Voz"} />
            <Sonido src={"/assets/evidencias/sonidos/Lab5/Hola a todos, este es un mensaje de prueba.wav"} titulo={"Creación de Eco"} />
            <Sonido src={"/assets/evidencias/sonidos/Lab5/Hola a todos, este es un mensaje de prueba2_01.wav"} titulo={"Correción o Eliminación de Eco"} />
            <Sonido src={"/assets/evidencias/sonidos/Lab5/el silvido de fondo.mp3"} titulo={"El Silbido de Fondo:"} />
            <Sonido src={"/assets/evidencias/sonidos/Lab5/el silvido de fondo_01_02.mp3"} titulo={"Limpieza de Audio, para Silbidos en Audio de Fondo"} />
            <Sonido src={"/assets/evidencias/sonidos/Lab5/Grabación.mp3"} titulo={"Efectos:"} />
            <Sonido src={"/assets/evidencias/sonidos/Lab5/Grabación_01sinSSS.mp3"} titulo={"Efectos sin SSS:"} />

          </div>
        </>

        break;
    
      case "Videos":
      
        contenido = 
        <>
          <div className="Lab-Portafolio">
            <h2>Laboratorio 6 - VideoSonido con Adobe Premiere</h2>
            <Video src={"/assets/evidencias/videos/Lab6/Secuencia 01.mp4"}/>
          </div>
        </>

        break;

      case "Animaciones":
      
        contenido = 
        <>
          <div className="Lab-Portafolio">
            <h2>Laboratorio 7 - Animaciones</h2>
            <div className="esconder"><Video src={"/assets/evidencias/animaciones/Lab7/Animar fotografía.mp4"} titulo={"Animar fotografía:"} />
            </div>
            <Video src={"/assets/evidencias/animaciones/Lab7/Animar fotografía.mp4"} titulo={"Animación Digital con Adobe After Effects"} />
            <br />
            <h2>Laboratorio 8 - Animaciones</h2>
            <Video src={"/assets/evidencias/animaciones/Lab8/Animar en función del audio.mp4"} titulo={"Animación Digital con Adobe After Effects [II]"} />
          </div>
        </>

        break;

      default:

        contenido = 
        <>
          <div className="Lab-Portafolio">
            <h2>Laboratorio 9 - Introduccion a HTML5</h2>
            <ContenidoWeb src={"/assets/evidencias/contenido_web/Lab9VF/Lab9.html"}/>
          </div>

          <div className="Lab-Portafolio">
            <h2>Laboratorio 10 - Introduccion a Canvas (2d)</h2>
            <ContenidoWeb src={"/assets/evidencias/contenido_web/Lab10VF/Lab10.html"}/>
          </div>

          <div className="Lab-Portafolio">
            <h2>Lab11 - Introduccion a Canvas en 3 dimensiones</h2>
            <ContenidoWeb src={"/assets/evidencias/contenido_web/Lab11VF/Lab11.html"}/>
          </div>

          <div className="Lab-Portafolio">
            <h2>Lab12 - Animamciones con CSS3</h2>
            <ContenidoWeb src={"/assets/evidencias/contenido_web/Lab12VF/Lab12.html"}/>
          </div>

          <div className="Lab-Portafolio">
            <h2>Lab13 - Elementos importantes que conforman CSS3</h2>
            <ContenidoWeb src={"/assets/evidencias/contenido_web/Lab13VF/Lab13.html"}/>
          </div>

          <div className="Lab-Portafolio">
            <h2>Lab14 - Codificación con Base64 y su relación con Multimedia</h2>
            <ContenidoWeb src={"/assets/evidencias/contenido_web/Lab14VF/Lab14.html"}/>
          </div>

          <div className="Lab-Portafolio">
            <h2>Lab15 - Aplicando HASH tipo SHA256 y su relación con Multimedia</h2>
            <ContenidoWeb src={"/assets/evidencias/contenido_web/Lab15VF/Lab15.html"}/>
          </div>
        </>

        break;
    }
    console.log(contenido)
    return contenido;
  }
  
  return (
    <>
      <h1 className="TituloCategoria">{categoria}</h1>

      <div id={`${categoria}`}>
        {mostrarContenido(categoria)}
      </div>

    </>
  )
}

export {ContenidoCategoria}