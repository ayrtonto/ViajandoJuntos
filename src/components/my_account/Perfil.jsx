import React  from 'react'
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import './Perfil.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap'
import {useState} from 'react'

import userpfp from '../../images/users/user.jpg'

const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: green[600],
      '&:hover': {
        backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: green[600],
    },
}));

const label = { inputProps: { 'aria-label': 'On/Off' } };

function Perfil() {
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

    return (
      <div className="main_containerE">
          <div className="myprofileE">Mi Perfil</div>
          <div className="profile_containerE">
              <div className="bar_containerE">
                  <div className="profileE">
                  <img src={userpfp} alt="" className="pfp_P" />
                    <p className="realnameP">{form.name}</p>
                    <p className="usernameP">{form.username}</p>
                    <p className="user_emailP">{form.email}</p>
                    
                    <Modal isOpen={modalActualizar}>
                        <ModalHeader>
                            <div><h3>Editar usuario</h3></div>
                        </ModalHeader>

                        <ModalBody>
                            <FormGroup>
                            <label>
                                Nombre:
                            </label>
                            <input
                                className="form-control"
                                name="name"
                                type="text"
                                onChange={handleChange}
                                value={form.name}
                            />
                            </FormGroup>

                            <FormGroup>
                            <label>
                                Nombre de usuario:
                            </label>
                            <input
                                className="form-control"
                                name="username"
                                type="text"
                                onChange={handleChange}
                                value={form.username}
                            />
                            </FormGroup>

                            <FormGroup>
                            <label>
                                Email:
                            </label>
                            <input
                                className="form-control"
                                name="email"
                                type="text"
                                onChange={handleChange}
                                value={form.email}
                            />
                            </FormGroup>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" onClick={() => editar(form)}>
                            Editar
                            </Button>
                            <Button color="danger" onClick={cerrarModalActualizar}>
                            Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>
                
                  </div>
                  <div className="action_barE">
                      <p className="current_linkE">Perfil</p>
                      <p className="linkE"><Link to="/my-account/travels" className="stlink">Viajes</Link></p>
                      <p className="linkE"><Link to="/my-account/posts" className="stlink">Publicaciones</Link></p>
                      <p className="linkE"><Link to="/my-account/albums" className="stlink">Álbumes</Link></p>
                      <p className="linkE"><Link to= "/my-account/trips" className='stlink'>Boletos</Link></p>
                  </div>
              </div>
              <div className='settings_gridE'>
                <div className='settingsE'>
                    <div className="datosE">Datos Personales</div>
                        <div class="row">
                            <p className='categoriasE'>Nombres y Apellidos:</p>
                            <p className='bioE'>{form.name}</p>
                        </div>
                        <div class="row">
                            <p className='categoriasE'>Telefonos:</p>
                            <p className='bioE'>(51) 999 882 213</p>
                        </div>
                        <div class="row">
                            <p className='categoriasE'>DNI:</p>
                            <p className='bioE'>00138248</p>
                        </div>
                        <div class="rowbtn">
                        <Button className="editar_btn" style={{ fontFamily: 'Poppins' }} onClick={() => mostrarModalActualizar(form)}>Editar perfil</Button>
                        </div>
                    </div>
                <div className='settingsE'>
                    <div className="datosE">Notificaciones</div>
                        <p className='categoriasE'>Descuentos y Ofertas:</p>
                        <GreenSwitch {...label}/>
                        <p className='categoriasE'>Foros:</p>
                        <GreenSwitch {...label}/>
                        <p className='categoriasE'>Seguidores:</p>
                        <GreenSwitch {...label}/>
                </div>
                <div className='settingsE'>
                    <div className="datosE">Privacidad</div>
                        <p className='categoriasE'>Cuenta Privada:</p>
                        <GreenSwitch {...label}/>
                </div>
                <div className='settingsE'>
                    <div className="datosE">Redes Sociales Vinculadas: </div>
                        <p className='categoriasF'>No cuenta con redes sociales vinculadas</p>
                        
                </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Perfil