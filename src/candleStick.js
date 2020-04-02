import React, { Component } from "react";
import Chart from "react-apexcharts";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

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

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.state.options.title) {
      this.setState({
        series: [
          {
            ...this.state.series[0].name,
            data: nextProps.data
          }
        ],
        options: {
          ...this.state.options.chart,
          title: {
            text: nextProps.title,
            ...this.state.options.title.align
          },
          ...this.state.options.tooltip,
          ...this.state.options.xaxis,
          ...this.state.options.yaxis
        }
      });
    }
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
            STOCK HISTORY
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
