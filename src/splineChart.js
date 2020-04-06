import React, { Component } from "react";
import Chart from "react-apexcharts";

export class SplineChart extends Component {
  getTail = (list, amount) => {
    if (amount >= 300) {
      return list;
    } else {
      return list.slice(list.length - amount, list.length);
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "fast signal",
          data: this.getTail(props.data["fast"], props.amount),
        },
        {
          name: "slow signal",
          data: this.getTail(props.data["slow"], props.amount),
        },
        {
          name: "close",
          data: this.getTail(props.data["close"], props.amount),
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
          categories: this.getTail(props.data["date"], props.amount),
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.title !== this.state.options.title ||
      nextProps.type !== this.state.type
    ) {
      this.setState({
        series: [
          {
            ...this.state.series[0].name,
            data: this.getTail(nextProps.data["fast"], nextProps.amount),
          },
          {
            ...this.state.series[1].name,
            data: this.getTail(nextProps.data["slow"], nextProps.amount),
          },
          {
            ...this.state.series[2].name,
            data: this.getTail(nextProps.data["close"], nextProps.amount),
          },
        ],
        options: {
          ...this.state.options.stroke,
          ...this.state.options.dataLabels,
          title: {
            title: nextProps.title,
            ...this.state.options.title.style,
          },
          xaxis: {
            ...this.state.options.xaxis.type,
            categories: this.getTail(nextProps.data["date"], nextProps.amount),
          },
          ...this.state.options.tooltip,
        },
      });
    }
  }

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
