import React from "react";
import ListItem from "../ListItem/index";

const List = ({ list }) => {
  return (
    <div style={{ width: "100%" }}>
      {list.map((item, index) => {
        return (
          <ListItem key={item.id} listItem={item} serialNumber={index + 1} />
        );
      })}
    </div>
  );
};

export default List;
