import React from 'react'
import { Link } from 'react-router-dom';
import './MyTravels.css'

import userpfp from '../../images/users/user.jpg'
import comment from '../../images/icons/comment-add.svg'
import heart_full from '../../images/icons/heart-full.svg'
import heart_empty from '../../images/icons/heart-empty.svg'

import estrella_llena from '../../images/icons/star_lleno.png'
import estrella_vacia from '../../images/icons/star_vacio.png'
import travel_China from '../../images/travels_experience/ViajeChina.jpg'
import travel_Bahamas from '../../images/travels_experience/ViajeBahamas.jpeg'
import travel_NuevaYork from '../../images/travels_experience/ViajeNuevaYork.jpg'
import travel_Brasil from '../../images/travels_experience/ViajeBrasil.jpg'
import travel_Hawaii from '../../images/travels_experience/ViajeHawaii.jpg'


import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'
import {useState} from 'react'

function MyTravels() {

    const Usuario = {
        name: 'Gabriela Muñoz',
        username: '@gabimun',
        email: 'gabimun2012@gmail.com',
    }
    const [modalActualizar, setModalActualizar] = useState(false);
    const [form, setForm] = useState({
      name: Usuario.name,
      username: Usuario.username,
      email: Usuario.email,
    });
  
    const mostrarModalActualizar = (dato) => {
      setForm(dato);
      setModalActualizar(true);
    };
  
    const cerrarModalActualizar = () => {
      setModalActualizar(false);
    };
  
    const editar = (dato) => {
        let arreglo = dato;
      setForm(arreglo);
      setModalActualizar(false);
    };
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
        [e.target.username]: e.target.value,
        [e.target.email]: e.target.value
      });
    };

      // Mantiene el estado de destacado para la publicación
    const [highlightedPosts, setHighlightedPosts] = useState({});

    const handleStarClick = (postId) => {
        if (Object.keys(highlightedPosts).length === 1 && !highlightedPosts[postId]) {

          const confirmChange = window.confirm('Ya tiene una experiencia destacada. ¿Seguro que desea cambiarla?');
          if (confirmChange) {

            const prevHighlightedPostId = Object.keys(highlightedPosts)[0];
            setHighlightedPosts({ [postId]: true });

            console.log(`Cambiando de ${prevHighlightedPostId} a ${postId}`);
          }
        } else {

          setHighlightedPosts((prev) => {
            if (prev[postId]) {
              console.log('Dejar de destacar la publicación');
              const updatedState = { ...prev };
              delete updatedState[postId];
              return updatedState;
            } else {
              return { ...prev, [postId]: true };
            }
          });
        }
      };
      
      


  return (
    <div className="main_containerP">
        <div className="myprofileP">Mi Perfil</div>
        <div className="profile_containerP">
            <div className="bar_containerP">
                <div className="profileP">
                <img src={userpfp} alt="" className="pfp_E" />
                      <p className="realnameE">Gabriela Muñoz</p>
                      <p className="usernameE">@gabimun</p>
                      <p className="user_emailE">gabimun2012@gmail.com</p>
                </div>
                <div className="action_barP">
                    <p className="linkP"><Link to="/my-account/perfil" className="stlink">Perfil</Link></p>
                    <p className="current_linkP"><Link to="/my-account/travels" className="stlink">Viajes</Link></p>
                    <p className="linkP"><Link to="/my-account/posts" className="stlink">Publicaciones</Link></p>
                    <p className="linkP"><Link to="/my-account/albums" className="stlink">Álbumes</Link></p>
                    <p className="linkP"><Link to= "/my-account/trips" className='stlink'>Boletos</Link></p>
                </div>
            </div>
            <div className="posts_gridP">
                <div className="postP">
                    <img src={travel_China} alt="" className="post_imgP" />
                    <img src={highlightedPosts['post1']? estrella_llena : estrella_vacia}
                    alt="Estrella" className="star-button" onClick={()=>handleStarClick('post1')}/>
                    {highlightedPosts['post1'] && <span className="destacadoText">¡Mi mejor viaje!</span>}
                    <div className="post_descriptionP">
                        <p className="titleP">¡Mi primer viaje y es a China!</p>
                        <p className="descriptionP">    
                         Disfrute su riqueza cultural, gastronomica,  
                         además de su fascinante historia.</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={travel_Bahamas} alt="" className="post_imgP" />
                    <img src={highlightedPosts['post2']? estrella_llena : estrella_vacia}
                    alt="Estrella" className="star-button" onClick={()=>handleStarClick('post2')}/>
                    {highlightedPosts['post2'] && <span className="destacadoText">¡Mi mejor viaje!</span>}
                    <div className="post_descriptionP">
                        <p className="titleP">Viaje a las Bahamas</p>
                        <p className="descriptionP">
                         Cada momento fue un escape perfecto. ¡Un paraíso tropical que 
                         siempre recordaré con cariño!</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={travel_NuevaYork} alt="" className="post_imgP" />
                    <img src={highlightedPosts['post3']? estrella_llena : estrella_vacia}
                    alt="Estrella" className="star-button" onClick={()=>handleStarClick('post3')}/>
                    {highlightedPosts['post3'] && <span className="destacadoText">¡Mi mejor viaje!</span>}
                    <div className="post_descriptionP">
                        <p className="titleP">Experiencia en Nueva York</p>
                        <p className="descriptionP">
                         La ciudad que nunca duerme 
                         dejó una marca imborrable en mi corazón.</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={travel_Brasil} alt="" className="post_imgP" />
                    <img src={highlightedPosts['post4']? estrella_llena : estrella_vacia}
                    alt="Estrella" className="star-button" onClick={()=>handleStarClick('post4')}/>
                    {highlightedPosts['post4'] && <span className="destacadoText">¡Mi mejor viaje!</span>}
                    <div className="post_descriptionP">
                        <p className="titleP">De paso por Brasil</p>
                        <p className="descriptionP">
                         Mucha emoción y energía en su famoso carnaval. 
                         ¡Una gran experiencia que siempre recordaré!.</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={travel_Hawaii} alt="" className="post_img" />
                    <img src={highlightedPosts['post5']? estrella_llena : estrella_vacia}
                    alt="Estrella" className="star-button" onClick={()=>handleStarClick('post5')}/>
                    {highlightedPosts['post5'] && <span className="destacadoText">¡Mi mejor viaje!</span>}
                    <div className="post_descriptionP">
                        <p className="titleP">Por fin en Hawaii</p>
                        <p className="descriptionP">
                         Surfear al atardecer, explorar volcanes y disfrutar 
                         de la hospitalidad hawaiana fueron de los mejores momentos.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyTravels
