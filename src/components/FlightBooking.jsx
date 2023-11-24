import React from 'react'

import Button from '@mui/material/Button';
import Luggage from '../images/icons/Luggage.png'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { TextField, FormLabel,FormControl,Radio,RadioGroup, FormControlLabel} from "@mui/material";
import './FlightBooking.css'



function Register() {
    return (
      <div className="main_container">
          <div className="myprofile">Reserva tu proximo vuelo</div>
          <div className="profile_container">
              <div className="bar_container">
                  <div className="profile">
                      <p className="realname">
                      <FormControl>
                        <FormLabel id="tipo_viaje"></FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="group_radiogroup"
                            defaultValue="Ida"
                            name="tipo_viaje_RadioGroup"
                        >
                        <FormControlLabel value="IdayVuelta" control={<Radio />} label="Ida y Vuelta" />
                        <FormControlLabel value="Ida" control={<Radio />} label="Solo Ida" />
                        </RadioGroup>
                        </FormControl>
                      </p>
                      <p className="username">
                      <TextField
                        id="origen"
                        label="Origen"
                        defaultValue="Lima, Peru"
                        type="search"
                        margin="normal"/>
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
                        <div>
                          <div className="Airline">
                            American Airlines
                          </div>
                        </div>
                        <div className="departDetails"> 23:45</div>
                        <div className="flightScales"> 2 escalas </div>
                        <div className="departDetails2"> 18:50 </div>
                        <div className="flightScales2"> 23h 50m </div>
                        <img src={Luggage} alt="" className="icons" />
                        <div className="priceU_flight"> US$</div>
                        <div className="price_flight">  1,199</div>
                        <div className='comprar'></div>
                      </div>
                      <div className='comprar'>
                      <Button variant="contained" color="success">Comprar</Button>
                      </div>
                  </div>
                  <div className="post">
                  <div className="post_description">
                        <div>
                          <div className="Airline">
                            Latam-Finair
                          </div>
                        </div>
                        <div className="departDetails"> 20:45</div>
                        <div className="flightScales"> 2 escalas </div>
                        <div className="departDetails2"> 19:00 </div>
                        <div className="flightScales2"> 32h 15m </div>
                        <img src={Luggage} alt="" className="icons" />
                        <div className="priceU_flight"> US$</div>
                        <div className="price_flight">  1,139</div>
                        <div className='comprar'></div>
                      </div>
                      <div className='comprar'>
                      <Button variant="contained" color="success">Comprar</Button>
                      </div>
                  </div>
                  <div className="post">
                      <div className="post_description">
                      <div>
                          <div className="Airline">
                            United Airlines-All Nippon Airways
                          </div>
                        </div>
                        <div className="departDetails"> 23:45</div>
                        <div className="flightScales"> 2 escalas </div>
                        <div className="departDetails2"> 18:50 </div>
                        <div className="flightScales2"> 23h 50m </div>
                        <img src={Luggage} alt="" className="icons" />
                        <div className="priceU_flight"> US$</div>
                        <div className="price_flight">  1,199</div>
                        <div className='comprar'></div>
                      </div>
                      <div className='comprar'>
                      <Button variant="contained" color="success">Comprar</Button>
                      </div>
                  </div>
                  <div className="post">
                      <div className="post_description">
                      <div>
                          <div className="Airline">
                            Delta Airlines-Japan Airlines
                          </div>
                        </div>
                        <div className="departDetails"> 23:55</div>
                        <div className="flightScales"> 2 escalas </div>
                        <div className="departDetails2"> 22:15 </div>
                        <div className="flightScales2"> 23h 15m </div>
                        <img src={Luggage} alt="" className="icons" />
                        <div className="priceU_flight"> US$</div>
                        <div className="price_flight">  1,899</div>
                        <div className='comprar'></div>
                      </div>
                      <div className='comprar'>
                      <Button variant="contained" color="success">Comprar</Button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }


export default Register;