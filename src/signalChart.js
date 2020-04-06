import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { Error, Loading, useQuery } from "react-admin";
import { SplineChart } from "./splineChart";
import { TestCandleStick } from "./testChandleStick";

export const SignalChart = ({ symbol, amount }) => {
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

  const height = 400;

  if (!loaded || data === undefined) {
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
        <Card>
          <CardContent>
            <TestCandleStick></TestCandleStick>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    logData(data);
    return (
      <Card>
        <CardContent>data = {data}</CardContent>
      </Card>
    );
  }
};
