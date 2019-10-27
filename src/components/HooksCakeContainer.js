import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(buyCake());
  };

  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={onClick}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
