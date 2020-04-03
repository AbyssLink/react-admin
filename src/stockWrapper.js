import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { StockChart } from "./stockChart";
import Tab from "@material-ui/core/Tab";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export const CenteredTabs = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [time, setTime] = React.useState(5);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue == 0) {
      setTime(5);
    } else if (newValue == 1) {
      setTime(21);
    } else if (newValue == 2) {
      setTime(65);
    }
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="5 Days" />
        <Tab label="1 Month" />
        <Tab label="3 Months" />
      </Tabs>
      <Card>
        <CardContent>
          <StockChart symbol={props.symbol} amount={time}></StockChart>
        </CardContent>
      </Card>
    </Paper>
  );
};
