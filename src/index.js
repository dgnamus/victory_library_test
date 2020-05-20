import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom";
import { VictoryBar, VictoryChart } from "victory";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

//MY FIRST TASTE OF GETTING SOME LIBRARY WORK

const data = [
  { year: 1, revenue: 100 },
  { year: 2, revenue: 200 },
  { year: 3, revenue: 250 },
  { year: 4, revenue: 50 }
];

const Demo = () => (
  <div>
    <h1>Victory testing</h1>
    <VictoryChart domainPadding={20}>
      <VictoryBar data={data} x="year" y="revenue" />
    </VictoryChart>
  </div>
);

render(<Demo />, document.getElementById("root"));
