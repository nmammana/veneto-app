import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import { useNavigate } from "react-router-dom";

import './Towers.scss';
import { ReservationsContext } from '../../contexts/ReservationsContext';

export default function Towers() {
    const {user, setUser} = useContext(ReservationsContext)

    const navigate  = useNavigate();

    const handleClick = (towerNumber) => {
        setUser({...user, tower: towerNumber});
        navigate("/wings");
    }

    return (
        <Layout>
            <main className="towers-main">
                <div className="towers-main__wrapper">
                    <div className="selection-container">
                        <div className="rectangle-container">
                            <div className="rectangle"></div>
                        </div>
                        
                        <h3 className="title heading2">Seleccione su Torre</h3>
                        <div className="buttons-container">
                            <button onClick={()=>handleClick(1)} className="button2 button-font column1">Torre 01</button>
                            <button onClick={()=>handleClick(2)} className="button2 button-font column2">Torre 02</button>
                            <button onClick={()=>handleClick(3)} className="button2 button-font column1">Torre 03</button>
                            <button onClick={()=>handleClick(4)} className="button2 button-font column2">Torre 04</button>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

