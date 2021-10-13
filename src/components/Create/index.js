import { Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import TextInput from "../common/TextInput";
import Header from "../Header";
import { useMutation } from "@apollo/client";
import { POST_MUTATION } from "../../graphql/mutations";
import { useHistory } from "react-router";

const Create = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({ url: "", description: "" });
  const [post] = useMutation(POST_MUTATION, {
    variables: {
      url: formData.url,
      description: formData.description,
    },
    onCompleted: ({}) => {
      history.push("/");
    },
  });
  return (
    <div>
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
          onClick={post}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Create;
