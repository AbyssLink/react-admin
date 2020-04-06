import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  blue,
  deepOrange,
  deepPurple,
  green,
  pink,
} from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import FilterListIcon from "@material-ui/icons/FilterList";
import GroupIcon from "@material-ui/icons/Group";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import WorkIcon from "@material-ui/icons/Work";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
}));

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  title: {
    flex: "1 1 100%",
    fontWeight: 550,
  },
}));

export const FolderList = (props) => {
  const classes = useStyles();
  const toolbarClasses = useToolbarStyles();

  return (
    <Card>
      <CardContent>
        <Toolbar className={toolbarClasses.root}>
          <Typography
            className={toolbarClasses.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            {props.symbol}
          </Typography>
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar variant="rounded" src={props.data["logo_url"]}>
                {/* <ImageIcon /> */}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Logo"
              secondary={
                <Link target="_blank" href={props.data["logo_url"]}>
                  {props.data["logo_url"]}
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.blue}>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Sector" secondary={props.data["sector"]} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.blue}>
                <PhoneIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Phone" secondary={props.data["phone"]} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.blue}>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Website"
              secondary={
                <Link target="_blank" href={props.data["website"]}>
                  {props.data["website"]}
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.blue}>
                <GroupIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="FullTime Employees"
              secondary={props.data["fullTimeEmployees"]}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
