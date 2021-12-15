import React, { useContext, useRef } from 'react'
import IdleTimer from 'react-idle-timer';
import { useNavigate } from 'react-router';
import { ReservationsContext } from '../contexts/ReservationsContext';
export default function IdleTimerContainer({children}) {
    const idleTimerRef = useRef(null)
    const {setUser} = useContext(ReservationsContext);
    const navigate  = useNavigate();

    const onIdle = () => {
        setUser({
            pin: 0,
            tower: 0,
            floor: 0,
            apartment: "",
            wing: 0,
            userId: "",
            name: "",
            identityNumber: "",
        });
        navigate("/")
    }

    return (
        <div>
            <IdleTimer 
                ref={idleTimerRef}
                timeout={150 * 1000} 
                onIdle={onIdle}>
                {children}
            </IdleTimer>
        </div>
    )
}
