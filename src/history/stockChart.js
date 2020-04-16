import React from "react";
import { Error, Loading, useQueryWithStore } from "react-admin";
import { AreaChart } from "./areaChart";
import { CandleStick } from "./candleStick";
import { ErrorCard } from "../ErrorCard";
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

  if (!loaded) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (data["success"] === false) {
    return <ErrorCard></ErrorCard>;
  }
  if (props.type === "candlestick") {
    return (
      <div>
        <CandleStick
          title={props.symbol}
          data={data}
          amount={props.amount}
          type={props.type}
          height={props.height}
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
          height={props.height}
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
          height={props.height}
        ></LineChart>
      </div>
    );
  }
};
