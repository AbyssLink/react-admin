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
          text: "AAPL",
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
            height={"450"}
          />
        </CardContent>
      </Card>
    );
  }
}
