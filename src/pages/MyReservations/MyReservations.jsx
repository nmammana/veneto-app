import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './MyReservations.scss';

import {FaChevronLeft } from 'react-icons/fa';

import MySchedule from './MySchedule/MySchedule';
import { ReservationsContext } from '../../contexts/ReservationsContext';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

export default function MyReservations() {
    const {user} = useContext(ReservationsContext);
    const [myReservations, setMyReservations] = useState([])
    const today = new Date;

    useEffect(() => {
        const fetchReservationsByUser = async () => {
            const response = await axios.get(`http://${process.env.REACT_APP_API_URL}/reservation/by-user/?user=${user.userId}`);
            if(response.data){
                let reservationsArray = [];
                
                response.data.forEach(dataBlock => {
                    let reservationObj = {
                        id: "",
                        name: "",
                        field: "",
                        hours: ""
                    }
                    if(dataBlock.date === `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`){
                        reservationObj.id = dataBlock._id;

                        if(dataBlock.type.split('_')[0] === 'FOOTBALL'){
                            reservationObj.name = "Fútbol";
                        }else if(dataBlock.type.split('_')[0] === 'TENNIS'){
                            reservationObj.name = "Tenis";
                        }else if(dataBlock.type.split('_')[0] === 'PADDLE'){
                            reservationObj.name = "Paddle";
                        }else if(dataBlock.type.split('_')[0] === 'BOWLING'){
                            reservationObj.name = "Bochas";
                        }

                        if(dataBlock.type.split('_')[1] === 'A'){
                            reservationObj.field = "1";
                        }else if(dataBlock.type.split('_')[1] === 'B'){
                            reservationObj.field = "2";
                        }else{
                            reservationObj.field = "1";
                        }
                        reservationObj.hours = `${dataBlock.hours[0]} a ${dataBlock.hours[dataBlock.hours.length-1]}`;
                        reservationsArray.push(reservationObj);
                    }    
                })
                setMyReservations(reservationsArray);
            }
        }
        if(user.userId){
            fetchReservationsByUser();
        }
        
    }, [])

    const deleteReservation = async (reservationId) => {
        try {
            let response = await axios.post(`http://${process.env.REACT_APP_API_URL}/reservation/cancel/${reservationId}`);
            let data = response.data;
            console.log(data);
            //todo: mostrar mensaje de reserva eliminada correctamente??
            if(data){
                let reservationsUpdated = [];
                myReservations.forEach(reservation => {
                    if(reservation.id !== reservationId){
                        reservationsUpdated.push(reservation);
                    }
                })
                setMyReservations(reservationsUpdated);
                toast.success('Reserva cancelada con éxito!', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            }
        }catch(e){
            console.error("RESERVATION ERROR: ", e)
            //todo: mostrar modal de error en reserva
        }
    }

    return (
        <Layout>
            <main className="myschedule-main">
                <div className="myschedule-main__wrapper">
                    <div className="selection-container">
                        <div className="rectangle-container">
                            <div className="rectangle"></div>
                        </div>
                        <div className="heading-container">
                            <Link to="/home" className="back-link">
                                <button className="back-button">
                                    <span className="icon">
                                        <FaChevronLeft/>
                                    </span>
                                </button>
                            </Link>
                            
                            <h3 className="title heading2">Mis Reservas</h3>

                        </div>
                        
                        <div className="myschedule-container">
                            {myReservations?.length !== 0 ? (
                                <MySchedule 
                                myReservations={myReservations} 
                                deleteReservation={deleteReservation}/>
                            ):(
                                <div className="message-container">
                                    <p className="body2 message">Aún no tenés reservas 🤨</p>
                                </div>
                                
                            )}
                                   
                        </div> 
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
            </main>
        </Layout>
    )
}
