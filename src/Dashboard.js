import React, { Component } from "react";
import { Title } from "react-admin";
import Analytics from "./apexChart";
import Grid from "@material-ui/core/Grid";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

class DashHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        userIdList: [],
        idList: []
      }
    };
    this.getList();
  }
  getList = () => {
    dataProvider
      .getList("posts", {
        pagination: { page: 1, perPage: 8 },
        sort: { field: "title", order: "ASC" },
        filter: { author_id: 12 }
      })
      .then(response => {
        const posts = response.data;
        for (const post of posts) {
          this.state.data.userIdList.push(post["userId"]);
          this.state.data.idList.push(post["id"]);
        }
      });
  };
  render() {
    return (
      <div>
        <Title title="Welcome to the administration" />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Analytics type="bar" data={this.state.data}></Analytics>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Analytics type="scatter" data={this.state.data}></Analytics>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Analytics type="line" data={this.state.data}></Analytics>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Analytics type="area" data={this.state.data}></Analytics>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Analytics type="heatmap" data={this.state.data}></Analytics>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Analytics type="bar" data={this.state.data}></Analytics>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DashHome;
