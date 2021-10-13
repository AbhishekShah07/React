import React, { useState } from "react";
import "./styles.scss";
import { useMutation } from "@apollo/client";
import { VOTE_MUTATION } from "../../../graphql/mutations";
import Notification from "../Notification";

const ListItem = ({
  listItem: { id, description, url, votes, postedBy, createdAt },
  serialNumber,
  loggedIn,
}) => {
  const [error, setError] = useState({ isError: false, message: "" });
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: id,
    },
    onError(err) {
      setError({ isError: true, message: "Already voted for this link" });
    },
  });
  return (
    <div className="listitem-wrapper">
      <Notification
        error={error.isError}
        message={error.message}
        hideNotification={() => setError({ isError: false, message: "" })}
      />
      <div className="listitem-serialno">{serialNumber}.</div>
      <div className="listitem-content">
        {loggedIn && (
          <div className="listitem-triangle" onClick={vote}>
            ▲
          </div>
        )}
        <div className="listitem-details">
          <a className="listitem-description" href={url} target="_blank">
            {description}
          </a>
          <div className="listitem-subdetails">
            {votes.length} point by {postedBy.name} {createdAt}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
