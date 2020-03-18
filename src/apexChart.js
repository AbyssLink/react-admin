import React, { Component } from "react";
import Chart from "react-apexcharts";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";

class Analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaderStyle: "block",
      contentStyle: "none",
      options: {
        chart: {
          id: "apexchart-example"
        },
        xaxis: {
          categories: props.data.idList
        },
        theme: {
          mode: "light",
          palette: "palette2"
        }
      },
      series: [
        {
          name: "series-1",
          data: props.data.userIdList
        }
      ],
      useStyles: makeStyles(theme => ({
        root: {
          flexGrow: 1
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: "center",
          color: theme.palette.text.secondary
        }
      }))
    };
  }
  componentDidMount() {
    console.log(this.state.series[0].data);
    this.setState({ loaderStyle: "none", contentStyle: "block" });
  }
  render() {
    return (
      <div>
        <Card>
          <CircularProgress
            color="secondary"
            style={{ display: this.state.loaderStyle }}
          />
          <div style={{ display: this.state.contentStyle }}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {this.state.options.chart.id}
              </Typography>
              <Chart
                options={this.state.options}
                series={this.state.series}
                type={this.props.type}
                width={"100%"}
                height={"200"}
              />
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default Analytics;
