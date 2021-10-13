import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import New from "./components/New";
import Feed from "./components/Feed";
import Login from "./components/Login";
import Search from "./components/Search";
import Create from "./components/Create";
import { AUTHORIZATION_TOKEN } from "./contants";

const App = () => {
  const loggedIn = localStorage.getItem(AUTHORIZATION_TOKEN);
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/feed/1" />} />
          <Route exact path="/feed" render={() => <Redirect to="/feed/1" />} />
          <Route exact path="/feed/:page" component={Feed} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new" render={() => <Redirect to="/new/1" />} />
          <Route exact path="/new/:page" component={New} />
          <Route exact path="/search" component={Search} />
          {loggedIn && <Route exact path="/create" component={Create} />}
        </Switch>
      </div>
    </div>
  );
};

export default App;
