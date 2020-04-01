import React, { Component } from "react";
import Chart from "react-apexcharts";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import dayjs from "dayjs";

export class CandleStick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "candle",
          data: props.data
        }
      ],
      options: {
        chart: {
          id: "apexchart-example",
          type: "candlestick"
        },
        title: {
          text: props.title,
          align: "left"
        },
        tooltip: {
          enabled: true
        },
        xaxis: {
          type: "category"
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      }
    };
  }

  render() {
    if (this.state.series.data === false) {
      return (
        <Card>
          <CardContent>
            <Chart width={"100%"} height={"600"} />
          </CardContent>
        </Card>
      );
    }
    return (
      <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {this.state.options.chart.id}
          </Typography>
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="candlestick"
            width={"100%"}
            height={"600"}
          />
        </CardContent>
      </Card>
    );
  }
}
