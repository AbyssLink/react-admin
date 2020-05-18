import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { Title } from "react-admin";
import FeaturedPost from "./postCard";

const featuredPosts = [
  {
    href: "https://github.com/abysslink/react-admin",
    title: "Front-end",
    date: "Last update: May 18, 2020",
    description: "Based on React-admin, Material-UI.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTO0ELOQrF87Kw9otGVLQnjy25XZ6IuLjLMVPm3tG2eCK_2AmqX&usqp=CAU",
    imageText: "Image Text",
  },
  {
    href: "https://github.com/abysslink/stoks-app",
    title: "Back-end",
    date: "Last update: May 18, 2020",
    description: "Based on Flask, Pandas, Sklearn, Scipy.",
    image:
      "https://i1.wp.com/www.corellis.eu/wp-content/uploads/2018/09/logo-flask.png",
    imageText: "Image Text",
  },
  {
    href:
      "https://www.coursera.org/learn/python-statistics-financial-analysis/home/welcome",
    title: "Course",
    date: "Last update: May 18, 2020",
    description: "Based on python statistics financial analysis by Xuhu Wan",
    image:
      "https://lh3.googleusercontent.com/13U5Vnio6xeZwOUzpOqf6lCq3phOUw80y4e9VLAONVfkEqYbME5ySDvg28CPien5dHs",
    imageText: "Image Text",
  },
  {
    href: "https://github.com/abysslink",
    title: "About",
    date: "Last commit: May 18, 2020",
    description: "Abysslink. a computer science student.",
    image: "https://avatars1.githubusercontent.com/u/26038696?s=60&v=4",
    imageText: "Image Text",
  },
];

export default () => (
  <div>
    <Title title="Homepage" />
    <Box m={3}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
      </Container>
    </Box>
  </div>
);
