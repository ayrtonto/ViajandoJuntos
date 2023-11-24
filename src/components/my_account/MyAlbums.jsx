import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './MyAlbums.css'

import userpfp from '../../images/users/user.jpg'
import comment from '../../images/icons/comment-add.svg'
import heart_full from '../../images/icons/heart-full.svg'
//import heart_empty from '../../images/icons/heart-empty.svg'
import postimg1 from '../../images/postsimg/bariloche.jpg'
import postimg2 from '../../images/placesimg/mar_de_plata.jpg'
import postimg3 from '../../images/placesimg/barranco.jpg'
import postimg4 from '../../images/placesimg/cartagena.jpg'
import addimg from '../../images/icons/add.png'


function MyAlbums() {
    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    const [visibility3, setVisibility3] = useState(false);
    const [visibility4, setVisibility4] = useState(false);
    
    const [visibilityType, setVisibilityType] = useState('Publico');
    const [visibilityType2, setVisibilityType2] = useState('Publico');
    const [visibilityType3, setVisibilityType3] = useState('Publico');
    const [visibilityType4, setVisibilityType4] = useState('Publico');

    const toggleVisibility = (type) => {
        console.log('Nuevo tipo de visibilidad:', type);
        setVisibility(!visibility);
        if (type !== visibilityType) {
            setVisibilityType(type);
        }
    };
    const toggleVisibility2 = (type) => {
        console.log('Nuevo tipo de visibilidad:', type);
        setVisibility2(!visibility2);
        if (type!== visibilityType2) {
            setVisibilityType2(type);
        }
    };
    const toggleVisibility3 = (type) => {
        console.log('Nuevo tipo de visibilidad:', type);
        setVisibility3(!visibility3);
        if (type!== visibilityType3) {
            setVisibilityType3(type);
        }
    };
    const toggleVisibility4 = (type) => {
        console.log('Nuevo tipo de visibilidad:', type);
        setVisibility4(!visibility4);
        if (type!== visibilityType4) {
            setVisibilityType4(type);
        }
    };

    const renderVisibilityIcon = () => {
        switch (visibilityType) {
          case 'Publico':
            return <span className="public_icon">🌐</span>;
          case 'Amigos':
            return <span className="friends_icon">👫</span>;
          case 'Privado':
            return <span className="private_icon">🔒</span>;
          case 'Solo yo':
            return <span className="only_me_icon">👤</span>;
          default:
            return <span className="default_icon">🌐</span>;
        }
      };
      const renderVisibilityIcon2 = () => {
        switch (visibilityType2) {
          case 'Publico':
            return <span className="public_icon">🌐</span>;
          case 'Amigos':
            return <span className="friends_icon">👫</span>;
          case 'Privado':
            return <span className="private_icon">🔒</span>;
          case 'Solo yo':
            return <span className="only_me_icon">👤</span>;
          default:
            return <span className="default_icon">🌐</span>;
        }
      };
      const renderVisibilityIcon3 = () => {
        switch (visibilityType3) {
          case 'Publico':
            return <span className="public_icon">🌐</span>;
          case 'Amigos':
            return <span className="friends_icon">👫</span>;
          case 'Privado':
            return <span className="private_icon">🔒</span>;
          case 'Solo yo':
            return <span className="only_me_icon">👤</span>;
          default:
            return <span className="default_icon">🌐</span>;
        }
      };
      const renderVisibilityIcon4 = () => {
        switch (visibilityType4) {
          case 'Publico':
            return <span className="public_icon">🌐</span>;
          case 'Amigos':
            return <span className="friends_icon">👫</span>;
          case 'Privado':
            return <span className="private_icon">🔒</span>;
          case 'Solo yo':
            return <span className="only_me_icon">👤</span>;
          default:
            return <span className="default_icon">🌐</span>;
        }
      };
  return (
    <div className="main_containerP">
        <div className="myprofileP">Mi Perfil</div>
        <div className="profile_containerP">
            <div className="bar_containerP">
                <div className="profileP">
                    <img src={userpfp} alt="" className="pfp_P" />
                    <p className="realnameP">Gabriela Muñoz</p>
                    <p className="usernameP">@gabimun</p>
                    <p className="user_emailP">gabimun2012@gmail.com</p>
                </div>
                <div className="action_barP">
                    <p className="linkP"><Link to="/my-account/perfil" className="stlink">Perfil</Link></p>
                    <p className="linkP"><Link to="/my-account/travels" className="stlink">Viajes</Link></p>
                    <p className="linkP"><Link to="/my-account/posts" className="stlink">Publicaciones</Link></p>
                    <p className="current_linkP"><Link to="/my-account/albums" className="stlink">Álbumes</Link></p>
                    <p className="linkP"><Link to= "/my-account/trips" className='stlink'>Boletos</Link></p>
                </div>
            </div>
            <div className="posts_gridP">
                <div className="postP">
                    <img src={postimg1} alt="" className="post_imgP" />
                    <div className="iconsGridP">
                        <img src={heart_full} alt="" className="iconsP" />
                        <img src={comment} alt="" className="iconsP" />
                        <div className="visibility_icon" onClick={() => toggleVisibility(visibilityType)}>
                            {renderVisibilityIcon()}
                            {visibility && (
                            <div className="visibility_options">
                                <p onClick={() => toggleVisibility('Publico')}>Público</p>
                                <p onClick={() => toggleVisibility('Amigos')}>Amigos</p>
                                <p onClick={() => toggleVisibility('Privado')}>Privado</p>
                                <p onClick={() => toggleVisibility('Solo yo')}>Solo yo</p>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Semana de esqui en Bariloche, Argentina!!</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg2} alt="" className="post_imgP" />
                    <div className="iconsGridP">
                        <img src={heart_full} alt="" className="iconsP" />
                        <img src={comment} alt="" className="iconsP" />
                        <div className="visibility_icon" onClick={() => toggleVisibility2(visibilityType2)}>
                            {renderVisibilityIcon2()}
                            {visibility2 && (
                            <div className="visibility_options">
                                <p onClick={() => toggleVisibility2('Publico')}>Público</p>
                                <p onClick={() => toggleVisibility2('Amigos')}>Amigos</p>
                                <p onClick={() => toggleVisibility2('Privado')}>Privado</p>
                                <p onClick={() => toggleVisibility2('Solo yo')}>Solo yo</p>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Fotitos en Mar de plata, Argentina</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg3} alt="" className="post_imgP" />
                    <div className="iconsGridP">
                        <img src={heart_full} alt="" className="iconsP" />
                        <img src={comment} alt="" className="iconsP" />
                        <div className="visibility_icon" onClick={() => toggleVisibility3(visibilityType3)}>
                            {renderVisibilityIcon3()}
                            {visibility3 && (
                            <div className="visibility_options">
                                <p onClick={() => toggleVisibility3('Publico')}>Público</p>
                                <p onClick={() => toggleVisibility3('Amigos')}>Amigos</p>
                                <p onClick={() => toggleVisibility3('Privado')}>Privado</p>
                                <p onClick={() => toggleVisibility3('Solo yo')}>Solo yo</p>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Sesion de fotos en Barranco, Peru</p>
                    </div>
                </div>
                <div className="postP">
                    <img src={postimg4} alt="" className="post_imgP" />
                    <div className="iconsGridP">
                        <img src={heart_full} alt="" className="iconsP" />
                        <img src={comment} alt="" className="iconsP" />
                        <div className="visibility_icon" onClick={() => toggleVisibility4(visibilityType4)}>
                            {renderVisibilityIcon4()}
                            {visibility4 && (
                            <div className="visibility_options">
                                <p onClick={() => toggleVisibility4('Publico')}>Público</p>
                                <p onClick={() => toggleVisibility4('Amigos')}>Amigos</p>
                                <p onClick={() => toggleVisibility4('Privado')}>Privado</p>
                                <p onClick={() => toggleVisibility4('Solo yo')}>Solo yo</p>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="post_descriptionP">
                        <p className="usernameP">gabimun</p>
                        <p className="descriptionP">
                            Paisajes de Cartagena, Colombia.</p>
                    </div>
                </div>
                <div className="postP2">
                <Link to="/my-account/albums/add" className="stlink">
                    <img src={addimg} alt="" className="post_img" />
                    
                    <div className="post_descriptionP">
                        
                        <p className="descriptionP">
                            Agregar nuevo album...</p>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyAlbums