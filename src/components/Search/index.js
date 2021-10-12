import React, { useState } from "react";
import List from "../common/List";
import "./styles.scss";
import { useQuery } from "@apollo/client";
import { SEARCH_LINKS_LIST } from "../../graphql/queries";

const Search = () => {
  const [search, setSearch] = useState("");
  const { data } = useQuery(SEARCH_LINKS_LIST, {
    fetchPolicy: "cache-and-network",
    variables: {
      filter: search,
    },
  });
  return (
    <div className="new-wrapper">
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {data && <List list={data.feed.links} />}
    </div>
  );
};

export default Search;
