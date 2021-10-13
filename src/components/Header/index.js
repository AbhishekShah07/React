import React from "react";
import "./styles.scss";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { AUTHORIZATION_TOKEN } from "../../contants";

const Header = () => {
  const history = useHistory();
  const loggedIn = localStorage.getItem(AUTHORIZATION_TOKEN);
  const handleLoginClick = () => {
    if (loggedIn) {
      localStorage.removeItem(AUTHORIZATION_TOKEN);
      history.push("/login");
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="header-wrapper">
      <div className="header-logo">
        <Link to="/">
          <img className="header-logo-image" src={logo} alt="Hacker-news" />
        </Link>
      </div>
      <div className="header-content">
        <div className="header-links-wrapper">
          <div className="header-link">
            <Link to="/new" className="text-link" path="/new">
              New
            </Link>
          </div>
          |
          <div className="header-link">
            <Link to="/search" className="text-link" path="/search">
              Search
            </Link>
          </div>
          |
          <div className="header-link">
            <Link to="/create" className="text-link" path="/create">
              Submit
            </Link>
          </div>
        </div>
        <div className="login-link text-link" onClick={handleLoginClick}>
          {loggedIn ? "Logout" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default Header;
