import React from "react";
import './Footer.css'

function Footer() {
    return (
        <div className="box">
            <footer className="footer">
                <div className="group">
                    <img className="img" alt="Group" src="group-49.png" />
                    <div className="div">
                        <div className="group-2">
                            <div className="frame-wrapper">
                                <div className="frame">
                                    <p className="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                                        lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
                                        leo, vel
                                    </p>
                                </div>
                            </div>
                            <div className="logo-wrapper">
                                {/* Reemplazar el componente Logo con texto */}
                                <span className="logo">ViajandoJuntos.</span>
                            </div>
                        </div>
                        <div className="overlap-group">
                            <div className="group-3">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-2">Anexos</div>
                                </div>
                                <div className="group-4">
                                    {/* Reemplazar componentes Link con texto */}
                                    <span className="link">Descubre</span>
                                    <span className="link-2">Descuentos especiales</span>
                                    <span className="link-3">Servicios</span>
                                    <span className="link-4">Comunidad</span>
                                    <span className="link-5">About Us</span>
                                </div>
                            </div>
                            <div className="group-5">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-2">Servicios</div>
                                </div>
                                <div className="group-6">
                                    {/* Reemplazar componentes Link con texto */}
                                    <span className="link">Sobre nostors</span>
                                    <span className="link-2">Blog &amp; Articulos</span>
                                    <span className="link-3">Terminos y Condiciones</span>
                                    <span className="link-4">Politica</span>
                                    <span className="link-5">Contactanos</span>
                                </div>
                            </div>
                        </div>
                        <div className="group-7">
                            <div className="div-wrapper">
                                <div className="text-wrapper-2">Contacto</div>
                            </div>
                            <div className="group-8">
                                {/* Reemplazar componentes Link con texto */}
                                <span className="link">Direccion</span>
                                <span className="link-2">Lorem ipsum</span>
                                <span className="link-3">Telefono: 123 456 7890</span>
                                <span className="link-4">Email: UPC@gmail.com</span>
                                <span className="link-5">Maps: Lorem Ipsum</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
