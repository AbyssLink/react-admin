import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Error, Loading, useQueryWithStore } from "react-admin";
import { ErrorCard } from "../ErrorCard";
import { ReturnChart } from "./returnChart";

export const DistribChart = ({ symbol, amount, height, gridSize }) => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "distrib-chart",
    payload: {
      id: symbol,
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
    // logData(data);
    if (data["success"] === false) {
      return <ErrorCard></ErrorCard>;
    }
    return (
      <div>
        <Card>
          <CardContent>
            <ReturnChart
              title={symbol}
              data={data}
              amount={amount}
              height={315}
            ></ReturnChart>
          </CardContent>
        </Card>
      </div>
    );
  }
};
