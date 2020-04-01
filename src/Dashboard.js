import React from "react";
import { Title } from "react-admin";
import { Analytics } from "./apexChart";
import { CandleStick } from "./candleStick";
import Grid from "@material-ui/core/Grid";
import { useQueryWithStore, Loading, Error } from "react-admin";

export const DashHome = props => {};

const formatData = posts => {
  let xs = [];
  let ys = [];
  for (const post of posts) {
    xs.push(post["userId"]);
    ys.push(post["id"]);
  }
  return { xs, ys };
};
