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
        { apartment:'' ,isActive: false },
        { apartment:'' ,isActive: false },
        { apartment:'' ,isActive: false },
        { apartment:'' ,isActive: false },
        { apartment:'' ,isActive: false },
        { apartment:'' ,isActive: false },
        { apartment:'' ,isActive: false },
        { apartment:'' ,isActive: false },
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
        const apartmentsWing1 = ["A","B","C","D","E","F","G","H"];
        const apartmentsWing2 = ["I","J","K","L","M","N","O","P"];
        if(user.wing === 1){
            let apartments1 = [];
            for(let i=0; i<apartments.length; i++){
                apartments1.push({ apartment: apartmentsWing1[i] ,isActive: false })
            }
            setApartments(apartments1);
        }else{
            let apartments2 = [];
            for(let i=0; i<apartments.length; i++){
                apartments2.push({ apartment: apartmentsWing2[i] ,isActive: false })
            }
            setApartments(apartments2);
        }
    }, [user.wing, apartments.length]);

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
