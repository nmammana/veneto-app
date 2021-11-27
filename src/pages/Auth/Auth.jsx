import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'

import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

import './Auth.scss';
import { ReservationsContext } from '../../contexts/ReservationsContext';

export default function Auth() {
    const navigate  = useNavigate();
    const {user, setUser} = useContext(ReservationsContext);
    const [pin, setPin] = useState("");

    const authSubmit = () => {
        //todo: verificar autenticación
        setUser({...user, pin: parseInt(pin)})
        navigate("/sports");
    }

    useEffect(() => {
        console.log('pin', pin);
        console.log('user', user);

    }, [user, pin]);

    const addDigit = (digit) => {
        if(pin.length<4){
            setPin(pin => `${pin}${digit}`)
            //No descartar esta funcion hasta haber comprobado que funciona bien autenticacion de la forma actual
            //setUser({...user, pin: `${parseInt(user.pin)}${digit}`})
        }
    }

    const clearAll = () => {
        //No descartar esta funcion hasta haber comprobado que funciona bien autenticacion de la forma actual
        //setUser({...user, pin:""});
        setPin("");
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
                                <button onClick={()=>clearAll()} className="button5 button2-font">Borrar</button>
                            </div>

                            <div className="pin-container">
                                
                                <div className="pin-screen">  
                                    <p className="pin pin-font">{pin}</p>             
                                </div>
                                
                                <button onClick={authSubmit} disabled={pin?.length !== 4} className="next-button continue-button">
                                    <span className="icon">
                                        <FaChevronRight/>
                                    </span>
                                </button>
                            </div>         
                        </div>  
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}

