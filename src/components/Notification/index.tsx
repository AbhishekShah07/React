import React from "react";
import { Snackbar } from "@material-ui/core";

const Notification = ({ error, message, hideNotification }) => {
  return (
    <Snackbar
      autoHideDuration={2000}
      open={error}
      message={message}
      onClose={hideNotification}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    />
  );
};

export default Notification;
