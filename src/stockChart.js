import React from "react";
import { CandleStick } from "./candleStick";
import { useQueryWithStore, Loading, Error } from "react-admin";

export const StockChart = props => {
  const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "stocks",
    payload: {
      id: props.symbol
    }
  });

  if (!loaded) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div>
      <CandleStick title={props.symbol} data={data}></CandleStick>
    </div>
  );
};
