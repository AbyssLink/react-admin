// import { createMuiTheme } from "@material-ui/core/styles";
import GroupIcon from "@material-ui/icons/Group";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import SettingsIcon from "@material-ui/icons/Settings";
import TodayIcon from "@material-ui/icons/Today";
import simpleRestProvider from "ra-data-simple-rest";
import React from "react";
import { Admin, Login, Resource } from "react-admin";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";
import { MyLayout } from "./MyLayout";
import { NewsShow } from "./news/newsShow";
import { DistribBoard } from "./distribution/distribBoard";
import { SignalBoard } from "./strategy/signalBoard";
import { StockHistory } from "./history/stockHistory";
import { UserCreate, UserEdit, UserList } from "./user/users";

/* const theme = createMuiTheme({
  palette: {
    type: "light", // Switching the dark mode on is a single property value change.
  },
}); */

const MyLoginPage = () => (
  <Login
    // A random image that changes everyday
    // backgroundImage="https://raw.githubusercontent.com/AbyssLink/pic/master/Konachan.com%20-%20299183%20sample.jpg"
    // backgroundImage="https://i.pinimg.com/originals/f5/ab/04/f5ab049e7cbbc33cafea1b4123f0fe52.jpg"
    // backgroundImage="https://3.bp.blogspot.com/-CLZFch--qWc/V3H-yD0TxcI/AAAAAAAAxgo/RyCsEDORDNU46Eodg1ImriceU-0835F7QCHM/s1600/clannad-after-story-robot.jpg"
    backgroundImage="https://www.onimodglobal.com/wp-content/uploads/2017/11/Digital-Marketing-Trends-2018.jpeg"
  />
);

const dataProvider = simpleRestProvider("http://127.0.0.1:5000");
const App = () => (
  <Admin
    // theme={theme}
    dashboard={Dashboard}
    loginPage={MyLoginPage}
    layout={MyLayout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    {/* <Resource name="posts" list={DashHome} /> */}
    <Resource name="History" list={StockHistory} icon={TodayIcon} />
    <Resource name="news" list={NewsShow} icon={RssFeedIcon} />
    <Resource name="Moving Average" list={SignalBoard} icon={LocalMallIcon} />
    <Resource name="Varations" list={DistribBoard} icon={LocalMallIcon} />
    <Resource
      name="users"
      list={UserList}
      icon={GroupIcon}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource name="settings" list={Dashboard} icon={SettingsIcon} />
  </Admin>
);

export default App;
