import React, { useState } from "react";
import List from "../../components/List";
import { useQuery } from "@apollo/client";
import { SEARCH_LINKS_LIST } from "../../graphql/queries";
import Header from "../../components/Header";

const Search = () => {
  const [search, setSearch] = useState("");
  const { data } = useQuery(SEARCH_LINKS_LIST, {
    fetchPolicy: "cache-and-network",
    variables: {
      filter: search,
    },
  });
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        {data && <List list={data.feed.links} />}
      </div>
    </div>
  );
};

export default Search;
