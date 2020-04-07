import GroupIcon from "@material-ui/icons/Group";
import InfoIcon from "@material-ui/icons/Info";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import TodayIcon from "@material-ui/icons/Today";
import jsonServerProvider from "ra-data-json-server";
import React from "react";
import { Admin, Login, Resource } from "react-admin";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";
import { SignalBoard } from "./signalBoard";
import { StockHistory } from "./stockHistory";
import { UserList } from "./users";

const MyLoginPage = () => (
  <Login
    // A random image that changes everyday
    // backgroundImage="https://raw.githubusercontent.com/AbyssLink/pic/master/Konachan.com%20-%20299183%20sample.jpg"
    // backgroundImage="https://i.pinimg.com/originals/f5/ab/04/f5ab049e7cbbc33cafea1b4123f0fe52.jpg"
    backgroundImage="https://3.bp.blogspot.com/-CLZFch--qWc/V3H-yD0TxcI/AAAAAAAAxgo/RyCsEDORDNU46Eodg1ImriceU-0835F7QCHM/s1600/clannad-after-story-robot.jpg"
  />
);

const dataProvider = jsonServerProvider("http://127.0.0.1:5000");
const App = () => (
  <Admin
    dashboard={Dashboard}
    loginPage={MyLoginPage}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    {/* <Resource name="posts" list={DashHome} /> */}
    <Resource name="History" list={StockHistory} icon={TodayIcon} />
    <Resource name="strategy" list={SignalBoard} icon={LocalMallIcon} />
    <Resource name="photo" list={UserList} icon={PhotoLibraryIcon} />
    <Resource name="users" list={UserList} icon={GroupIcon} />
    <Resource name="info" list={Dashboard} icon={InfoIcon} />
  </Admin>
);

export default App;
