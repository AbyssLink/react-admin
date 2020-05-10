import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

const generateData = (pos, corrects) => {
  let len = 0;
  len = corrects.length / 10;
  return corrects.slice(pos * len, (pos + 1) * len);
};

export class HeatMap extends Component {
  constructor(props) {
    super(props);
    console.log(props.data["corrects"]);

    this.state = {
      series: [
        {
          name: "One",
          data: generateData(0, props.data["corrects"]),
        },
        {
          name: "Two",
          data: generateData(1, props.data["corrects"]),
        },
        {
          name: "Three",
          data: generateData(2, props.data["corrects"]),
        },
        {
          name: "Four",
          data: generateData(3, props.data["corrects"]),
        },
        {
          name: "Five",
          data: generateData(4, props.data["corrects"]),
        },
        {
          name: "Six",
          data: generateData(5, props.data["corrects"]),
        },
        {
          name: "Seven",
          data: generateData(6, props.data["corrects"]),
        },
        {
          name: "Eight",
          data: generateData(7, props.data["corrects"]),
        },
        {
          name: "Nine",
          data: generateData(8, props.data["corrects"]),
        },
        {
          name: "Ten",
          data: generateData(9, props.data["corrects"]),
        },
      ],
      options: {
        chart: {
          height: 600,
          type: "heatmap",
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [
                {
                  from: 1,
                  to: 1,
                  name: "right",
                  color: "#00A100",
                },
                {
                  from: 0,
                  to: 0,
                  name: "wrong",
                  color: "#FF0000",
                  //   color: "#FFB200",
                },
              ],
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
        },
        title: {
          text: "Corrects",
        },
      },
      data: props.data,
    };
  }

