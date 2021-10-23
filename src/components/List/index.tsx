import React from "react";
import PropTypes, { number } from "prop-types";
import ListItem from "../ListItem/index";
import { AUTHORIZATION_TOKEN } from "../../contants";

interface Props {
  list: Array<object>;
  serialNo?: number;
}

const List: React.FC<Props> = ({ list, serialNo }) => {
  const authToken = localStorage.getItem(AUTHORIZATION_TOKEN);
  return (
    <div style={{ width: "100%" }}>
      {list.map((item: object, index: number) => {
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

List.propTypes = {
  list: PropTypes.array,
  serialNo: PropTypes.number,
};
