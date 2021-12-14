import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Reservation.scss';
import '../../assets/icons/iconosVeneto-v1.0/style.scss';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { ReservationsContext } from '../../contexts/ReservationsContext';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


export default function Reservation() {
    const navigate  = useNavigate();
    const {reservation, user, fieldSelected} = useContext(ReservationsContext);

    useEffect(() => {
        console.log('reservation',reservation)
    }, [reservation])

    const submitReservation = async () => {
        try {
            let response = await axios.post(`http://${process.env.REACT_APP_API_URL}/reservation`, reservation);
            let data = response.data;
            //todo: mostrar mensaje de reserva guardada correctamente, al dar OK direccionar a  "/"
            if(data){
               navigate("/success");
            }
            
        }catch(e){
            console.error("RESERVATION ERROR: ", e)
            toast.error("Error: Por favor comience de nuevo su reserva", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });    
        }
    }

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
                            {fieldSelected.type &&
                                <div className="reservation-details">
                                    <div className="item">
                                        <p className="body2 category">Área Deportiva</p>
                                        <p className="button-font value">{fieldSelected.name}</p>
                                    </div>
                                    <div className="item">
                                        <p className="body2 category">Cancha</p>
                                        <p className="button-font value">{fieldSelected.field.split(" ")[1]}</p>
                                    </div>
                                    <div className="item">
                                        <p className="body2 category">Turno</p>
                                        <p className="button-font value">{reservation.hours[0]} a {reservation.hours[reservation.hours.length-1]}</p>
                                    </div>
                                </div>
                            }

                            <div className="user-details">
                                <table>
                                    {user.apartment &&
                                        <tbody>
                                            <tr>
                                                <td className="category body2">Departamento:</td>
                                                <td className="value body3">Torre {user.tower}, Ala {user.wing}, {user.floor}°{user.apartment}</td>
                                            </tr>
                                            <tr>
                                                <td className="category body2">Propietario:</td>
                                                <td className="value body3 name">{user.identityNumber ? user.name : "Inquilino"}</td>
                                            </tr>
                                        </tbody>
                                    }
                                </table>
                            </div>

                            <button className="button1 button-font" onClick={submitReservation}>Confirmar</button>
                            <ToastContainer
                                position="bottom-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"  
                                />
                        </div> 
                        
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}
