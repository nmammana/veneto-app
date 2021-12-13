import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import './Auth.scss';
import { ReservationsContext } from '../../contexts/ReservationsContext';

import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";



export default function Auth() {
    const navigate  = useNavigate();
    const {user, setUser, reservation, setReservation} = useContext(ReservationsContext);
    const [pin, setPin] = useState("");

    const authSubmit = async () => {
        try {
            let res = await axios.post(`http://${process.env.REACT_APP_API_URL}/auth/`, {
                pin: user.pin,
                tower: user.tower,
                floor: user.floor,
                apartment: user.apartment,
                wing: user.wing,
            });
            let data = res.data;
            if(data._id){
                setUser({
                    pin: data.pin,
                    tower: data.tower,
                    floor: data.floor,
                    apartment: data.apartment,
                    wing: data.wing,
                    userId: data._id,
                    name: data.name,
                    identityNumber: data.identityNumber,
                })
                setReservation({...reservation, user: data._id})
                navigate("/home");
            }
        }catch(e){
            console.error("LOGIN ERROR: ", e)
            toast.error("Error: Usuario no encontrado", {
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

    const addDigit = (digit) => {
        if(pin.length<4){
            if(pin.length === 3){
                setUser({...user, pin: parseInt(`${pin}${digit}`)});
                setPin(pin => `${pin}${digit}`);
            }else{
                setPin(pin => `${pin}${digit}`);
            }
        }
    }

    const clear = () => {
        setPin(pin => pin.substring(0, pin.length-1));
    }

    return (
        <Layout>
            <main className="auth-main">
                <div className="auth-main__wrapper">
                    <div className="selection-container">
                        <div className="rectangle-container">
                            <div className="rectangle"></div>
                        </div>
                        <div className="heading-container">
                            <Link to="/apartments" className="back-link">
                                <button className="back-button">
                                    <span className="icon">
                                        <FaChevronLeft/>
                                    </span>
                                </button>
                            </Link>
                            
                            <h3 className="title heading2">Ingrese su PIN</h3>
                        </div>

                        <div className="auth-content">
                            <div className="keyboard">
                                <button onClick={() => addDigit("1")} className="button5 button2-font">1</button>
                                <button onClick={() => addDigit("2")} className="button5 button2-font">2</button>
                                <button onClick={() => addDigit("3")} className="button5 button2-font">3</button>
                                <button onClick={() => addDigit("4")} className="button5 button2-font">4</button>
                                <button onClick={() => addDigit("5")} className="button5 button2-font">5</button>
                                <button onClick={() => addDigit("6")} className="button5 button2-font">6</button>
                                <button onClick={() => addDigit("7")} className="button5 button2-font">7</button>
                                <button onClick={() => addDigit("8")} className="button5 button2-font">8</button>
                                <button onClick={() => addDigit("9")} className="button5 button2-font">9</button>
                                <button onClick={() => addDigit("0")} className="button5 button2-font">0</button>
                                <button onClick={()=>clear()} className="button5 button2-font">Borrar</button>
                            </div>

                            <div className="pin-screen">  
                                <p className="pin pin-font">{pin}</p>             
                            </div>                                
      
                        </div>  
                        
                        
                        <button onClick={authSubmit} id="animate.css" disabled={pin?.length !== 4} className="next-button continue-button">
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

