import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";

interface ReservationCardType {
  name: string;
  index: number;
}

function ReservationCard({ name, index}: ReservationCardType) {
  
  const dispatch = useDispatch();

  return (
    <div onClick={() =>{
      dispatch(removeReservation(index))
    }} className="reservation-card-container">
      <p>{name}</p>
    </div>
  );
}

export default ReservationCard;

