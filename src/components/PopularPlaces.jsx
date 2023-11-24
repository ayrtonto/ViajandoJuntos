import React from "react";
import './PopularPlaces.css'

import mexico from "../images/placesimg/mexico.jpg"
import paris from "../images/placesimg/paris.jpg"
import kyoto from "../images/placesimg/kyoto.jpeg"
import sanandres from "../images/placesimg/san-andres.jpeg"
import cartagena from "../images/placesimg/cartagena.jpg"
import miami from "../images/placesimg/miami.jpg"
import star_full from "../images/icons/star-full.svg"
import star_empty from "../images/icons/star-empty.svg"
import star_half from "../images/icons/star-half.svg"
import user from "../images/icons/user.svg"

import { Outlet, Link } from "react-router-dom";


function PopularPlaces() {
  return (
    <div className="Places__Container">
        <div className="Places__Title">Lugares Más Visitados</div>
        <div className="Places__Subtitle">Descubre los mejores lugares</div>
        <div className="Places__Grid">
            <div className="Card__Container">
                <a href="#" className="Card">
                    <img src={mexico} alt="" className="Places__Image" />
                    <div className="Location">Ciudad de México, México</div>
                    <div className="Stats">
                        <div className="StarsContainer">
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_empty} alt="" className="Star" />
                        </div>
                        <div className="Views">
                            +1.5M
                            <img src={user} alt="" className="Places__Icon" />
                        </div>
                    </div>
                </a>
            </div>
            <div className="Card__Container">
                <a href="#" className="Card">
                    <img src={paris} alt="" className="Places__Image" />
                    <div className="Location">París, Francia</div>
                    <div className="Stats">
                        <div className="StarsContainer">
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_half} alt="" className="Star" />
                            <img src={star_empty} alt="" className="Star" />
                        </div>
                        <div className="Views">
                            +2M
                            <img src={user} alt="" className="Places__Icon" />
                        </div>
                    </div>
                </a>
            </div>
            <div className="Card__Container">
                <Link to="/places/Kyoto-Japan" className="Card">
                    <img src={kyoto} alt="" className="Places__Image" />
                    <div className="Location">Kyoto, Japón</div>
                    <div className="Stats">
                        <div className="StarsContainer">
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                        </div>
                        <div className="Views">
                            +2.8M
                            <img src={user} alt="" className="Places__Icon" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="Card__Container">
                <a href="#" className="Card">
                    <img src={sanandres} alt="" className="Places__Image" />
                    <div className="Location">Isla San Andrés, Colombia</div>
                    <div className="Stats">
                        <div className="StarsContainer">
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_half} alt="" className="Star" />
                        </div>
                        <div className="Views">
                            +1.4M
                            <img src={user} alt="" className="Places__Icon" />
                        </div>
                    </div>
                </a>
            </div>
            <div className="Card__Container">
                <a href="#" className="Card">
                    <img src={cartagena} alt="" className="Places__Image" />
                    <div className="Location">Cartagena, Colombia</div>
                    <div className="Stats">
                        <div className="StarsContainer">
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_half} alt="" className="Star" />
                        </div>
                        <div className="Views">
                            +1.3M
                            <img src={user} alt="" className="Places__Icon" />
                        </div>
                    </div>
                </a>
            </div>
            <div className="Card__Container">
                <a href="#" className="Card">
                    <img src={miami} alt="" className="Places__Image" />
                    <div className="Location">Miami, Estados Unidos</div>
                    <div className="Stats">
                        <div className="StarsContainer">
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_full} alt="" className="Star" />
                            <img src={star_empty} alt="" className="Star" />
                        </div>
                        <div className="Views">
                            +11M
                            <img src={user} alt="" className="Places__Icon" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
}

export default PopularPlaces;