import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Error, Loading, useQueryWithStore } from "react-admin";
import { ErrorCard } from "../ErrorCard";
import { HeatMap, PredictMap, RealMap } from "./heatMapChart";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
  },
}));

export const SVMChart = ({ symbol }) => {
  const classes = useStyles();
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "svm",
    payload: {
      //FIXME: bad method
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
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <PredictMap title={symbol} data={data}></PredictMap>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <RealMap title={symbol} data={data}></RealMap>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <HeatMap title={symbol} data={data}></HeatMap>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography
                      className={classes.root}
                      variant="h4"
                      component="h2"
                    >
                      {symbol.split("|")[0]} with {symbol.split("|")[1]} train
                      days
                    </Typography>
                    <Typography
                      className={classes.root}
                      variant="h5"
                      component="h2"
                    >
                      Correct rate is {data["result"]}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
};
