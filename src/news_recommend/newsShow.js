import Grid from "@material-ui/core/Grid";
import React from "react";
import { Error, Loading, Title, useQueryWithStore } from "react-admin";
import { ImgMediaCard } from "../news/newsCard";

export const NewsShow = (props) => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "news-recommend",
    payload: {
      id: props.searchId,
    },
  });

  if (!loaded) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }

  if (data !== undefined) {
    const newsCards = data.map((d) => (
      <Grid item xs={12} sm={12}>
        <ImgMediaCard
          img={d["img"]}
          title={d["title"]}
          description={d["description"]}
          link={d["link"]}
          date={d["date"]}
        ></ImgMediaCard>
      </Grid>
    ));
    return (
      <div>
        <Title title="Finance News" />
        <Grid container spacing={4}>
          {newsCards}
        </Grid>
      </div>
    );
  }
};
