import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { getTail } from "./utils";

export class SplineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "CLOSE",
          data: getTail(props.data["close"], props.amount),
        },
        {
          name: "FAST SIGNAL",
          data: getTail(props.data["fast"], props.amount),
        },
        {
          name: "SLOW SIGNAL",
          data: getTail(props.data["slow"], props.amount),
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
        theme: {
          palette: "palette1",
        },
        title: {
          text: props.title + " SIGNAL",
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
            data: getTail(props.data["close"], props.amount),
          },
          {
            ...state.series[1].name,
            data: getTail(props.data["fast"], props.amount),
          },
          {
            ...state.series[2].name,
            data: getTail(props.data["slow"], props.amount),
          },
        ],
        options: {
          chart: {
            id: props.title,
            ...state.options.type,
          },
          ...state.options.dataLabels,
          ...state.options.stroke,
          ...state.options.theme,
          title: {
            text: props.title + " SIGNAL",
            ...state.options.title.align,
            ...state.options.title.style,
          },
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
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={"100%"}
          height={this.props.height}
        />
      </div>
    );
  }
}
