import React from "react";
import { useQueryWithStore, Loading, Error } from "react-admin";
import { SimpleTable } from "./table";
import Paper from "@material-ui/core/Paper";

export const StockHistoryList = props => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "stocks-history-list",
    payload: {
      id: props.symbol
    }
  });

  if (!loaded) {
    return (
      <Paper>
        <Loading />
      </Paper>
    );
  }
  if (error) {
    return <Error />;
  }
  if (data !== null) {
    if (data["success"] === false) {
      return <Paper>ERROR! No such stock!</Paper>;
    }
    return <SimpleTable data={data} symbol={props.symbol}></SimpleTable>;
  }
};
