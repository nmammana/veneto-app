import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Wings.scss';
import {FaChevronLeft} from 'react-icons/fa';

import { useNavigate } from "react-router-dom";
import { ReservationsContext } from '../../contexts/ReservationsContext';

export default function Wings() {
    const navigate  = useNavigate();
    const {user, setUser} = useContext(ReservationsContext);
    
    const handleClick = (wingNumber) => {
        setUser({...user, wing: wingNumber});
        navigate("/apartments");
    }

    return (
        <Layout>
            <main className="wings-main">
                <div className="wings-main__wrapper">
                    <div className="selection-container">
                        <div className="rectangle-container">
                            <div className="rectangle"></div>
                        </div>
                        <div className="heading-container">
                            <Link to="/towers" className="back-link">
                                <button className="back-button">
                                    <span className="icon">
                                        <FaChevronLeft/>
                                    </span>
                      
                                </button>
                            </Link>
                            
                            <h3 className="title heading2">Seleccione su Ala</h3>
                        </div>
                        <div className="buttons-container">
                            <button onClick={()=>handleClick(1)} className="button2 button-font column1">Ala 01</button>
                            <button onClick={()=>handleClick(2)} className="button2 button-font column2">Ala 02</button> 
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
