import React, { useState } from "react";
import { SignalChart } from "./signalChart";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Title } from "react-admin";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Popover from "@material-ui/core/Popover";
import Tab from "@material-ui/core/Tab";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  buttonWithIcon: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  tabs: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  divRoot: {
    marginTop: theme.spacing(2),
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export const SignalBoard = (props) => {
  const classes = useStyles();
  const [symbolId, setSymbolId] = useState("AAPL");
  const [searchId, setSearchId] = useState("AAPL");
  const [value, setValue] = React.useState(0);
  const [time, setTime] = React.useState(25);
  const [type, setType] = useState("area");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHelperClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHelperClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setTime(25);
    } else if (newValue === 1) {
      setTime(75);
    } else if (newValue === 2) {
      setTime(300);
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
    console.log("Type = ", event.target.value);
  };

  const handleSearchIdChange = (event) => {
    setSearchId(event.target.value);
    console.log("SearchId = ", event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchId(symbolId);
      console.log("enter press here! ");
    }
  };
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item xs={12} sm={11}>
        <Paper component="form" className={classes.root}>
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="links"
            target="_blank"
            href={"https://finance.yahoo.com/quote/" + searchId}
          >
            <TrendingUpIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search symbols from AKShare"
            onChange={(event) => setSymbolId(event.target.value)}
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
          <IconButton
            // color="primary"
            className={classes.iconButton}
            aria-label="chart_type"
            aria-describedby={id}
            variant="contained"
            onClick={handleHelperClick}
          >
            <HelpOutlineIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleHelperClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              Search any stock you like! <br />
              And change chart type by Select <br />
              Data Source: AKShare
            </Typography>
          </Popover>
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
              <MenuItem value={"area"}>Area</MenuItem>
              <MenuItem value={"line"}>Line</MenuItem>
            </Select>
          </FormControl>
          <Divider className={classes.divider} orientation="vertical" />
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={searchId}
              displayEmpty
              onChange={handleSearchIdChange}
            >
              <MenuItem value={"AAPL"}>AAPL</MenuItem>
              <MenuItem value={"AMZN"}>AMZN</MenuItem>
              <MenuItem value={"FB"}>FB</MenuItem>
              <MenuItem value={"GOOG"}>GOOG</MenuItem>
              <MenuItem value={"LK"}>LK</MenuItem>
              <MenuItem value={"MSFT"}>MSFT</MenuItem>
              <MenuItem value={"NFLX"}>NFLX</MenuItem>
              <MenuItem value={"SNE"}>SNE</MenuItem>
              <MenuItem value={"TLSA"}>TLSA</MenuItem>
              <MenuItem value={"TSLA"}>TSLA</MenuItem>
            </Select>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={11}>
        <Paper className={classes.tabs}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="1 Month" />
            <Tab label="3 Month" />
            <Tab label="1 Year" />
          </Tabs>
          <SignalChart symbol={searchId} amount={time}></SignalChart>
        </Paper>
      </Grid>
    </Grid>
  );
};
