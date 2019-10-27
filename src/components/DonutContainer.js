import React from "react";
import { buyDonut } from "../redux";
import { connect } from "react-redux";

function DonutContainer({ numOfDonuts, buyDonut }) {
  const onClick = () => {
    buyDonut();
  };

  return (
    <div>
      <h2>Number of cakes: {numOfDonuts}</h2>
      <button onClick={onClick}>Buy Donut</button>
    </div>
  );
}

const mapStateToProps = state => ({
  numOfDonuts: state.donut.numOfDonuts
});

const mapDispatchToProps = {
  buyDonut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonutContainer);
