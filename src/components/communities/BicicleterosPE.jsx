import React, { useState } from 'react';
import bg from '../../images/communitiesimg/bicicleteros-pe.jpg';
import heart_full from '../../images/icons/heart-full.svg';
import heart_empty from '../../images/icons/heart-empty.svg';
import comment_add from '../../images/icons/comment-add.svg';
import './BicicleterosPE.css';

const BicicleterosPE = () => {
  // Estado para gestionar los comentarios
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);

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

// Función para manejar el clic en el botón de "me gusta"
const handleLike = () => {
  setIsLiked(!isLiked); // Cambia el estado a la inversa
};

return (
  <div className="main_container">
    <div className="community_title">
      <div className="community_subtitle">Conoce</div>
      <div className="community_name">Bicicleteros PE</div>
    </div>

    <div className="community_container">
      <img src={bg} alt="" className="community_img" />
      <div className="actions_container">
        {/* Cambia el color del corazón según el estado de "isLiked" */}
        <img
          src={isLiked ? heart_full : heart_empty}
          alt=""
          className="community_icon"
          onClick={handleLike}
        />
        <img src={comment_add} alt="" className="community_icon" />
      </div>

      {/* Nueva sección de comentarios */}
      <div className="comments_container">
        

        
        {/* Nuevo comentario preexistente */}
        <div className="preexisting_comment">
            <p className="comment_text">
              <strong>salvadorMM99:</strong> Esta es mi favorita ruta para bicicletear. Tengo un grupo con mis amigos y vamos casi todos los fines de semana. Algunos les gusta mucho el ciclismo y otros solo lo hacen para mantenerse sanos. ¿Cuál es tu favorita ruta?
            </p>
          </div>
          {/* Nuevo comentario preexistente */}
        <div className="preexisting_comment">
            <p className="comment_text">
              <strong>pedromart:</strong> Mi ruta favorita es la ciclovia que empieza en el Parque Bicentenario. Me gusta mucho seguirla y llegar hasta Miraflores. 
            </p>
          </div>
          {/* Nuevo comentario preexistente */}
        <div className="preexisting_comment">
            <p className="comment_text">
              <strong>salvadorMM99:</strong> La ciclovia del Parque Bicentenario es una de mis favoritas. No puedo ir muy seguido pero me gusta llegar hasta el final.
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
  </div>
);
};

export default BicicleterosPE;
