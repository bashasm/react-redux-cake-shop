import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer({ numOfIceCreams, buyIceCream }) {
  const onClick = () => {
    buyIceCream();
  };

  return (
    <div>
      <h2>Number of ice creams: {numOfIceCreams}</h2>
      <button onClick={onClick}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = state => ({
  numOfIceCreams: state.iceCream.numOfIceCreams
});

const mapDispatchToProps = {
  buyIceCream
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer);
