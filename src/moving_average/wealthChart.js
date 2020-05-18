import React, { Component } from "react";
import Chart from "react-apexcharts";
import { getTail } from "../utils";

export class WealthChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "WEALTH",
          data: getTail(props.data["wealth"], props.amount),
        },
      ],
      options: {
        chart: {
          id: props.title,
          type: "line",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "WEALTH",
          align: "left",
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
            format: "yyyy/MM/dd",
          },
        },
      },
      symbol: props.title,
    };
  }

  // componentWillReceiveProps is not recommended, use getDerivedStateFromProps as an alternative
  static getDerivedStateFromProps = (props, state) => {
    if (
      props.title !== state.symbol ||
      props.amount !== state.series[0].data.length
    ) {
      return {
        series: [
          {
            ...state.series[0].name,
            data: getTail(props.data["wealth"], props.amount),
          },
        ],
        options: {
          chart: {
            id: props.title,
            ...state.options.type,
          },
          ...state.options.dataLabels,
          ...state.options.stroke,
          ...state.options.title,
          xaxis: {
            ...state.options.xaxis.type,
            categories: getTail(props.data["date"], props.amount),
          },
          ...state.options.tooltip,
        },
        symbol: props.title,
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
