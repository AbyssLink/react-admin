import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 520,
    minHeight: 200,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export const ImgMediaCard = ({ img, title, description, link, date }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              M
            </Avatar>
          }
          title="MoneyControl"
          subheader={date}
        />
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          // image="https://www.google.com/logos/doodles/2019/celebrating-wellies-4652654377566208-2xa.gif"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          {/* <Typography gutterBottom component="p">
            {date}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/*  <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary" target="_blank" href={link}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
