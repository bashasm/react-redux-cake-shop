import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import DonutContainer from "./components/DonutContainer";
import HooksDonutContainer from "./components/HooksDonutContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
        <DonutContainer />
        <HooksDonutContainer />
      </div>
    </Provider>
  );
}

export default App;
