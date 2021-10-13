import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import TextInput from "../common/TextInput";
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import {
  AUTHORIZATION_TOKEN,
  EMPTY_FIELDS_ERROR_MESSAGE,
  INVALID_EMAIL_ERROR_MESSAGE,
} from "../../contants";
import "./styles.scss";
import { Typography } from "@material-ui/core";
import Notification from "../common/Notification";

const Login = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState({ isError: false, message: "" });
  const [formData, setFormData] = useState({
    email: "abhishek@gmail.com",
    password: "abhishek",
    name: "",
  });
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formData.email,
      password: formData.password,
    },
    onError(err) {
      setError({ isError: true, message: err.message });
      return;
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTHORIZATION_TOKEN, login.token);
      history.push("/");
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      email: formData.email,
      password: formData.password,
      name: formData.name,
    },
    onError(err) {
      setError({ isError: true, message: err.message });
      return;
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTHORIZATION_TOKEN, signup.token);
      history.push("/");
    },
  });
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleClick = () => {
    if (formData.email === "" || formData.password === "") {
      console.log(!isLogin, formData.name === "");
      // if (!isLogin && formData.name === "") {
      //   setError({ isError: true, message: EMPTY_FIELDS_ERROR_MESSAGE });
      //   return;
      // }
      setError({ isError: true, message: EMPTY_FIELDS_ERROR_MESSAGE });
      return;
    } else if (!isLogin && formData.name === "") {
      setError({ isError: true, message: "EMPTY_FIELDS_ERROR_MESSAGE" });
      return;
    }
    if (!validateEmail(formData.email)) {
      setError({ isError: true, message: INVALID_EMAIL_ERROR_MESSAGE });
      return;
    }
    isLogin ? login() : signup();
  };
  return (
    <div className="login-header">
      <Notification
        error={error.isError}
        message={error.message}
        hideNotification={() => setError({ isError: false, message: "" })}
      />
      <Typography
        style={{ marginLeft: "auto", marginRight: "auto" }}
        variant="h4"
      >
        {" "}
        Hacker News{" "}
      </Typography>
      <Grid container className="login-wrapper">
        <Grid item className="login-header">
          {isLogin ? "Login" : "Sign Up"}
        </Grid>
        <Grid item className="login-textinputs">
          <TextInput
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            label="Email"
            type="text"
          />
          <TextInput
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            label="Password"
            type="password"
          />
          {!isLogin && (
            <TextInput
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              label="Name"
              type="text"
            />
          )}
        </Grid>
        <Grid className="login-button">
          <Button
            className="login-primary-button"
            variant="contained"
            style={{ backgroundColor: "#ff6600" }}
            onClick={handleClick}
          >
            {isLogin ? "Login" : "Sign up"}
          </Button>
          <Button
            className="login-secondary-button"
            variant="outlined"
            style={{ backgroundColor: "#f6f6ef" }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "New user?" : "Existing user?"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
