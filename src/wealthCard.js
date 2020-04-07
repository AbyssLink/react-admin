import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { green, red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

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
  const bull = <span className={classes.bullet}>•</span>;

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
            {props.title}
          </Typography>
          <Typography className={classes.boldLarge} component="h2">
            $ {props.data["wealth"].slice(-1)}
          </Typography>
          <Grid container>
            <Grid item xs>
              <Typography className={classes.pos} theme={myTheme}>
                Highest:
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.pos} theme={myTheme}>
                $ {Math.max(...props.data["wealth"])}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Typography className={classes.pos} theme={myTheme}>
                Lowest:
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.pos} theme={myTheme}>
                $ {Math.min(...props.data["wealth"])}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Typography className={classes.pos} theme={myTheme}>
                Time
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.pos} theme={myTheme}>
                {props.data["wealth"].length} days
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" component="p">
            Strategy using signal value.
            <br />
            Reference to coursera.
            <br />
          </Typography>
          <Typography variant="body1" component="p">
            Click button to read document.
            <br />
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
