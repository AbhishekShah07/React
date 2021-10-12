import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import New from "./components/New";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new" component={New} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
