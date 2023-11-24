import React from 'react'
import './CommunitiesMini.css'
import user1 from "../images/users/person1.jpg"
import user2 from "../images/users/person2.jpg"
import user3 from "../images/users/person3.jpg"
import user4 from "../images/users/person4.jpg"
import user5 from "../images/users/person5.jpg"
import user6 from "../images/users/person6.jpg"

import { Link } from 'react-router-dom'


function CommunitiesMini(){
  return (
    <div class="Community__Container">
        <div class="Community__Title">Interacciones</div>
        <div class="Community__Subtitle">Comunidades esperando a por ti</div>
        <div className="Community__Grid">
        <div className="Community__Card__Container">
                <a href="#" className="Community__Card">
                    <div className="Card__Title">
                        <img src={user1} alt="" className="Community__Img" />
                        <div className="Community__Name">Trekking Peru</div> 
                    </div>                   
                    <div className="Card__Info">
                        Únete a nuestra comunidad de trekking 
                        en Perú y descubre paisajes asombrosos 
                        mientras compartes aventuras con amantes 
                        de la naturaleza de todo el mundo. ¡Explora 
                        Perú de una manera única y emocionante con 
                        nosotros!
                    </div>
                </a>
            </div>
        <div className="Community__Card__Container--highlighted">
                <Link to="/communities/Bicicleteros-PE" className="Community__Card">
                    <div className="Card__Title">
                        <img src={user2} alt="" className="Community__Img" />
                        <div className="Community__Name--highlighted">Bicicleteros PE</div> 
                    </div>                   
                    <div className="Card__Info--highlighted">
                        Únete a nuestra comunidad de bicicleteros en 
                        Perú y pedalea por paisajes increíbles mientras 
                        conoces a apasionados por la bicicleta de todo 
                        el país. ¡Explora Perú sobre dos ruedas con nosotros!
                    </div>
                </Link>
            </div>
        <div className="Community__Card__Container">
                <a href="#" className="Community__Card">
                    <div className="Card__Title">
                        <img src={user3} alt="" className="Community__Img" />
                        <div className="Community__Name">Viajes familiares</div> 
                    </div>                   
                    <div className="Card__Info">
                        Únete a nuestra comunidad de viajes en familia y 
                        comparte momentos especiales mientras exploras el 
                        mundo con tus seres queridos. ¡Crea recuerdos que 
                        durarán toda la vida junto a otros viajeros familiares 
                        como tú!
                    </div>
                </a>
            </div>
        <div className="Community__Card__Container">
                <a href="#" className="Community__Card">
                    <div className="Card__Title">
                        <img src={user4} alt="" className="Community__Img" />
                        <div className="Community__Name">Aventureres</div> 
                    </div>                   
                    <div className="Card__Info">
                        Forma parte de nuestra comunidad de espíritus 
                        aventureros y prepárate para explorar el mundo en 
                        busca de emociones únicas. Únete a otros amantes de 
                        la aventura y descubre juntos un universo lleno de 
                        experiencias emocionantes. ¡La aventura te espera!
                    </div>
                </a>
            </div>
        <div className="Community__Card__Container">
                <a href="#" className="Community__Card">
                    <div className="Card__Title">
                        <img src={user5} alt="" className="Community__Img" />
                        <div className="Community__Name">Fiestas y diversión PE</div> 
                    </div>                   
                    <div className="Card__Info">
                    En esta comunidad nos centramos en la recreación y las 
                    fiestas en los destinos más vibrantes de Perú. Únete a otros 
                    viajeros y turistas para descubrir la mejor vida nocturna y 
                    experiencias festivas en todo el país. ¡Ven y celebra con nosotros!
                    </div>
                </a>
            </div>
        <div className="Community__Card__Container">
                <a href="#" className="Community__Card">
                    <div className="Card__Title">
                        <img src={user6} alt="" className="Community__Img" />
                        <div className="Community__Name">Fotógrafos PE</div> 
                    </div>                   
                    <div className="Card__Info">
                    Únete a nuestra comunidad de apasionados por la fotografía 
                    en Perú y captura la belleza única de este país junto a otros 
                    talentosos fotógrafos. Comparte, aprende y explora las maravillas 
                    de Perú a través del lente. ¡Únete a la aventura fotográfica con nosotros!
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
}
export default CommunitiesMini;