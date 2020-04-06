import React, { Component } from "react";
import Chart from "react-apexcharts";
import { getTail } from "./utils";

export class CandleStick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: props.title,
          data: getTail(props.data, props.amount),
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
          type: "category",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
      },
    };
  }

  static getDerivedStateFromProps = (props, state) => {
    if (
      props.title !== state.options.title.text ||
      props.amount !== state.series[0].data.length
    ) {
      return {
        series: [
          {
            name: props.title,
            data: getTail(props.data, props.amount),
          },
        ],
        options: {
          chart: {
            id: props.title,
            ...state.options.chart.type,
          },
          ...state.options.dataLabels,
          title: {
            text: props.title,
            ...state.options.title.align,
            ...state.options.title.style,
          },
          ...state.options.tooltip,
          ...state.options.xaxis,
          ...state.options.yaxis,
        },
      };
    }
    // Return null to indicate no change to state.
    return null;
  };

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="candlestick"
        width={"100%"}
        height={this.props.height}
      />
    );
  }
}
