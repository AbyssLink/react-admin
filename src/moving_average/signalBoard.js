import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
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
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import React, { useState } from "react";
import { Title } from "react-admin";
import { SignalChart } from "./signalChart";

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

export const SignalBoard = (props) => {
  const classes = useStyles();
  const [symbolId, setSymbolId] = useState("AAPL");
  const [fast, setFast] = useState(5);
  const [slow, setSlow] = useState(20);
  const [days, setDays] = useState(100);
  const [searchId, setSearchId] = useState("AAPL|5|20|100");
  const [time] = useState(60);
  const [height, setHeight] = React.useState(315);
  const [gridSize, setGridSize] = React.useState(6);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHeightHelperClick = (event) => {
    if (height === 315) {
      setHeight(680);
    } else {
      setHeight(315);
    }
  };

  const handleGridChangerClick = (event) => {
    if (gridSize === 6) {
      setGridSize(12);
    } else {
      setGridSize(6);
    }
  };

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
      setSearchId(symbolId + "|" + fast + "|" + slow + "|" + days);
      console.log("enter press here! ");
    }
  };
  return (
    <div className={classes.divRoot}>
      <Title title="Strategy to apply on stock" />
      <Box m={3}>
        <Container maxWidth="lg">
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
                  placeholder="Fast_Signal(example: 5)"
                  onChange={(event) => setFast(event.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Divider className={classes.divider} orientation="vertical" />

                <InputBase
                  className={classes.input}
                  placeholder="Slow_Signal(example: 20)"
                  onChange={(event) => setSlow(event.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <InputBase
                  className={classes.input}
                  placeholder="Days(example: 100)"
                  onChange={(event) => setDays(event.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <Divider className={classes.divider} orientation="vertical" />
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
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton
                  // color="primary"
                  className={classes.iconButton}
                  aria-label="chart_type"
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleHeightHelperClick}
                >
                  <ZoomOutMapIcon />
                </IconButton>
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton
                  // color="primary"
                  className={classes.iconButton}
                  aria-label="chart_type"
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleGridChangerClick}
                >
                  <ViewComfyIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <SignalChart
                symbol={searchId}
                amount={time}
                height={height}
                gridSize={gridSize}
              ></SignalChart>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
