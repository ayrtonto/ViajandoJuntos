import React, { useState } from 'react';
import kyoto from "../../../images/placesimg/kyoto.jpeg"
import star_full from "../../../images/icons/star-full.svg"
import star_empty from "../../../images/icons/star-empty.svg"
import star_half from "../../../images/icons/star-half.svg"
import image1 from "../../../images/placesimg/Fushimi.jpeg"
import image2 from "../../../images/placesimg/Nakashimaya.jpeg"
import image3 from "../../../images/placesimg/Bosque_Arashiyama.jpeg"
import comment_add from '../../../images/icons/comment-add.svg';

import './KyotoAbout.css'

import { Link } from 'react-router-dom'



function Kyoto(){
  // Estado para gestionar los comentarios
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  // Función para agregar un nuevo comentario
  const addComment = () => {
    if (newComment.trim() !== '') {
      // Agregar el nuevo comentario al principio de la lista
      setComments([
        ...comments,
        <div className="single_comment">
          <strong>gabimun:</strong> {newComment}
        </div>,
      ]);
      setNewComment('');
    }
  };
  return (
    <div className="Main__Container">
      <div className="Place__Title">
        <div className="Place__Subtitle">Conoce</div>
        <div className="Place__Name">Kyoto, Japón</div>
      </div>
      <div className="Place__Container">
        <div className="Place__Info__Container">
          <div className="Place__Img__Container">
            <img src={kyoto} alt="" className="Place__Image" />
          </div>
          <div className="Place__About">
            <div className="About__Title">Opiniones</div>
            <div className="Star__Cointainer">
              <img src={star_full} alt="" className="Star" />
              <img src={star_full} alt="" className="Star" />
              <img src={star_full} alt="" className="Star" />
              <img src={star_full} alt="" className="Star" />
              <img src={star_full} alt="" className="Star" />         
            </div>
            <div className="About__Title">
              Acerca de
            </div>
            <div className="About__Info">
              <p className="About__Text">
              <span className="About__Subtitle">Entidad:</span> Ciudad</p>
              <p className="About__Text">
              <span className="About__Subtitle">Tiempo:</span> 26°C, humedad del 60%</p>
              <a className="About__Text" href='https://en.wikipedia.org/wiki/Nakagy%C5%8D-ku,_Kyoto' target="_blank">
              <span className="About__Subtitle">Capital:</span> Nakagyō-ku</a>
            </div>
            <Link to="/Flight-Booking">
              <button className="Button__Buy__Ticket">Comprar Pasaje</button>
            </Link>
            <div>
              <p>
            <Link to="/Hotel-Booking">
              <button className="Button__Buy__Ticket">Comprar Alojamiento</button>
            </Link>
            </p>
            </div>
          </div>
        </div>
        <div className="Place__Description">
          <div className="Place__Description__Subtitle">Descripción</div>
          <p className="Place__Description__Text">
            Kyoto o Kioto, que alguna vez fue la capital de Japón, es una ciudad de la isla de Honshu. 
            Es famosa por sus numerosos templos budistas clásicos y sus jardines, palacios imperiales, 
            santuarios Shinto y casas de madera tradicionales. También es conocida por tradiciones 
            formales, como las comidas kaiseki, que constan de varios platos de preparaciones 
            distintivas, y las geishas, artistas femeninas que se encuentran comúnmente en el distrito Gion.
            </p>
        </div>
      </div>
    {/* Sección de recomendaciones fuera del recuadro principal */}
    <div className="Recommendations__Container">
        <div className="Recommendations__Title">Recomendaciones</div>
        <p className="Recommendations__Text">
          ¡Descubre las maravillas del mundo!
        </p>
      </div>
      {/* Mini galería */}
      <div className="Gallery__Container">
        {/* Flecha izquierda */}
        <div className="Gallery__Arrow">&#8249;</div>

        {/* Contenedor de la galería */}
<div className="Gallery__Container" style={{ display: 'flex', justifyContent: 'space-between' }}>
  
  {/* Cuadro 1 */}
<div className="Gallery__Item">
  <div style={{ width: '391px', height: '307px', background: 'white', boxShadow: '1px 2px 12px 1px rgba(0, 0, 0, 0.25)', borderRadius: '10px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', margin: '20px auto 20px', position: 'relative' }}>
    <div
      className="Gallery__Image"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      }}
    />
    <div className="Gallery__Title" style={{ textAlign: 'center', padding: '10px', position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255, 255, 255, 0.8)', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' ,color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Fushimi Inari Taisha</div>
  </div>
</div>
  
  {/* Cuadro 2 */}
<div className="Gallery__Item">
  <div style={{ width: '391px', height: '307px', background: 'white', boxShadow: '1px 2px 12px 1px rgba(0, 0, 0, 0.25)', borderRadius: '10px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', margin: '20px auto 20px', position: 'relative' }}>
    <div
      className="Gallery__Image"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      }}
    />
    <div className="Gallery__Title" style={{ textAlign: 'center', padding: '10px', position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255, 255, 255, 0.8)', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' ,color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Ouchigohan Nakashimaya</div>
  </div>
</div>

{/* Cuadro 3 */}
<div className="Gallery__Item">
  <div style={{ width: '391px', height: '307px', background: 'white', boxShadow: '1px 2px 12px 1px rgba(0, 0, 0, 0.25)', borderRadius: '10px', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', margin: '20px auto 20px', position: 'relative' }}>
    <div
      className="Gallery__Image"
      style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      }}
    />
    <div className="Gallery__Title" style={{ textAlign: 'center', padding: '10px', position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(255, 255, 255, 0.8)', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' ,color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', wordWrap: 'break-word'}}>Bosque de Bambu Arashiyama</div>
  </div>
</div>
</div>

        {/* Flecha derecha */}
        <div className="Gallery__Arrow">&#8250;</div>
      </div>

      {/* Sección de opiniones */}
<div className="Recommendations__Container">
  <div className="Recommendations__Title">Opiniones</div>

<div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', justifyContent: 'space-between' }}>
  {/* Sección de estrellas */}
  <div style={{ width: '25%', textAlign: 'center' }}>
    <div style={{ fontSize: '32px', fontWeight: '500', color: '#295943' }}>4.9</div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {/* Renderizar las estrellas aquí */}
      <img src={star_full} alt="" className="Star" />
      <img src={star_full} alt="" className="Star" />
      <img src={star_full} alt="" className="Star" />
      <img src={star_full} alt="" className="Star" />
      <img src={star_half} alt="" className="Star" />
    </div>
    <div style={{ fontSize: '20px', color: '#3d3e48' }}>478 opiniones</div>
  </div>

  {/* Sección de búsqueda de opiniones */}
  <div style={{ width: '75%', marginLeft: 'auto' }}>
    <input type="text" placeholder="Buscar opiniones" style={{ padding: '10px', width: '100%', borderRadius: '5px', border: '1px solid #63ab44', fontSize: '16px' }} />
  </div>
</div>


 {/* Separador y Descripción */}
 <div style={{ width: '75%', marginLeft: 'auto', borderTop: '1px solid #63ab44', marginTop: '20px', padding: '20px' }}>
    <p style={{ fontSize: '16px', color: '#3d3e48' }}>Todos los comentarios de nuestros usuarios han sido previamente filtrados...</p>
  </div>
</div>
{/* Nueva sección de comentarios */}
<div className="comments_container" style={{ width: '75%', marginLeft: 'auto' }}>
        

        
        {/* Nuevo comentario preexistente */}
        <div className="preexisting_comment">
            <p className="comment_text">
              <strong>Pedro213:</strong> Ciudad hermosa y llena de cultura.<br /> Kyoto es una ciudad con una historia y una cultura milenarias. Es el hogar de cientos de templos y santuarios, así como de palacios imperiales, jardines y casas tradicionales. La ciudad es un verdadero paraíso para los amantes de la historia y la cultura japonesa.
            </p>
          </div>
          {/* Nuevo comentario preexistente */}
        <div className="preexisting_comment">
            <p className="comment_text">
              <strong>Fernanda09:</strong> Hola Pedro! Que tan caro es la estadía en kyoto?
            </p>
          </div>
          {/* Nuevo comentario preexistente */}
        <div className="preexisting_comment">
            <p className="comment_text">
              <strong>Pedro213:</strong> Hola Fernanda! La verdad la ciudad es un poco cara, pero comparada con Tokyo es mucho más barata y hay muchos más lugares que ver. 
            </p>
          </div>
          
        {/* Mostrar comentarios existentes */}
        {comments.map((comment, index) => (
          <div key={index}>{comment}</div>
        ))}

          {/* Área para escribir un nuevo comentario */}
        <input
          type="text"
          placeholder="Escribe un comentario..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment_input"
        />
        <img
          src={comment_add}
          alt="Añadir comentario"
          className="comment_icon"
          onClick={addComment}
        />
        
      </div>
</div>
  );
}
export default Kyoto;
