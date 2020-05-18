import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { NewsShow } from "./newsShow";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  iconButton: {
    padding: 10,
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    justifyContent: "center",
  },
  divRoot: {
    // marginTop: theme.spacing(1),
  },
  typography: {
    padding: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

export const NewsRecommend = (props) => {
  const classes = useStyles();
  const [symbolId, setSymbolId] = useState(
    "coronavirus will influence finance"
  );
  const [searchId, setSearchId] = useState(
    "coronavirus will influence finance"
  );

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setSearchId(symbolId);
      console.log("enter press here! ");
    }
  };

  return (
    <div className={classes.divRoot}>
      <Box m={3}>
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <Paper component="form" className={classes.root}>
                <InputBase
                  className={classes.input}
                  placeholder="Search for news with words or statment, e.g. coronavirus will influence finance"
                  onChange={(event) => setSymbolId(event.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <IconButton
                  className={classes.iconButton}
                  aria-label="search"
                  onClick={() => {
                    setSearchId(symbolId);
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12}>
              <NewsShow searchId={searchId}></NewsShow>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
