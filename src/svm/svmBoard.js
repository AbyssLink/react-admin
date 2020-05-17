import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import React, { useState } from "react";
import { Title } from "react-admin";
import { SVMChart } from "./svmChart";

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
    // marginTop: theme.spacing(2),
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export const SVMBoard = (props) => {
  const classes = useStyles();
  const [symbolId, setSymbolId] = useState("AAPL");
  const [days, setDays] = useState(220);
  const [searchId, setSearchId] = useState("AAPL|100");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHelperClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHelperClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchId(symbolId + "|" + days);
      console.log("enter press here! ");
    }
  };
  return (
    <div className={classes.divRoot}>
      <Title title="Strategy to apply on stock" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
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
              placeholder="Symbol(example: GOOG)"
              onChange={(event) => setSymbolId(event.target.value)}
              onKeyPress={handleKeyPress}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <InputBase
              className={classes.input}
              placeholder="Trains(example: 100)((<=250), Predicts = 300 - Trains)"
              onChange={(event) => setDays(event.target.value)}
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
          </Paper>
        </Grid>
        {/*  <Grid item xs={12}>
          <VarCard symbol={searchId}></VarCard>
        </Grid> */}
        <Grid item xs={12}>
          <SVMChart symbol={searchId}></SVMChart>
        </Grid>
      </Grid>
    </div>
  );
};
