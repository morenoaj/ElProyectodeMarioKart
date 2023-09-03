const Video = ({src, titulo}) => {
    return (
      <div className="Video-Portafolio">
        <h3>{titulo}</h3>
        <video width="640" height="360" controls>
          <source src={src} type="video/mp4" />
        </video>
      </div>
    )
}
  
export {Video}