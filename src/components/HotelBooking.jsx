import React from 'react'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import Fauchon from '../images/hotels/FauchonHotel.png';
import Kyoto from '../images/hotels/KyotoTokyu.png';
import Nishijin from '../images/hotels/Nishijin.png';
import Resi from '../images/hotels/ResiStay.png';

import Carpool from '../images/icons/Carpool.png';
import Dumbbell from '../images/icons/Dumbbell.png';
import Flower from '../images/icons/Spa Flower.png';
import Wifi from '../images/icons/Wi-Fi.png';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TextField} from "@mui/material";
import './HotelBooking.css'



function HotelBooking() {
    return (
      <div className="main_container">
          <div className="myprofile">Reserva tu proximo alojamiento</div>
          <div className="profile_container">
              <div className="bar_container">
                  <div className="profile">
                      <p className="realname">
                      </p>
                      <p className="user_email">
                      <TextField
                        id="destino"
                        label="Destino"
                        type="search"
                        variant="outlined"
                        defaultValue="Kyoto, Japon"
                        margin="normal"/>
                      </p>
                      <p className="link">                      
                      <TextField
                        id="tipo-ticket"
                        label="Pasajeros y clase"
                        type="search"
                        variant="outlined"
                        defaultValue="1 persona, economia"
                        margin="normal"/>
                        </p>
                      <p className="link">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateRangePicker']}>
                            <DateRangePicker localeText={{ start: 'Fecha de Viaje', end: 'Fecha de Regreso' }} />
                        </DemoContainer>
                      </LocalizationProvider>
                      </p>
                  </div>
                  <div className="action_bar">
                      <p className="current_link"></p>
                      <p className="link"></p>
                  </div>
              </div>
              <div className="posts_grid">
                  <div className="post">
                      <div className="post_description">
                      <img src={Nishijin} alt="" className="img_hotel" resizeMode="contain" />
                        <div>
                          <div className="hotel_nombre">
                            Nishijin Fujita
                            <p className="hotelDetails"> Kyoto. A 8,79 km de Kyoto-city</p>
                            <Rating name="size-small" defaultValue={5} size="small"  readOnly/>
                            <div><img src={Wifi} alt="" className="icons_H" />
                            <img src={Carpool} alt="" className="icons_H" />
                            <img src={Dumbbell} alt="" className="icons_H" />
                            <img src={Flower} alt="" className="icons_H" />
                            </div>
                          </div>
                        </div>
                        <div className="priceU"> US$</div>
                        <div className="price">  10,789</div>
                        <div className='comprar'></div>
                      </div>
                      <div className='comprar'>
                      <Button variant="contained" color="success">Reservar</Button>
                      </div>
                  </div>
                  <div className="post">
                  <div className="post_description">
                        <img src={Resi} alt="" className="img_hotel" />
                        <div>
                          <div className="hotel_nombre">
                          RESI STAY Shinshinen
                            <p className="hotelDetails"> Kyoto. A 8,96 km de Kyoto-city</p>
                            <Rating name="size-small" defaultValue={4} size="small"  readOnly/>
                            <div><img src={Wifi} alt="" className="icons_H" />
                            <img src={Carpool} alt="" className="icons_H" />
                            <img src={Dumbbell} alt="" className="icons_H" />
                            <img src={Flower} alt="" className="icons_H" />
                            </div>
                          </div>
                        </div>
                        <div className="priceU"> US$</div>
                        <div className="price">  16,330</div>
                        <div className='comprar'></div>
                      </div>
                      <div className='comprar'>
                      <Button variant="contained" color="success">Reservar</Button>
                      </div>
                  </div>
                  <div className="post">
                      <div className="post_description">
                      <img src={Kyoto} alt="" className="img_hotel" />
                      <div>
                          <div className="hotel_nombre">
                          Kyoto Tokyu Hotel
                            <p className="hotelDetails"> Kyoto. A 7,9 km de Kyoto-city</p>
                            <Rating name="size-small" defaultValue={4} size="small"  readOnly/>
                            <div><img src={Wifi} alt="" className="icons_H" />
                            <img src={Carpool} alt="" className="icons_H" />
                            <img src={Dumbbell} alt="" className="icons_H" />
                            <img src={Flower} alt="" className="icons_H" />
                            </div>
                          </div>
                        </div>
                        <div className="priceU"> US$</div>
                        <div className="price">  3,927</div>
                        <div className='comprar'></div>
                      </div>
                      <div className='comprar'>
                      <Button variant="contained" color="success">Reservar</Button>
                      </div>
                  </div>
                  <div className="post">
                      <div className="post_description">
                      <img src={Fauchon} alt="" className="img_hotel" />
                      <div>
                          <div className="hotel_nombre">
                          Fauchon Hotel Kyoto
                            <p className="hotelDetails"> Kyoto. A 6,99 km de Kyoto-city</p>
                            <Rating name="size-small" defaultValue={5} size="small"  readOnly/>
                            <div><img src={Wifi} alt="" className="icons_H" />
                            <img src={Carpool} alt="" className="icons_H" />
                            <img src={Dumbbell} alt="" className="icons_H" />
                            <img src={Flower} alt="" className="icons_H" />
                            </div>
                          </div>
                        </div>
                        <div className="priceU"> US$</div>
                        <div className="price">  10,789</div>
                        <div className='comprar'></div>
                      </div>
                      <div className='comprar'>
                      <Button variant="contained" color="success">Reservar</Button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }


export default HotelBooking;