import React from 'react'
import './MySchedule.scss';
import UserReservation from './UserReservation/UserReservation';

export default function MySchedule({myReservations, deleteReservation}) {

    return (
        <table className="mySchedule">
            <tbody className="body1">
                {myReservations && myReservations.map((reservation) => (
                    <UserReservation 
                        key={reservation.id} 
                        reservation={reservation} 
                        deleteReservation={deleteReservation}/>
                ))}
            </tbody>
        </table>
    )
}
