import React from "react";
import "./styles.scss";

const ListItem = ({
  listItem: { description, url, votes, postedBy, createdAt },
  serialNumber,
}) => {
  return (
    <div className="listitem-wrapper">
      <div className="listitem-serialno">{serialNumber}.</div>
      <div className="listitem-content">
        <div className="listitem-triangle">▲</div>
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
