import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { Error, Loading, useQuery } from "react-admin";
import { SplineChart } from "./splineChart";

export const SignalChart = ({ symbol, amount, height }) => {
  const logData = (data) => {
    console.log("data = ", data);
    console.log(symbol);
    console.log(amount);
  };

  const { loaded, error, data } = useQuery({
    type: "getOne",
    resource: "ploy-signal",
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
    logData(data);
    if (data["success"] === false) {
      return (
        <Card>
          <CardContent>ERROR! No such stock!</CardContent>
        </Card>
      );
    }
    return (
      <div>
        <Card>
          <CardContent>
            <SplineChart
              title={symbol}
              data={data}
              amount={amount}
              height={height}
            ></SplineChart>
          </CardContent>
        </Card>
      </div>
    );
  }
};
