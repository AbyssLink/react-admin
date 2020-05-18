import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Title } from "react-admin";

export default () => (
  <div>
    <Title title="Homepage" />
    <Box m={3}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Welcome to the Finance Helper
            </Typography>
            <Typography component="p">
              Front-end:{" "}
              <a href="https://github.com/AbyssLink/react-admin">react-admin</a>
            </Typography>
            <Typography component="p">
              Back-end:{" "}
              <a href="https://github.com/AbyssLink/stoks-app">stoks-app</a>
            </Typography>
            <div>Based on: Material-UI, React-admin, Flask</div>
          </CardContent>
        </Card>
      </Container>
    </Box>
  </div>
);
