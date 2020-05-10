import React from "react";
import ReactApexChart from "react-apexcharts";
import { getTail } from "../utils";

export class PdfChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "pdf",
          data: getTail(props.data["pdf"], props.amount),
        },
      ],
      options: {
        chart: {
          type: "line",
        },
        title: {
          text: "pdf of log return",
          align: "left",
          style: {
            fontSize: "20px",
            fontWeight: "bold",
          },
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -200,
                  to: -21,
                  color: "#F15B46",
                },
                {
                  from: -20,
                  to: 0,
                  color: "#FEB019",
                },
              ],
            },
            columnWidth: "80%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "%";
            },
          },
        },
        xaxis: {
          categories: getTail(props.data["x"], props.amount),
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
            data: getTail(props.data["pdf"], props.amount),
          },
        ],
        options: {
          ...state.options.chart,
          ...state.options.title,
          ...state.options.plotOptions,
          ...state.options.dataLabels,
          ...state.options.yaxis,
          xaxis: {
            categories: getTail(props.data["x"], props.amount),
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
          height={this.props.height}
        />
      </div>
    );
  }
}
