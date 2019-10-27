import React from "react";
import { buyDonut } from "../redux";
import { useDispatch, useSelector } from "react-redux";

function HooksDonutContainer() {
  const numOfDonuts = useSelector(state => state.donut.numOfDonuts);
  const dispatch = useDispatch();

  const onClick = () => {
    console.log("buying donut");
    dispatch(buyDonut());
  };

  return (
    <div>
      <h2>Number of cakes: {numOfDonuts}</h2>
      <button onClick={onClick}>Buy Donut</button>
    </div>
  );
}

export default HooksDonutContainer;
