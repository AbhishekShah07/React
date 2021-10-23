import React from "react";
import { useHistory } from "react-router";
import List from "../../components/List";
import { useQuery } from "@apollo/client";
import { NEWS_LINKS_LIST } from "../../graphql/queries";
import Pagination from "@material-ui/lab/Pagination";
import Header from "../../components/Header";

const New = () => {
  const history = useHistory();
  const pageIndexParams = history.location.pathname.split("/");
  const page = parseInt(pageIndexParams[pageIndexParams.length - 1]);
  const { data } = useQuery(NEWS_LINKS_LIST, {
    fetchPolicy: "cache-and-network",
    variables: {
      createdAt: "desc",
      take: 5,
      skip: 5 * (page - 1),
    },
  });
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        {data && (
          <>
            <List serialNo={5 * (page - 1)} list={data.feed.links} />
            <Pagination
              style={{ marginTop: 20 }}
              count={parseInt(data.feed.count / 5) + 1}
              onChange={(event, value) => {
                history.push(`/new/${value}`);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default New;
