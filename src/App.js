// import { createMuiTheme } from "@material-ui/core/styles";
import GroupIcon from "@material-ui/icons/Group";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import TodayIcon from "@material-ui/icons/Today";
import simpleRestProvider from "ra-data-simple-rest";
import React from "react";
import { Admin, Login, Resource } from "react-admin";
import authProvider from "./authProvider";
import Dashboard from "./Dashboard";
import { DistribBoard } from "./distribution/distribBoard";
import { StockHistory } from "./history/stockHistory";
import { MyLayout } from "./MyLayout";
import { NewsShow } from "./news/newsShow";
import { NewsRecommend } from "./news_recommend/newsRecommend";
import { SignalBoard } from "./strategy/signalBoard";
import { SVMBoard } from "./svm/svmBoard";
import { UserCreate, UserEdit, UserList } from "./user/users";

/* const theme = createMuiTheme({
  palette: {
    type: "light", // Switching the dark mode on is a single property value change.
  },
}); */

const MyLoginPage = () => (
  <Login backgroundImage="https://www.onimodglobal.com/wp-content/uploads/2017/11/Digital-Marketing-Trends-2018.jpeg" />
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
    <Resource name="Recommend News" list={NewsRecommend} icon={RssFeedIcon} />
    <Resource name="Moving Average" list={SignalBoard} icon={LocalMallIcon} />
    <Resource name="Distribution" list={DistribBoard} icon={LocalMallIcon} />
    <Resource name="SVM" list={SVMBoard} icon={LocalMallIcon} />
    <Resource
      name="users"
      list={UserList}
      icon={GroupIcon}
      edit={UserEdit}
      create={UserCreate}
    />
    {/* <Resource name="settings" list={Dashboard} icon={SettingsIcon} /> */}
  </Admin>
);

export default App;
