import React from "react";
import { Title } from "react-admin";
import { CandleStick } from "./candleStick";
import Grid from "@material-ui/core/Grid";
import { useQueryWithStore, Loading, Error } from "react-admin";

export const StockUSChart = props => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "stocks",
    payload: {
      id: "TSLA"
    }
  });
  if (!loaded) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div>
      <Title title="Welcome to the administration" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <CandleStick type="candlestick" data={data}></CandleStick>
        </Grid>
      </Grid>
    </div>
  );
};
