import React, { useContext } from "react";
import Layout from "../../components/Layout";
import "./SuccessfulReservation.scss";
import "../../assets/icons/iconosVeneto-v1.0/style.scss";
import { useNavigate } from "react-router-dom";
import { ReservationsContext } from "../../contexts/ReservationsContext";

export default function SuccessfulReservation() {
  const navigate = useNavigate();
  const { setUser } = useContext(ReservationsContext);

  const newReservation = () => {
    navigate("/home");
  };

  const logout = () => {
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
    navigate("/");
  };

  return (
    <Layout>
      <main className="success-main">
        <div className="success-main__wrapper">
          <div className="selection-container">
            <div className="rectangle-container">
              <div className="rectangle"></div>
            </div>
            {/* <div className="heading-container">
                            <h3 className="title heading2">Reserva confimada</h3>
                        </div> */}

            <div className="success-container">
              <div className="message-container">
                <p className="emoji">🥳🎉</p>
                <p className="body1 description">
                  ¡Tu reserva se realizó con éxito!
                </p>
              </div>
              <div className="button-container">
                <button
                  className="success-button button1 button-font"
                  onClick={newReservation}
                >
                  Nueva Reserva
                </button>
                <button
                  className="success-button button1 button-font"
                  onClick={logout}
                >
                  Salir
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
