import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="password" />
      {/* <TextField source="name" /> */}
      {/* <EmailField source="email" /> */}
      {/* <TextField source="company.name" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <TextInput multiline source="password" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      {/* <TextInput source="id" /> */}
      <TextInput source="username" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
