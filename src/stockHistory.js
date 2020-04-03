import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Title } from "react-admin";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import { StockChart } from "./stockChart";
import Tab from "@material-ui/core/Tab";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LinkIcon from "@material-ui/icons/Link";
import SearchIcon from "@material-ui/icons/Search";
import BarChartIcon from "@material-ui/icons/BarChart";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  buttonWithIcon: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  tabs: {
    flexGrow: 1
  }
}));

export const StockHistory = props => {
  const classes = useStyles();
  const [symbolId, setSymbolId] = useState("AAPL");
  const [searchId, setSearchId] = useState("AAPL");
  const [value, setValue] = React.useState(0);
  const [time, setTime] = React.useState(5);
  const [type, setType] = useState("candlestick");

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

  const handleTypeChange = event => {
    setType(event.target.value);
    console.log("Type = ", event.target.value);
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      setSearchId(symbolId);
      console.log("enter press here! ");
    }
  };

  return (
    <div>
      <Title title="Welcome to the administration" />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper component="form" className={classes.root}>
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="chart_type"
            >
              <BarChartIcon />
            </IconButton>
            <InputBase
              className={classes.input}
              placeholder="search symbols from yahoo finance"
              // inputProps={{ "aria-label": symbolId }}
              onChange={event => setSymbolId(event.target.value)}
              onKeyPress={handleKeyPress}
            />
            <IconButton
              className={classes.iconButton}
              aria-label="search"
              onClick={() => {
                setSearchId(symbolId);
                // console.log("Submit Button Click!, searchId = ", searchId);
              }}
            >
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <FormControl className={classes.formControl}>
              {/* <InputLabel id="demo-controlled-open-select-label">
                Type
              </InputLabel> */}
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={type}
                displayEmpty
                onChange={handleTypeChange}
              >
                <MenuItem value={"candlestick"}>Candlestick</MenuItem>
                <MenuItem value={"area"}>Area</MenuItem>
                <MenuItem value={"line"}>Line</MenuItem>
              </Select>
            </FormControl>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="links"
              target="_blank"
              href={"https://finance.yahoo.com/quote/" + searchId}
            >
              <LinkIcon />
            </IconButton>
            {/* <Divider className={classes.divider} orientation="vertical" />
            <Button
              variant="contained"
              color="primary"
              className={classes.buttonWithIcon}
              startIcon={<LinkIcon />}
              target="_blank"
              href={"https://finance.yahoo.com/quote/" + searchId}
            >
              See details in Yahoo Finance
            </Button> */}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.tabs}>
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
                <StockChart
                  symbol={searchId}
                  amount={time}
                  type={type}
                ></StockChart>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};