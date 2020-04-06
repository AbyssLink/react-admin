class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Profit",
          data: props.data["profit"],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            colors: {
              ranges: [
                {
                  from: -100,
                  to: -46,
                  color: "#F15B46",
                },
                {
                  from: -45,
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
          title: {
            text: "Growth",
          },
          labels: {
            formatter: function (y) {
              return y.toFixed(0) + "%";
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: props.data["date"],
          labels: {
            rotate: -90,
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
