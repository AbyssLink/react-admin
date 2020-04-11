import SettingsIcon from "@material-ui/icons/Settings";
import React, { forwardRef } from "react";
import { AppBar, MenuItemLink, UserMenu } from "react-admin";

const ConfigurationMenu = forwardRef((props, ref) => (
  <MenuItemLink
    ref={ref}
    to="/settings"
    primaryText="Configuration"
    leftIcon={<SettingsIcon />}
    onClick={props.onClick} // close the menu on click
  />
));

const MyUserMenu = (props) => (
  <UserMenu {...props}>
    <ConfigurationMenu />
  </UserMenu>
);

export const MyAppBar = (props) => (
  <AppBar {...props} userMenu={<MyUserMenu />} />
);
