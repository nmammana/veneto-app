import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Reservation.scss';
import '../../assets/icons/iconosVeneto-v1.0/style.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function Reservation() {
    const navigate  = useNavigate();

    

    return (
        <Layout>
            <main className="reservation-main">
                <div className="reservation-main__wrapper">
                    <div className="selection-container">
                        <div className="rectangle-container">
                            <div className="rectangle"></div>
                        </div>
                        <div className="heading-container">
                            <Link to="/schedule" className="back-link">
                                <button className="back-button">
                                    <span className="icon">
                                        <FaChevronLeft/>
                                    </span>
                                </button>
                            </Link>
                            
                            <h3 className="title heading2">Su Reserva</h3>
                        </div>
                        
                        <div className="reservation-container">
                            <div className="reservation-details">
                                <div className="item">
                                    <p className="body2 category">Área Deportiva</p>
                                    <p className="button-font value">Fútbol</p>
                                </div>
                                <div className="item">
                                    <p className="body2 category">Cancha</p>
                                    <p className="button-font value">1</p>
                                </div>
                                <div className="item">
                                    <p className="body2 category">Turno</p>
                                    <p className="button-font value">18:00 a 19:30hs</p>
                                </div>
                            </div>

                            <div className="user-details">
                                <table>
                                    <tr>
                                        <td className="category body2">Departamento:</td>
                                        <td className="value body3">Torre 1, Ala 1, 3°H</td>
                                    </tr>
                                    <tr>
                                        <td className="category body2">Propietario:</td>
                                        <td className="value body3 name">Nombre del propietario</td>
                                    </tr>
                                </table>
                            </div>

                            <button className="button1 button-font">Confirmar</button>
                        </div> 
                        
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}
