import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="time" />
      <TextField source="open" />
      <TextField source="high" />
      <TextField source="low" />
      <TextField source="close" />
      <TextField source="volume" />
    </Datagrid>
  </List>
);
