import React from 'react'

export default function UserReservation({reservation, deleteReservation}) {
    return (
        <tr className="reservation-row">
            <td className="sport">{reservation.name}</td>
            <td className="field">Cancha {reservation.field}</td>
            <td  className="schedule">{reservation.hours}</td>
            <td className="cancel">
                <button 
                    className="cancel-button button3-font" 
                    onClick={()=>deleteReservation(reservation.id)}>
                        Cancelar
                </button>
            </td>
        </tr>
    )
}
