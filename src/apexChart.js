import React, { Component } from "react";
import Chart from "react-apexcharts";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

export class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "apexchart-example"
        },
        xaxis: {
          categories: this.props.data.xs
        },
        theme: {
          mode: "light",
          palette: "palette2"
        }
      },
      series: [
        {
          name: "series-1",
          data: this.props.data.ys
        }
      ]
    };
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {this.state.options.chart.id}
          </Typography>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type={this.props.type}
            width={"100%"}
            height={"220"}
          />
        </CardContent>
      </Card>
    );
  }
}
