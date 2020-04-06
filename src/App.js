import jsonServerProvider from "ra-data-json-server";
import React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import { SignalBoard } from "./signalBoard";
import { StockHistory } from "./stockHistory";

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
  </Admin>
);

export default App;
