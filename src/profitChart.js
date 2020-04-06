import React from "react";
import ReactApexChart from "react-apexcharts";
import { getTail } from "./utils";

export class ProfitChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Profit",
          data: getTail(props.data["profit"], props.amount),
        },
      ],
      options: {
        chart: {
          type: "bar",
        },
        title: {
          text: "PROFIT",
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
          type: "datetime",
          categories: getTail(props.data["date"], props.amount),
          labels: {
            rotate: -90,
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
            data: getTail(props.data["profit"], props.amount),
          },
        ],
        options: {
          ...state.options.chart,
          ...state.options.title,
          ...state.options.plotOptions,
          ...state.options.dataLabels,
          ...state.options.yaxis,
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
          type="bar"
          height={this.props.height}
        />
      </div>
    );
  }
}
