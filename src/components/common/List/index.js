import React from "react";
import ListItem from "../ListItem/index";

const List = ({ list, serialNo }) => {
  return (
    <div style={{ width: "100%" }}>
      {list.map((item, index) => {
        return (
          <ListItem
            key={item.id}
            listItem={item}
            serialNumber={serialNo ? serialNo + index + 1 : index + 1}
          />
        );
      })}
    </div>
  );
};

export default List;
