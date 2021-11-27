import React from 'react'
import './MySchedule.scss';

export default function MySchedule() {
    return (
        <table className="mySchedule">
            <tbody className="body1">
                <tr className="reservation-row">
                    <td className="sport">Fútbol</td>
                    <td className="field">Cancha 1</td>
                    <td  className="schedule">13:00 a 14:30hs</td>
                    <td className="cancel"><button className="cancel-button button3-font">Cancelar</button></td>
                </tr>
                <tr className="reservation-row">
                    <td className="sport">Paddle</td>
                    <td className="field">Cancha 2</td>
                    <td className="schedule">16:00 a 18:30hs</td>
                    <td className="cancel"><button className="cancel-button button3-font">Cancelar</button></td>
                </tr>
                <tr className="reservation-row">
                    <td className="sport">Tenis</td>
                    <td className="field">Cancha 1</td>
                    <td className="schedule">20:30 a 21:30hs</td>
                    <td className="cancel"><button className="cancel-button button3-font">Cancelar</button></td>
                </tr>
            </tbody>
        </table>
    )
}