  // componentWillReceiveProps is not recommended, use getDerivedStateFromProps as an alternative
  static getDerivedStateFromProps = (props, state) => {
    if (props.data !== state.data) {
      return {
        series: [
          {
            name: "One",
            data: generateData(0, props.data["corrects"]),
          },
          {
            name: "Two",
            data: generateData(1, props.data["corrects"]),
          },
          {
            name: "Three",
            data: generateData(2, props.data["corrects"]),
          },
          {
            name: "Four",
            data: generateData(3, props.data["corrects"]),
          },
          {
            name: "Five",
            data: generateData(4, props.data["corrects"]),
          },
          {
            name: "Six",
            data: generateData(5, props.data["corrects"]),
          },
          {
            name: "Seven",
            data: generateData(6, props.data["corrects"]),
          },
          {
            name: "Eight",
            data: generateData(7, props.data["corrects"]),
          },
          {
            name: "Nine",
            data: generateData(8, props.data["corrects"]),
          },
          {
            name: "Ten",
            data: generateData(9, props.data["corrects"]),
          },
        ],
        options: {
          chart: {
            height: 600,
            type: "heatmap",
          },
          plotOptions: {
            heatmap: {
              shadeIntensity: 0.5,
              radius: 0,
              useFillColorAsStroke: true,
              colorScale: {
                ranges: [
                  {
                    from: 1,
                    to: 1,
                    name: "right",
                    color: "#00A100",
                  },
                  {
                    from: 0,
                    to: 0,
                    name: "wrong",
                    color: "#FF0000",
                    // color: "#FFB200",
                  },
                ],
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 1,
          },
          title: {
            text: "Corrects",
          },
        },
        data: props.data,
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
          type="heatmap"
          height={350}
        />
      </div>
    );
  }
}

export class PredictMap extends Component {
  constructor(props) {
    super(props);
    console.log(props.data["predicts"]);

    this.state = {
      series: [
        {
          name: "One",
          data: generateData(0, props.data["predicts"]),
        },
        {
          name: "Two",
          data: generateData(1, props.data["predicts"]),
        },
        {
          name: "Three",
          data: generateData(2, props.data["predicts"]),
        },
        {
          name: "Four",
          data: generateData(3, props.data["predicts"]),
        },
        {
          name: "Five",
          data: generateData(4, props.data["predicts"]),
        },
        {
          name: "Six",
          data: generateData(5, props.data["predicts"]),
        },
        {
          name: "Seven",
          data: generateData(6, props.data["predicts"]),
        },
        {
          name: "Eight",
          data: generateData(7, props.data["predicts"]),
        },
        {
          name: "Nine",
          data: generateData(8, props.data["predicts"]),
        },
        {
          name: "Ten",
          data: generateData(9, props.data["predicts"]),
        },
      ],
      options: {
        chart: {
          height: 600,
          type: "heatmap",
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [
                {
                  from: 1,
                  to: 1,
                  name: "right",
                  color: "#00A100",
                },
                {
                  from: 0,
                  to: 0,
                  name: "wrong",
                  //   color: "#FF0000",
                  color: "#FFB200",
                },
              ],
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
        },
        title: {
          text: "Predicts",
        },
      },
      data: props.data,
    };
  }

  // componentWillReceiveProps is not recommended, use getDerivedStateFromProps as an alternative
  static getDerivedStateFromProps = (props, state) => {
    if (props.data !== state.data) {
      return {
        series: [
          {
            name: "One",
            data: generateData(0, props.data["predicts"]),
          },
          {
            name: "Two",
            data: generateData(1, props.data["predicts"]),
          },
          {
            name: "Three",
            data: generateData(2, props.data["predicts"]),
          },
          {
            name: "Four",
            data: generateData(3, props.data["predicts"]),
          },
          {
            name: "Five",
            data: generateData(4, props.data["predicts"]),
          },
          {
            name: "Six",
            data: generateData(5, props.data["predicts"]),
          },
          {
            name: "Seven",
            data: generateData(6, props.data["predicts"]),
          },
          {
            name: "Eight",
            data: generateData(7, props.data["predicts"]),
          },
          {
            name: "Nine",
            data: generateData(8, props.data["predicts"]),
          },
          {
            name: "Ten",
            data: generateData(9, props.data["predicts"]),
          },
        ],
        options: {
          chart: {
            height: 600,
            type: "heatmap",
          },
          plotOptions: {
            heatmap: {
              shadeIntensity: 0.5,
              radius: 0,
              useFillColorAsStroke: true,
              colorScale: {
                ranges: [
                  {
                    from: 1,
                    to: 1,
                    name: "right",
                    color: "#00A100",
                  },
                  {
                    from: 0,
                    to: 0,
                    name: "wrong",
                    // color: "#FF0000",
                    color: "#FFB200",
                  },
                ],
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 1,
          },
          title: {
            text: props.title,
          },
        },
        data: "Predicts",
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
          type="heatmap"
          height={350}
        />
      </div>
    );
  }
}

export class RealMap extends Component {
  constructor(props) {
    super(props);
    console.log(props.data["reals"]);

    this.state = {
      series: [
        {
          name: "One",
          data: generateData(0, props.data["reals"]),
        },
        {
          name: "Two",
          data: generateData(1, props.data["reals"]),
        },
        {
          name: "Three",
          data: generateData(2, props.data["reals"]),
        },
        {
          name: "Four",
          data: generateData(3, props.data["reals"]),
        },
        {
          name: "Five",
          data: generateData(4, props.data["reals"]),
        },
        {
          name: "Six",
          data: generateData(5, props.data["reals"]),
        },
        {
          name: "Seven",
          data: generateData(6, props.data["reals"]),
        },
        {
          name: "Eight",
          data: generateData(7, props.data["reals"]),
        },
        {
          name: "Nine",
          data: generateData(8, props.data["reals"]),
        },
        {
          name: "Ten",
          data: generateData(9, props.data["reals"]),
        },
      ],
      options: {
        chart: {
          height: 600,
          type: "heatmap",
        },
        plotOptions: {
          heatmap: {
            shadeIntensity: 0.5,
            radius: 0,
            useFillColorAsStroke: true,
            colorScale: {
              ranges: [
                {
                  from: 1,
                  to: 1,
                  name: "right",
                  color: "#00A100",
                },
                {
                  from: 0,
                  to: 0,
                  name: "wrong",
                  //   color: "#FF0000",
                  color: "#FFB200",
                },
              ],
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
        },
        title: {
          text: "Reals",
        },
      },
      data: props.data,
    };
  }

  // componentWillReceiveProps is not recommended, use getDerivedStateFromProps as an alternative
  static getDerivedStateFromProps = (props, state) => {
    if (props.data !== state.data) {
      return {
        series: [
          {
            name: "One",
            data: generateData(0, props.data["reals"]),
          },
          {
            name: "Two",
            data: generateData(1, props.data["reals"]),
          },
          {
            name: "Three",
            data: generateData(2, props.data["reals"]),
          },
          {
            name: "Four",
            data: generateData(3, props.data["reals"]),
          },
          {
            name: "Five",
            data: generateData(4, props.data["reals"]),
          },
          {
            name: "Six",
            data: generateData(5, props.data["reals"]),
          },
          {
            name: "Seven",
            data: generateData(6, props.data["reals"]),
          },
          {
            name: "Eight",
            data: generateData(7, props.data["reals"]),
          },
          {
            name: "Nine",
            data: generateData(8, props.data["reals"]),
          },
          {
            name: "Ten",
            data: generateData(9, props.data["reals"]),
          },
        ],
        options: {
          chart: {
            height: 600,
            type: "heatmap",
          },
          plotOptions: {
            heatmap: {
              shadeIntensity: 0.5,
              radius: 0,
              useFillColorAsStroke: true,
              colorScale: {
                ranges: [
                  {
                    from: 1,
                    to: 1,
                    name: "right",
                    color: "#00A100",
                  },
                  {
                    from: 0,
                    to: 0,
                    name: "wrong",
                    // color: "#FF0000",
                    color: "#FFB200",
                  },
                ],
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 1,
          },
          title: {
            text: "Reals",
          },
        },
        data: props.data,
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
          type="heatmap"
          height={350}
        />
      </div>
    );
  }
}
