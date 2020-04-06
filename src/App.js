import React from "react";
import { Admin, Resource } from "react-admin";
import { DashHome } from "./Dashboard";
import { UserList } from "./users";
import { SignalBoard } from "./signalBoard";
import { StockHistory } from "./stockHistory";
import authProvider from "./authProvider";
import jsonServerProvider from "ra-data-json-server";
import { PostList, PostEdit, PostCreate, PostIcon } from "./posts";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = jsonServerProvider("http://127.0.0.1:5000");
const App = () => (
  <Admin
    // dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    {/* <Resource name="posts" list={DashHome} /> */}
    {/* <Resource name="users" list={UserList} /> */}
    <Resource name="stocks_history" list={StockHistory} />
    <Resource name="strategy" list={SignalBoard} />
    {/* <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    /> */}
  </Admin>
);

export default App;
