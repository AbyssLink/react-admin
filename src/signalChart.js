import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Error, Loading, useQueryWithStore } from "react-admin";
import { ProfitChart } from "./profitChart";
import { SplineChart } from "./splineChart";
import { WealthChart } from "./wealthChart";

export const SignalChart = ({ symbol, amount, height }) => {
  /*   const logData = (data) => {
    console.log("data = ", data);
    console.log(symbol);
    console.log(amount);
  };
 */
  const { loaded, error, data } = useQueryWithStore({
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
    // logData(data);
    if (data["success"] === false) {
      return (
        <Card>
          <CardContent>ERROR! No such stock!</CardContent>
        </Card>
      );
    }
    return (
      <div>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={12} sm={11}>
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
          </Grid>
          <Grid item xs={12} sm={11}>
            <Card>
              <CardContent>
                <ProfitChart
                  title={symbol}
                  data={data}
                  amount={amount}
                  height={height}
                ></ProfitChart>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={11}>
            <Card>
              <CardContent>
                <WealthChart
                  title={symbol}
                  data={data}
                  amount={amount}
                  height={height}
                ></WealthChart>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
};
