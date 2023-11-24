import React from 'react'
import { Link } from 'react-router-dom';
import './MyTrips.css'

import userpfp from '../../images/users/user.jpg'
import addimg from '../../images/icons/add.png'


function MyAlbums() {
  return (
    <div className="main_containerP">
    <div className="myprofileP">Mi Perfil</div>
        <div className="containerE">
            <div className="barP">
                <div className="profileP">
                    <img src={userpfp} alt="" className="pfp_P" />
                    <p className="realnameP">Gabriela Muñoz</p>
                    <p className="usernameP">@gabimun</p>
                    <p className="user_emailP">gabimun2012@gmail.com</p>
                </div>
                <div className="action_barP">
                    <p className="linkP"><Link to="/my-account/perfil" className="stlink">Perfil</Link></p>
                    <p className="linkP"><Link to= "/my-account/travels" className='stlink'>Viajes</Link></p>
                    <p className="linkP"><Link to="/my-account/posts" className="stlink">Publicaciones</Link></p>
                    <p className="linkP"><Link to="/my-account/albums" className="stlink">Álbumes</Link></p>
                    <p className="current_linkP"><Link to= "/my-account/trips" className='stlink'>Boletos</Link></p>
                </div>
        </div>
            <div className="trips_gridE">
                <div className="tripE">
                    <div className="trip_descriptionP">
                        <p className="countries">Perú - Argentina</p>
                        <p className="descriptionP">Vuelo: PE8920</p>
                        <p className="descriptionP">Fecha: 02/12/23 - 17/12/23</p>
                        <p className="descriptionP">Hora: 10:32</p>
                    </div>
                </div>
                <div className="tripE">
                    <div className="trip_descriptionP">
                        <p className="countries">Perú - México</p>
                        <p className="descriptionP">Vuelo: PE4210</p>
                        <p className="descriptionP">Fecha: 05/02/24</p>
                        <p className="descriptionP">Hora: 21:07</p>
                    </div>
                </div>
                <div className="tripE">
                    <div className="trip_descriptionP">
                        <p className="countries">México - Kyoto</p>
                        <p className="descriptionP">Vuelo: MX9238</p>
                        <p className="descriptionP">Fecha: 20/02/24 - 27/02/24</p>
                        <p className="descriptionP">Hora: 04:51</p>
                    </div>
                </div>
                <div className="tripE">
                    <div className="trip_descriptionP">
                        <p className="countries">México - Perú</p>
                        <p className="descriptionP">Vuelo: MX2312</p>
                        <p className="descriptionP">Fecha: 29/02/24</p>
                        <p className="descriptionP">Hora: 01:40</p>
                    </div>
                </div>
                <Link to="/Flight-Booking" className="stlink">
                    <img src={addimg} alt="" className="trip_img" />
                </Link>
            </div>
        </div>
    </div>
        
  )
}

export default MyAlbums