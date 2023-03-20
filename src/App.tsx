import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import ReservationCard from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {
  const [reservationName, setReservationName] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationName) return;
    dispatch(addReservation(reservationName));
    setReservationName("");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <div className="reservation-cards-container">
                {reservations.map((name: string, index: number) => {
                  return <ReservationCard name={name} index={index}/>;
                })}
              </div>
            </div>
            <div className="reservation-input-container">
              <input
                value={reservationName}
                onChange={(e) => {
                  setReservationName(e.target.value);
                }}
              />
              <button onClick={handleAddReservations}>Add</button>
            </div>
          </div>
          <div className="customer-food-container">
            <div className="customer-food-card-container">
              <p>Selena Gomez</p>
              <div className="customer-foods-container">
                <div className="customer-food"></div>
                <div className="customer-food-input-container">
                  <input />
                  <button>Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
