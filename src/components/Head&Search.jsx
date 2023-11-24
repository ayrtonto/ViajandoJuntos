import React from "react";
import './Head&Search.css'

import background from '../images/Background.jpg'

import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


function HeadAndSearch() {
return (
    <div className = "container">
        <div className="image">
            <img className="background" alt="Background" src={background}/>
        </div>
        <div className="box">
            <div className="hero-title">
                <p className="text-wrapper">¡Explora el mundo acompañado!</p>
                <p className="lorem-ipsum-dolor">
                Encuentra a miles de turistas y viajeros que, como tú, disfrutan 
                cada destino y recopilan todas sus experiencias. Vive cada una de ellas mediante sus 
                historias, reseñas y posteos, y encuentra una comunidad a tu medida, porque viajar 
                es más divertido si lo haces con nuevos amigos.
                </p>
            </div>
        </div>
        <div className="hero-search">
            <div className="group">
                <div className="div">
                    <div className="frame">
                    <input className="text1" type="text" placeholder="📍 City or Destination" />
                    {/* <div className="text1">📍 City or Destination</div> */}
                    </div>
                    <div className="div-wrapper">
                        <p className="link">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateRangePicker']}>
                                    <DateRangePicker className="customDatePicker" localeText={{ start: 'Fecha de Viaje', end: 'Fecha de Regreso' }} />
                                </DemoContainer>
                            </LocalizationProvider>
                        </p>
                        {/* <div className="text2">Date of stay</div> */}
                    </div>
                    <div className="frame-2">
                    <input className="text1" type="text" placeholder="Personas" />
                    </div>
                </div>
                <div className="group-wrapper">
                    <div className="group-2">
                        <span className="search_icon">🔍</span>
                    <div className="text3">Find Trip Now</div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
);
}
export default HeadAndSearch;