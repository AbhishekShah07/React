import React from "react";
import ListItem from "../ListItem/index";
import { AUTHORIZATION_TOKEN } from "../../../contants";

const List = ({ list, serialNo }) => {
  const authToken = localStorage.getItem(AUTHORIZATION_TOKEN);
  return (
    <div style={{ width: "100%" }}>
      {list.map((item, index) => {
        return (
          <ListItem
            key={item.id}
            listItem={item}
            serialNumber={serialNo ? serialNo + index + 1 : index + 1}
            loggedIn={authToken ? true : false}
          />
        );
      })}
    </div>
  );
};

export default List;
