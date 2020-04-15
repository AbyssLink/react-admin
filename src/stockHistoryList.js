import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { Error, Loading, useQueryWithStore } from "react-admin";
import { ErrorCard } from "./ErrorCard";
import { SimpleTable } from "./table";

export const StockHistoryList = (props) => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "stocks-history-list",
    payload: {
      id: props.symbol,
    },
  });

  if (!loaded) {
    return (
      <Card>
        <CardContent>
          <Loading />
        </CardContent>
      </Card>
    );
  }
  if (error) {
    return (
      <Card>
        <CardContent>
          <Error />
        </CardContent>
      </Card>
    );
  }
  if (data !== undefined) {
    if (data["success"] === false) {
      return <ErrorCard></ErrorCard>;
    }
    return <SimpleTable data={data} symbol={props.symbol}></SimpleTable>;
  }
};
