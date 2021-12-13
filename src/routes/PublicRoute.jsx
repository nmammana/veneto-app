import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { ReservationsContext } from '../contexts/ReservationsContext';

export default function PublicRoute({children}) {
    const {user} = useContext(ReservationsContext);

    return !user.userId ? children : <Navigate to="/home" />;
}

