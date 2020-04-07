import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import React from "react";
import { Title } from "react-admin";

export default () => (
  <div>
    <Title title="Homepage" />
    <Card>
      <CardHeader title="Welcome to the administration" />
      <CardContent>Lorem ipsum sic dolor amet...</CardContent>
    </Card>
  </div>
);
