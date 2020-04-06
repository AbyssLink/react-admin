import React, { Component } from "react";
import Chart from "react-apexcharts";

export class TestCandleStick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: props.title,
          data: [
            {
              x: "2019-09-01",
              y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
            {
              x: "2019-09-02",
              y: [6632.01, 6643.59, 6620, 6630.11],
            },
            {
              x: "2019-09-05",
              y: [6630.71, 6648.95, 6623.34, 6635.65],
            },
            {
              x: "2019-09-04",
              y: [6635.65, 6651, 6629.67, 6638.24],
            },
            {
              x: "2019-09-07",
              y: [6638.24, 6640, 6620, 6624.47],
            },
          ],
        },
      ],
      options: {
        chart: {
          id: props.title,
          type: "candlestick",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: props.title,
          align: "left",
          style: {
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
        tooltip: {
          enabled: true,
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="candlestick"
        width={"100%"}
        height={300}
      />
    );
  }
}
