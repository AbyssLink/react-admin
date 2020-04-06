import React from "react";
import { Error, Loading, useQueryWithStore } from "react-admin";
import { AreaChart } from "./areaChart";
import { CandleStick } from "./candleStick";
import { LineChart } from "./lineChart";

export const StockChart = (props) => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "stocks-history",
    payload: {
      id: props.symbol,
    },
  });

  // const [chartData, setChartData] = useState("");
  const height = 305;

  if (!loaded) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
    // return <div>ERROR!</div>;
  }
  if (data["success"] === false) {
    return <div>ERROR! No such stock!</div>;
  }
  if (props.type === "candlestick") {
    return (
      <div>
        <CandleStick
          title={props.symbol}
          data={data}
          amount={props.amount}
          type={props.type}
          height={height}
        ></CandleStick>
      </div>
    );
  } else if (props.type === "area") {
    return (
      <div>
        <AreaChart
          title={props.symbol}
          data={data}
          amount={props.amount}
          type={props.type}
          height={height}
        ></AreaChart>
      </div>
    );
  } else if (props.type === "line") {
    return (
      <div>
        <LineChart
          title={props.symbol}
          data={data}
          amount={props.amount}
          type={props.type}
          height={height}
        ></LineChart>
      </div>
    );
  }
};
