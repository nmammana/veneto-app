import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Schedule.scss';
import '../../assets/icons/iconosVeneto-v1.0/style.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import ScheduleTable from './ScheduleTable/ScheduleTable';

import { ReservationsContext } from '../../contexts/ReservationsContext';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

export default function Schedule() {
    const navigate  = useNavigate();
    const {reservation, setReservation, fieldSelected} = useContext(ReservationsContext);
    const hours = [ 
        "08:00", "08:30", "09:00", "09:30",
        "10:00", "10:30", "11:00", "11:30", 
        "12:00", "12:30", "13:00", "13:30", 
        "14:00", "14:30", "15:00", "15:30", 
        "16:00", "16:30", "17:00", "17:30", 
        "18:00", "18:30", "19:00", "19:30", 
        "20:00", "20:30", "21:00", "21:30", 
        "22:00", "22:30", "23:00", "23:30", 
        "00:00",];
    const [selectedHours, setSelectedHours] = useState([]); 
    const [busyHours, setBusyHours] = useState([]);
    const [notAvailableHours, setNotAvailableHours] = useState([]);
    
    const [firstSelection, setFirstSelection] = useState(true);
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const updateSchedule = (selectedHour) => {
        let hoursUpdated = [];
        if(firstSelection){
            hours.forEach(hour => {
                if(hour === selectedHour){
                    hoursUpdated.push(hour);
                }
            })
            setFirstSelection(false);
        }else{
            if(selectedHour === startTime){
                setStartTime("");
                hoursUpdated=[];
            }else{
                let selectIntermediateTimes = false;

                for(let i=0; i<hours.length; i++){
                    if(selectIntermediateTimes && busyHours.includes(hours[i])){
                        hoursUpdated=[];
                        selectIntermediateTimes= false;
                        break;
                    }else if(selectedHours.includes(hours[i])){
                        selectIntermediateTimes = true;
                        hoursUpdated.push(hours[i]);
                    }else if(selectIntermediateTimes && (hours[i] !== selectedHour)){
                        hoursUpdated.push(hours[i]);
                    }else if(hours[i] === selectedHour){
                        hoursUpdated.push(hours[i]);
                        selectIntermediateTimes = false;
                    }
                }
                if(hoursUpdated.length < 3){
                    hoursUpdated=[];
                    setStartTime("");
                    setEndTime("");
                    toast.warn('El tiempo mínimo de duración por reserva es de 1 hora.', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }else if(hoursUpdated.length > 5){
                    hoursUpdated=[];
                    setStartTime("");
                    setEndTime("");
                    toast.warn('El tiempo máximo de duración por reserva es de 2 horas.', {
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
           
            setFirstSelection(true);
            
        }
        setSelectedHours(hoursUpdated);

    }

    const selectSchedule = (selectedHour) => {  
        if(firstSelection){
            if(selectedHour !== "00:00"){
                setStartTime(selectedHour);
                updateSchedule(selectedHour);
            }
        }else{
            const startHourOnly = parseInt(startTime.split(":")[0]);
            const startMinuteOnly = parseInt(startTime.split(":")[1]);
            let selectedHourOnly = parseInt(selectedHour.split(":")[0]);
            let selectedMinuteOnly = parseInt(selectedHour.split(":")[1]);
            if(parseInt(selectedHour.split(":")[0]) < 6){
                selectedHourOnly = parseInt(selectedHour.split(":")[0]) + 24;
            }
            if(startHourOnly > selectedHourOnly){
                toast.warn('La hora de finalización no puede estar antes que la de inicio.', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }else if((startHourOnly === selectedHourOnly) && (startMinuteOnly > selectedMinuteOnly)){
                toast.warn('La hora de finalización no puede estar antes que la de inicio.', {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }else{
                setEndTime(selectedHour);
                updateSchedule(selectedHour);
            } 
        }
    }

    const scheduleSubmit = () => {
        setReservation({...reservation, hours: selectedHours});
        navigate("/reservation");
    }
    
    useEffect(() => {
        const hoursAll = [ 
            "08:00", "08:30", "09:00", "09:30",
            "10:00", "10:30", "11:00", "11:30", 
            "12:00", "12:30", "13:00", "13:30", 
            "14:00", "14:30", "15:00", "15:30", 
            "16:00", "16:30", "17:00", "17:30", 
            "18:00", "18:30", "19:00", "19:30", 
            "20:00", "20:30", "21:00", "21:30", 
            "22:00", "22:30", "23:00", "23:30", 
            "00:00",];

        const fetchBusyHours = async() => {
            const response = await axios.get(`http://${process.env.REACT_APP_API_URL}/reservation/reservated-hours?type=${reservation.type}`);
            setBusyHours(response.data);

            let notAvailableHoursArr = [];
            for(let i=0; i<hoursAll.length; i++){
                if(firstSelection){
                    if(response.data.includes(hoursAll[i]) && !response.data.includes(hoursAll[i-1])){
                        notAvailableHoursArr.push(hoursAll[i-1]);
                    }
                }else{
                    if(response.data.includes(hoursAll[i]) && !response.data.includes(hoursAll[i+1])){
                        notAvailableHoursArr.push(hoursAll[i+1]);
                    } 
                } 
            }
            setNotAvailableHours(notAvailableHoursArr);
        }
        fetchBusyHours();
        
    }, [firstSelection, reservation.type]);

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
                            
                            <h3 className="title heading2">Seleccione su turno</h3>

                            {fieldSelected.type &&
                                <button className="sport-button2 sport-selected">
                                    <span className={`icon ${fieldSelected.icon}`}></span>
                                    <div className="description">
                                        <p className="sport sport-font3">{fieldSelected.name}</p>
                                        <p className="field sport-font4">{fieldSelected.field}</p>    
                                    </div>
                                </button>
                            }
                        </div>
                        
                        <div className="schedule-container">
                            <ScheduleTable  selectSchedule={selectSchedule} 
                                            firstSelection={firstSelection}
                                            startTime={startTime}
                                            endTime={endTime}
                                            selectedHours={selectedHours}
                                            busyHours={busyHours}
                                            notAvailableHours={notAvailableHours}
                                            hours={hours}/>
                        </div> 

                        <button onClick={scheduleSubmit} disabled={selectedHours?.length<=1} className="continue-button next-button">
                            <span className="icon">
                                <FaChevronRight/>
                            </span>
                        </button>

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
