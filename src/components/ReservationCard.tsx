import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../features/reservationSlice";
import { addCustomer } from "../features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardType {
  name: string;
  index: number;
}

function ReservationCard({ name, index}: ReservationCardType) {
  
  const dispatch = useDispatch();

  return (
    <div onClick={() =>{
      dispatch(removeReservation(index))
      dispatch(addCustomer({
        id: uuid(),
        name,
        food: []
      }))
    }} className="reservation-card-container">
      <p>{name}</p>
    </div>
  );
}

export default ReservationCard;

