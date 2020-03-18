import React from "react";
import { Title } from "react-admin";
import { Analytics } from "./apexChart";
import Grid from "@material-ui/core/Grid";
import { useQueryWithStore, Loading, Error } from "react-admin";

export const DashHome = props => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getList",
    resource: "posts",
    payload: {
      pagination: { page: 1, perPage: 8 },
      sort: { field: "title", order: "ASC" },
      filter: { author_id: 12 }
    }
  });
  if (!loaded) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  const { xs, ys } = formatData(data);
  return (
    <div>
      <Title title="Welcome to the administration" />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Analytics type="bar" data={{ xs, ys }}></Analytics>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Analytics type="area" data={{ xs, ys }}></Analytics>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Analytics type="line" data={{ xs, ys }}></Analytics>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Analytics type="area" data={{ xs, ys }}></Analytics>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Analytics type="heatmap" data={{ xs, ys }}></Analytics>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Analytics type="bar" data={{ xs, ys }}></Analytics>
        </Grid>
      </Grid>
    </div>
  );
};

const formatData = posts => {
  let xs = [];
  let ys = [];
  for (const post of posts) {
    xs.push(post["userId"]);
    ys.push(post["id"]);
  }
  return { xs, ys };
};
