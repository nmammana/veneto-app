import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Schedule.scss';
import '../../assets/icons/iconosVeneto-v1.0/style.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import ScheduleTable from '../../Sections/ScheduleTable/ScheduleTable';
import MySchedule from '../../Sections/MySchedule/MySchedule';
import { ReservationsContext } from '../../contexts/ReservationsContext';

export default function Schedule() {
    const navigate  = useNavigate();
    const {reservation, setReservation} = useContext(ReservationsContext);
    const [isReserving, setIsReserving] = useState(true);

    const scheduleSubmit = () => {
        //todo: cargar horario en context 
        navigate("/reservation");
    }

    useEffect(() => {
        console.log('reservation.type',reservation.type)
    }, [reservation])

    /* const toggleIsReserving = () => {
        
    } */

    return (
        <Layout>
            <main className="schedule-main">
                <div className="schedule-main__wrapper">
                    <div className="selection-container">
                        <div className="rectangle-container">
                            <div className="rectangle"></div>
                        </div>
                        <div className="heading-container">
                            <Link to="/sports" className="back-link">
                                <button className="back-button">
                                    <span className="icon">
                                        <FaChevronLeft/>
                                    </span>
                                </button>
                            </Link>
                            
                            <div className="options">
                                <div onClick={() => setIsReserving(true)} className="option" style={{borderColor: isReserving ? '#969696' : 'transparent'}}>
                                    <h3 className="body1">Nuevo turno</h3>
                                </div>
                                <div onClick={() => setIsReserving(false)} className="option" style={{borderColor: isReserving ? 'transparent' : '#969696'}}>
                                    <h3 className="body1">Mis turnos</h3>
                                </div>
                            </div>
                            {/* <h3 className="title heading2">Turnos</h3> */}

                            <button className="sport-button2 sport-selected">
                                <span className="icon ico ico-soccer"></span>
                                <div className="description">
                                    <p className="sport sport-font3">Fútbol</p>
                                    <p className="field sport-font4">Cancha 1</p>    
                                </div>
                            </button>

                        </div>
                        
                        <div className="schedule-container">
                            {isReserving ? (
                                <ScheduleTable/>
                            ):(
                                <MySchedule/>
                            )}
                        </div> 
                        <div className="continue-container">
                            <button onClick={scheduleSubmit} className="next-button continue-button">
                                <span className="icon">
                                    <FaChevronRight/>
                                </span>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}
