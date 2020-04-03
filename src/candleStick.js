import React, { Component } from "react";
import Chart from "react-apexcharts";

export class CandleStick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "candle",
          data: props.data.slice(
            props.data.length - props.amount,
            props.data.length
          )
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
            data: nextProps.data.slice(
              nextProps.data.length - nextProps.amount,
              nextProps.data.length
            )
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
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="candlestick"
        width={"100%"}
        height={"600"}
      />
    );
  }
}
