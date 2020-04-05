import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import FilterListIcon from "@material-ui/icons/FilterList";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  title: {
    flex: "1 1 100%",
    fontWeight: 550
  }
}));

export const FolderList = props => {
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
              <Avatar>
                <ImageIcon />
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
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Sector" secondary={props.data["sector"]} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Phone" secondary={props.data["phone"]} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
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
              <Avatar>
                <BeachAccessIcon />
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
