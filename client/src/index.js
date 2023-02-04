import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
import App from "./App";
// import Calander from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const ReactCalander = () => {
//   const [date, setDate] = useState(new Date());

//   const onChange = (date) => {
//     setDate(date);
//   };

//   return (
//     <div>
//       <Calander onChange={onChange} value={date} />
//       {console.log(date)}
//       {date.toString()}
//     </div>
//   );
// };

// render(<ReactCalander />, document.querySelector("#root"));

// serviceWorker.unregister();
