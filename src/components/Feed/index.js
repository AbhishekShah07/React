import React from "react";
import List from "../common/List";
import "./styles.scss";
import { useQuery } from "@apollo/client";
import { LINKS_LIST } from "../../graphql/queries";

const Feed = () => {
  const { data } = useQuery(LINKS_LIST, { fetchPolicy: "cache-and-network" });
  return (
    <div className="new-wrapper">{data && <List list={data.feed.links} />}</div>
  );
};

export default Feed;
