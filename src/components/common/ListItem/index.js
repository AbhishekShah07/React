import React from "react";
import "./styles.scss";
import { useMutation } from "@apollo/client";
import { VOTE_MUTATION } from "../../../graphql/mutations";
import { LINKS_LIST } from "../../../graphql/queries";

const ListItem = ({
  listItem: { id, description, url, votes, postedBy, createdAt },
  serialNumber,
  loggedIn,
}) => {
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: id,
    },
  });
  return (
    <div className="listitem-wrapper">
      <div className="listitem-serialno">{serialNumber}.</div>
      <div className="listitem-content">
        {loggedIn && (
          <div className="listitem-triangle" onClick={vote}>
            ▲
          </div>
        )}
        <div className="listitem-details">
          <a className="listitem-description" href={url}>
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
