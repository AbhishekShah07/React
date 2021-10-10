import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import List from "./components/List";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
