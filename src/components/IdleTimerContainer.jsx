import React, { useContext, useRef } from 'react'
import IdleTimer from 'react-idle-timer';
import { Navigate, useNavigate } from 'react-router';
import { ReservationsContext } from '../contexts/ReservationsContext';
export default function IdleTimerContainer({children}) {
    const idleTimerRef = useRef(null)
    const {setUserId} = useContext(ReservationsContext);
    const navigate  = useNavigate();

    const onIdle = () => {
        setUserId("");
        navigate("/")
    }

    return (
        <div>
            <IdleTimer 
                ref={idleTimerRef}
                timeout={90 * 1000} 
                onIdle={onIdle}>
                {children}
            </IdleTimer>
        </div>
    )
}
