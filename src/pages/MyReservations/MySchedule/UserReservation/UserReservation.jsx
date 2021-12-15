import React, { useState } from 'react'
import './UserReservation.scss';
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function UserReservation({reservation, deleteReservation}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <tr className="reservation-row">
            <td className="sport">{reservation.name}</td>
            <td className="field">Cancha {reservation.field}</td>
            <td  className="schedule">{reservation.hours}</td>
            <td className="cancel">
                {reservation.current ? (
                    <button 
                        className="cancel-button button3-font" 
                        onClick={() => setModalIsOpen(true)}>
                            Cancelar
                    </button>
                ) : (
                    <button 
                        className="ended-button button3-font" 
                        disabled>
                            Finalizado
                    </button>
                )}
                
                <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}
                        style={
                            {
                                overlay: {
                                    background: "rgba(0,0,0, .85)"
                                },
                                content: {
                                    position: 'fixed',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    borderRadius: '21px',
                                    background: '#fff',
                                    width: "40%",
                                    height:"35%",
                                    padding: '20px',
                                    overflow: 'hidden',
                                }
                        }}>
                    
                    <div className="modal-body">
                        <p className="body1 message">Cancelar reserva?</p>
                    </div>
                    
                    <div className="modal-buttons">
                        <button onClick={() => {setModalIsOpen(false); deleteReservation(reservation.id);}} 
                                className="schedule-button sport-font1">Si</button>
                        <button onClick={() => setModalIsOpen(false)} className="schedule-button sport-font1">No</button>
                    </div>
                </Modal>
            </td>
        </tr>
    )
}
