import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Title } from "react-admin";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CenteredTabs } from "./stockWrapper";
import SearchBar from "material-ui-search-bar";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export const StockHistory = props => {
  const classes = useStyles();
  const [symbolId, setSymbolId] = useState("AAPL");
  const [searchId, setSearchId] = useState("AAPL");
  const [type, setType] = useState("candlestick");
  const handleChange = event => {
    setType(event.target.value);
    console.log("Type = ", event.target.value);
  };

  return (
    <div>
      <Title title="Welcome to the administration" />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <SearchBar
            value={symbolId}
            onChange={newValue => setSymbolId(newValue)}
            onRequestSearch={symbolId => {
              setSearchId(symbolId);
              console.log("OnRequest", symbolId);
            }}
            style={{
              margin: "0 auto",
              maxWidth: 500
            }}
          />
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={type}
              onChange={handleChange}
            >
              <MenuItem value={"candlestick"}>Candlestick</MenuItem>
              <MenuItem value={"area"}>Area</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            href={"https://finance.yahoo.com/quote/" + searchId}
          >
            Yahoo Finance Link
          </Button>
        </Grid>
        <Grid item xs={12} sm={12}>
          <CenteredTabs symbol={searchId} type={type}></CenteredTabs>
        </Grid>
      </Grid>
    </div>
  );
};
