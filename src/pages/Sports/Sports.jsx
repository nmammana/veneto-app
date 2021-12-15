import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout'
import './Sports.scss';
import '../../assets/icons/iconosVeneto-v1.0/style.scss';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { ReservationsContext } from '../../contexts/ReservationsContext';
import SportButton from '../../components/SportButton/SportButton';

export default function Sports() {
    const navigate  = useNavigate();
    const {reservation, setReservation, setFieldSelected} = useContext(ReservationsContext);

    const [typesOfField, setTypesOfField] = useState([
        {
            name: "Fútbol",
            field: "Cancha 1",
            icon: "ico ico-soccer",
            selected: false,
            type: "FOOTBALL",
        },{
            name: "Tenis",
            field: "Cancha 1",
            icon: "ico ico-tennis",
            selected: false,
            type: "TENNIS",
        },{
            name: "Paddle",
            field: "Cancha 1",
            icon: "ico ico-paddle",
            selected: false,
            type: "PADDLE_A",
        },{
            name: "Paddle",
            field: "Cancha 2",
            icon: "ico ico-paddle",
            selected: false,
            type: "PADDLE_B",
        },{
            name: "Bochas",
            field: "Cancha 1",
            icon: "ico ico-bowling",
            selected: false,
            type: "BOWLING_A",
        },{
            name: "Bochas",
            field: "Cancha 2",
            icon: "ico ico-bowling",
            selected: false,
            type: "BOWLING_B"
        },
    ])

    const selectField = (type) => {
        setReservation({...reservation, type: type.type});
        setFieldSelected(type);
        setTypesOfField(typesOfField.map(typeOfField => 
            type.type === typeOfField.type ?  
                {...typeOfField, selected : true}
            :
                {...typeOfField, selected : false}
        ));
    }
    
    const sportSubmit = () => {
        navigate("/schedule");
    }

    return (
        <Layout>
            <main className="sports-main">
                <div className="sports-main__wrapper">
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
                            
                            <h3 className="title heading2">Área Deportiva</h3>
                        </div>
                        
                        <div className="sports-container">
                            <div className="sports-wrapper">
                                {typesOfField.map((typeOfField, index) => (
                                    <SportButton key={index} typeOfField={typeOfField} selectField={selectField}/>
                                ))}
                            </div>  
                        </div> 

                        <button onClick={sportSubmit} disabled={!reservation.type} 
                                className="next-button continue-button">
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
