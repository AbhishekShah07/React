import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import New from "./pages/New";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Create from "./pages/Create";
import { AUTHORIZATION_TOKEN } from "./contants";

const App = () => {
  const loggedIn: string | null = localStorage.getItem(AUTHORIZATION_TOKEN);
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/feed/1" />} />
        <Route exact path="/feed" render={() => <Redirect to="/feed/1" />} />
        <Route exact path="/feed/:page" component={Feed} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/new" render={() => <Redirect to="/new/1" />} />
        <Route exact path="/new/:page" component={New} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/create" component={Create} />
      </Switch>
    </div>
  );
};

export default App;
