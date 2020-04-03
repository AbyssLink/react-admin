import React from "react";
import { CandleStick } from "./candleStick";
import { AreaChart } from "./areaChart";
import { useQueryWithStore, Loading, Error } from "react-admin";

export const StockChart = props => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "stocks",
    payload: {
      id: props.symbol
    }
  });

  // const [chartData, setChartData] = useState("");

  if (!loaded) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  if (props.type === "candlestick") {
    return (
      <div>
        <CandleStick
          title={props.symbol}
          data={data}
          amount={props.amount}
          type={props.type}
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
        ></AreaChart>
      </div>
    );
  }
};
