import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer({ numOfCakes, buyCake }) {
  const onClick = () => {
    buyCake();
  };
  return (
    <div>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button onClick={onClick}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = state => ({
  numOfCakes: state.cake.numOfCakes
});

const mapDispatchToProps = {
  buyCake
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer);
