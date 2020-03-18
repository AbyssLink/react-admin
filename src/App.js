import React from "react";
import { Admin, Resource } from "react-admin";
import { DashHome } from "./Dashboard";
import { UserList } from "./users";
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin
    // dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name="posts" list={DashHome} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
