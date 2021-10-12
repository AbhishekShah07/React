import React from "react";
import List from "../common/List";
import "./styles.scss";
import { useQuery } from "@apollo/client";
import { NEWS_LINKS_LIST } from "../../graphql/queries";

const New = () => {
  const { data } = useQuery(NEWS_LINKS_LIST, {
    fetchPolicy: "cache-and-network",
    variables: {
      createdAt: "desc",
    },
  });
  return (
    <div className="new-wrapper">{data && <List list={data.feed.links} />}</div>
  );
};

export default New;
