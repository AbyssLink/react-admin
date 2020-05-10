import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { green, red } from "@material-ui/core/colors";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const formatTitle = (title) => {
  const symbol = title.split("|")[0];
  const fast = title.split("|")[1];
  const slow = title.split("|")[2];
  const days = title.split("|")[3];

  return (
    "1 share of " +
    symbol +
    " stock " +
    " using " +
    " fast signal = " +
    fast +
    ", " +
    " slow signal = " +
    slow +
    ", " +
    " in " +
    days +
    " days"
  );
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

export const WealthCard = (props) => {
  const classes = useStyles(props);

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
            {formatTitle(props.title)}
          </Typography>
          <Typography className={classes.boldLarge} component="h2">
            final wealth is $ {props.data["wealth"].slice(-1)}
          </Typography>
          <Typography className={classes.pos} theme={myTheme}>
            Highest = $ {Math.max(...props.data["wealth"])}
          </Typography>
          <Typography className={classes.pos} theme={myTheme}>
            Lowest = $ {Math.min(...props.data["wealth"])}
          </Typography>
          {/*           <Typography className={classes.pos} theme={myTheme}>
            Time = {props.data["wealth"].length} days
          </Typography> */}
        </CardContent>
      </Card>
    </div>
  );
};
