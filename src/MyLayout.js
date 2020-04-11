import React from "react";
import { Layout } from "react-admin";
import { MyAppBar } from "./MyAppBar";

export const MyLayout = (props) => {
  return <Layout {...props} appBar={MyAppBar} />;
};
