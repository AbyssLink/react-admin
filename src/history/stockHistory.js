import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Popover from "@material-ui/core/Popover";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import React, { useState } from "react";
import { Title } from "react-admin";
import { StockChart } from "./stockChart";
import { StockHistoryList } from "./stockHistoryList";
import { StockInfo } from "./stockInfo";

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
    // marginTop: theme.spacing(1),
  },
  typography: {
    padding: theme.spacing(2),
  },
}));

export const StockHistory = (props) => {
  const classes = useStyles();
  const [symbolId, setSymbolId] = useState("AAPL");
  const [searchId, setSearchId] = useState("AAPL");
  const [value, setValue] = React.useState(1);
  const [time, setTime] = React.useState(21);
  const [height, setHeight] = React.useState(315);
  const [type, setType] = useState("candlestick");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleHelperClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHeightHelperClick = (event) => {
    if (height === 315) {
      setHeight(680);
    } else {
      setHeight(315);
    }
  };

  const handleHelperClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setTime(5);
    } else if (newValue === 1) {
      setTime(21);
    } else if (newValue === 2) {
      setTime(65);
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
    console.log("Type = ", event.target.value);
  };

  // const handleSearchIdChange = (event) => {
  //   setSearchId(event.target.value);
  //   console.log("SearchId = ", event.target.value);
  // };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchId(symbolId);
      console.log("enter press here! ");
    }
  };

  return (
    <div className={classes.divRoot}>
      <Title title="Query Historical Stock Data" />
      <Box m={3}>
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={12}>
              <Paper component="form" className={classes.root}>
                {/* <IconButton
              color="primary"
              className={classes.iconButton}
              aria-label="chart_type"
            >
              <BarChartIcon />
            </IconButton> */}
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
                  placeholder="Symbol(example: GOOG, AAPL, TSLA, JNJ, LK)"
                  // inputProps={{ "aria-label": symbolId }}
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
                    {/* <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Historical Stock Chart
                </Typography> */}
                    <StockChart
                      symbol={searchId}
                      amount={time}
                      type={type}
                      height={height}
                    ></StockChart>
                  </CardContent>
                </Card>
                {/* <Paper>
              <StockChart
                symbol={searchId}
                amount={time}
                type={type}
              ></StockChart>
            </Paper> */}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <StockInfo symbol={searchId}></StockInfo>
            </Grid>
            <Grid item xs={12} sm={8}>
              <StockHistoryList symbol={searchId}></StockHistoryList>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
