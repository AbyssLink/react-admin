import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Error, Loading, useQueryWithStore } from "react-admin";
import { ProfitChart } from "./profitChart";
import { SplineChart } from "./splineChart";
import { WealthCard } from "./wealthCard";
import { WealthChart } from "./wealthChart";

export const SignalChart = ({ symbol, amount, height, gridSize }) => {
  /*   const logData = (data) => {
    console.log("data = ", data);
    console.log(symbol);
    console.log(amount);
  };
 */

  const formatGridSize = (gridSize) => {
    if (gridSize == 6) {
      return 9;
    } else if (gridSize == 12) {
      return 12;
    }
  };

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
          <Grid item xs={12} sm={3}>
            <WealthCard
              title={symbol}
              data={data}
              amount={amount}
              height={315}
            ></WealthCard>
          </Grid>
          <Grid item xs={12} sm={formatGridSize(gridSize)}>
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
          <Grid item xs={12} sm={gridSize}>
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
          <Grid item xs={12} sm={gridSize}>
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
