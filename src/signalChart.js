import React from "react";
import Card from "@material-ui/core/Card";
import { useQueryWithStore, Loading, Error } from "react-admin";
import CardContent from "@material-ui/core/CardContent";
import { SplineChart } from "./splineChart";

export const SignalChart = (props) => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "ploy-signal",
    payload: {
      id: props.symbol,
    },
  });

  const height = 500;

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
    return (
      <Card>
        <CardContent>
          <SplineChart
            title={props.symbol}
            data={data}
            amount={props.amount}
            height={height}
          ></SplineChart>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardContent>data = {data}</CardContent>
      </Card>
    );
  }
};
