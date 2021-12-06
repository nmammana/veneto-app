import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { ReservationsContext } from '../contexts/ReservationsContext';

export default function PrivateRoute({children}) {
    const {userId} = useContext(ReservationsContext);

    return userId ? children : <Navigate to="/" />;
}

