import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Home.scss';
import {FaChevronLeft} from 'react-icons/fa';

import { useNavigate } from "react-router-dom";
import { ReservationsContext } from '../../contexts/ReservationsContext';

export default function Home() {
    const navigate  = useNavigate();
    const {setUserId, setAuth} = useContext(ReservationsContext);
    
    const logout = () => {
        setUserId("");
        navigate('/auth');
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setUserId("");
            navigate('/');
        }, 150000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <Layout>
            <main className="home-main">
                <div className="home-main__wrapper">
                    <div className="selection-container">
                        <div className="rectangle-container">
                            <div className="rectangle"></div>
                        </div>
                        <div className="heading-container">
                            {/* <Link to="/auth" className="back-link"> */}
                                <button className="back-button" onClick={logout}>
                                    <span className="icon">
                                        <FaChevronLeft/>
                                    </span>
                      
                                </button>
                            {/* </Link> */}
                            
                            <h3 className="title heading2">Menú</h3>
                        </div>
                        <div className="buttons-container">
                            <Link className="link" to="/sports">
                                <button className="button6 button-font">Nueva Reserva</button>
                            </Link>
                            <Link className="link" to="/myReservations">
                                <button  className="button6 button-font">Mis Reservas</button> 
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
