import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import TextInput from "../common/TextInput";
import Header from "../Header";
import { useMutation } from "@apollo/client";
import { POST_MUTATION } from "../../graphql/mutations";
import { useHistory } from "react-router";
import Notification from "../common/Notification";
import {
  EMPTY_FIELDS_ERROR_MESSAGE,
  INVALID_URL_ERROR_MESSAGE,
} from "../../contants";

const Create = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ url: "", description: "" });
  const [error, setError] = useState({ isError: false, message: "" });
  const [post] = useMutation(POST_MUTATION, {
    variables: {
      url: formData.url,
      description: formData.description,
    },
    onCompleted: ({}) => {
      history.push("/");
    },
  });
  const validateUrl = (value) => {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
      value
    );
  };
  const handleClick = () => {
    if (formData.url === "" || formData.description === "") {
      setError({ isError: true, message: EMPTY_FIELDS_ERROR_MESSAGE });
      return;
    }
    if (!validateUrl(formData.url)) {
      setError({ isError: true, message: INVALID_URL_ERROR_MESSAGE });
      return;
    }
    post();
  };
  return (
    <div>
      <Notification
        error={error.isError}
        message={error.message}
        hideNotification={() => setError({ isError: false, message: "" })}
      />
      <Header />
      <div className="content-wrapper ">
        <Typography variant="h4">Create</Typography>
        <TextInput
          label="URL"
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
        />
        <TextInput
          label="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#ff6600" }}
          onClick={handleClick}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Create;
