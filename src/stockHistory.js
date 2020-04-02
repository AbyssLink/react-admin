import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Title } from "react-admin";
import { StockChart } from "./stockChart";
import SearchBar from "material-ui-search-bar";

export const StockHistory = props => {
  const [symbolId, setSymbolId] = useState("AAPL");
  const [searchId, setSearchId] = useState("AAPL");

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
        </Grid>
        <Grid item xs={12} sm={12}>
          <StockChart symbol={searchId}></StockChart>
        </Grid>
      </Grid>
    </div>
  );
};
