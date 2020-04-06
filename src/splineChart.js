import React, { Component } from "react";
import Chart from "react-apexcharts";
import { getTail } from "./utils";

export class SplineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "fast signal",
          data: getTail(props.data["fast"], props.amount),
        },
        {
          name: "slow signal",
          data: getTail(props.data["slow"], props.amount),
        },
        {
          name: "close",
          data: getTail(props.data["close"], props.amount),
        },
      ],
      options: {
        stroke: {
          curve: "smooth",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: props.title,
          style: {
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
        xaxis: {
          type: "datetime",
          categories: getTail(props.data["date"], props.amount),
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  // componentWillReceiveProps is not recommended, use getDerivedStateFromProps as an alternative
  static getDerivedStateFromProps = (props, state) => {
    if (
      props.title !== state.options.title.text ||
      props.amount !== state.series[0].data.length
    ) {
      return {
        series: [
          {
            ...state.series[0].name,
            data: getTail(props.data["fast"], props.amount),
          },
          {
            ...state.series[1].name,
            data: getTail(props.data["slow"], props.amount),
          },
          {
            ...state.series[2].name,
            data: getTail(props.data["close"], props.amount),
          },
        ],
        options: {
          ...state.options.stroke,
          ...state.options.dataLabels,
          title: {
            title: props.title,
            ...state.options.title.style,
          },
          xaxis: {
            ...state.options.xaxis.type,
            categories: getTail(props.data["date"], props.amount),
          },
          ...state.options.tooltip,
        },
      };
    }

    // Return null to indicate no change to state.
    return null;
  };

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={this.props.height}
        />
      </div>
    );
  }
}
