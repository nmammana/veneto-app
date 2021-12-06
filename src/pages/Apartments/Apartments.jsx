import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Apartments.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { ReservationsContext } from '../../contexts/ReservationsContext';

export default function Apartments() {
    const navigate  = useNavigate();
    const {auth, setAuth} = useContext(ReservationsContext);
    const [showSelected, setShowSelected] = useState(false); 
    
    const changeFloor = (floorNumber) => {
        setShowSelected(true);
        setAuth({...auth, floor: floorNumber});
    }

    const changeApartment = (apartment) => {
        setShowSelected(true);
        setAuth({...auth, apartment: apartment});
    }

    const submitApartment = () => {
        navigate("/auth");
    }

    useEffect(() => {
        console.log('auth', auth);
    }, [auth]);

    return (
        <Layout>
            <main className="apartments-main">
                <div className="apartments-main__wrapper">
                    <div className="selection-container">
                        <div className="rectangle-container">
                            <div className="rectangle"></div>
                        </div>
                        <div className="heading-container">
                            <Link to="/wings" className="back-link">
                                <button className="back-button">
                                    <span className="icon">
                                        <FaChevronLeft/>
                                    </span>
                                </button>
                            </Link>
                            
                            <h3 className="title heading2">Seleccione su Departamento</h3>
                        </div>
                        
                        <div className="buttons-container">
                            <p className="body1 floor-label">Piso:</p>
                            <button onClick={()=>changeFloor(0)} className="button3 button2-font place1btn">PB</button>
                            <button onClick={()=>changeFloor(1)} className="button3 button2-font place2btn">1°</button>
                            <button onClick={()=>changeFloor(2)} className="button3 button2-font place3btn">2°</button>
                            <button onClick={()=>changeFloor(3)} className="button3 button2-font place4btn">3°</button>
                            
                            <p className="body1 apartment-label">Dpto:</p>
                            <button onClick={()=>changeApartment("A")} className="button3 button2-font place1btn">A</button>
                            <button onClick={()=>changeApartment("B")} className="button3 button2-font place2btn">B</button>
                            <button onClick={()=>changeApartment("C")} className="button3 button2-font place3btn">C</button>
                            <button onClick={()=>changeApartment("D")} className="button3 button2-font place4btn">D</button>
                            <button onClick={()=>changeApartment("E")} className="button3 button2-font place1btn">E</button>
                            <button onClick={()=>changeApartment("F")} className="button3 button2-font place2btn">F</button>
                            <button onClick={()=>changeApartment("G")} className="button3 button2-font place3btn">G</button>
                            <button onClick={()=>changeApartment("H")} className="button3 button2-font place4btn">H</button>
                                
                            <p className="body1 selection-label">Usted seleccionó:</p>
                             
                            <button className="button-selected button4 button2-font place2btn" disabled>
                                {showSelected ? (
                                    <p>{auth.floor === 0 ? `PB` : `${auth.floor}°`} {auth.apartment}</p>
                                ) : (
                                    <p> </p>
                                )}
                            </button>
                            
                            <button onClick={submitApartment} disabled={!auth.apartment} 
                                    className="next-button continue-button">
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
