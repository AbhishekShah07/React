import React from "react";
import { TextField } from "@material-ui/core";

const TextInput = (props) => {
  return (
    <TextField
      InputLabelProps={{
        style: { color: "#000000" },
      }}
      variant="filled"
      {...props}
      style={{ marginBottom: 10, width: 300 }}
    />
  );
};

export default TextInput;
