import React, { useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router";
import TextInput from "../common/TextInput";
import { LOGIN_MUTATION, SIGNUP_MUTATION } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";
import { AUTHORIZATION_TOKEN } from "../../contants";
import "./styles.scss";
import { Typography } from "@material-ui/core";

const Login = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formData.email,
      password: formData.password,
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
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTHORIZATION_TOKEN, signup.token);
      history.push("/");
    },
  });
  return (
    <div className="login-header">
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
            onClick={isLogin ? login : signup}
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
