import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Apartments.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { ReservationsContext } from '../../contexts/ReservationsContext';

export default function Apartments() {
    const navigate  = useNavigate();
    const {user, setUser} = useContext(ReservationsContext);
    const [showSelected, setShowSelected] = useState(false); 
    const [floors, setFloors] = useState([
        { floor: 0, isActive: false },
        { floor: 1, isActive: false },
        { floor: 2, isActive: false },
        { floor: 3, isActive: false },
    ])
    const [apartments, setApartments] = useState([
        { apartment:'A' ,isActive: false },
        { apartment:'B' ,isActive: false },
        { apartment:'C' ,isActive: false },
        { apartment:'D' ,isActive: false },
        { apartment:'E' ,isActive: false },
        { apartment:'F' ,isActive: false },
        { apartment:'G' ,isActive: false },
        { apartment:'H' ,isActive: false },
    ])
    const changeFloor = (floorNumber) => {
        setShowSelected(true);
        setUser({...user, floor: floorNumber});
        let updatedFloors = [];
        floors.forEach(floor => {
            if(floor.floor === floorNumber){
                updatedFloors.push({ floor: floorNumber, isActive: true })
            }else{
                updatedFloors.push({ floor: floor.floor, isActive: false })
            }
        })
        setFloors(updatedFloors);
    }

    const changeApartment = (apartmentSelected) => {
        setShowSelected(true);
        setUser({...user, apartment: apartmentSelected});
        let updatedApartments = [];
        apartments.forEach(apartment => {
            if(apartment.apartment === apartmentSelected){
                updatedApartments.push({ apartment: apartmentSelected, isActive: true })
            }else{
                updatedApartments.push({ apartment: apartment.apartment, isActive: false })
            }
        })
        setApartments(updatedApartments);
    }

    const submitApartment = () => {
        navigate("/auth");
    }

    useEffect(() => {
        console.log('user', user);
    }, [user]);

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
                            {floors.map((floor, index) => (
                                <button key={index} onClick={()=>changeFloor(floor.floor)}
                                        className={`button3 button2-font place${index}btn ${floor.isActive && `active`}`}>
                                    {floor.floor===0 ? (<p>PB</p>) : (<p>{floor.floor}°</p>)}
                                </button>
                            ))}
                            
                            <p className="body1 apartment-label">Dpto:</p>
                            {apartments.map((apartment,index) => (
                                <button key={index} onClick={()=>changeApartment(apartment.apartment)}
                                        className={`button3 button2-font place${ index<4 ? index : index-4 }btn ${apartment.isActive && `active`}`}>
                                    {apartment.apartment}
                                </button>
                            ))}
                                
                            <p className="body1 selection-label">Usted seleccionó:</p>
                            <button className="button-selected button4 button2-font place1btn selection-display"  disabled>
                                {showSelected ? (
                                    <p>{user.floor === 0 ? `PB` : `${user.floor}°`} {user.apartment}</p>
                                ) : (
                                    <p> </p>
                                )}
                            </button>
                        </div>
                        
                        <button onClick={submitApartment} disabled={!user.apartment} 
                                className="continue-button next-button ">
                            <span className="icon">
                                <FaChevronRight/>
                            </span>
                        </button>
                        
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}
