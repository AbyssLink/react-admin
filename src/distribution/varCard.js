import Button from "@material-ui/core/Button";
import { Error, Loading, useQueryWithStore } from "react-admin";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { green, red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const formatTitle = (title) => {
  const symbol = title.split("|")[0];
  const ratio = Math.abs(title.split("|")[1] * 100);
  const days = title.split("|")[2];

  if (Number(title.split("|")[1]) > 0) {
    return symbol + "  increase  " + ratio + "%" + "  in  " + days + "  days";
  } else {
    return symbol + "  decrease  " + ratio + "%" + "  in  " + days + "  days";
  }
};

const getProb = (title, prob) => {
  const ratio = title.split("|")[1] * 100;
  if (ratio > 0) {
    return 1 - prob;
  } else {
    return prob;
  }
};

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    minHeight: props.height + 54,
  }),
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  content: {
    margin: theme.spacing(1),
  },
  actions: {
    display: "flex",
    margin: theme.spacing(1),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    // marginBottom: 10,
    fontSize: 18,
  },
  boldLarge: {
    fontWeight: 500,
    fontSize: 36,
  },
  bold: {
    fontWeight: 550,
  },
}));

const myTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

export const VarCard = (props) => {
  const classes = useStyles(props);
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "distrib-prob",
    payload: {
      //FIXME: dirty method
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
  return (
    <div>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          {/* <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day
            </Typography> */}
          <Typography className={classes.bold} variant="h5" component="h2">
            {formatTitle(props.symbol)}
          </Typography>
          <Typography className={classes.boldLarge} component="h2">
            Probility is {getProb(props.symbol, data["prob"])}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
