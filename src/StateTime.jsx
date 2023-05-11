import React, { useState } from "react";
import "./index.css";


const StateTime = () => {
  let newTime = new Date().toLocaleTimeString();

  const [count, setCount] = useState(newTime);
  // console.log(count);

  const dataDate = () => {
    let newTime = new Date().toLocaleTimeString();

    setCount(newTime);
  };
  setInterval(dataDate, 1000);

  return (
    <div className="container2">
      <h1>{newTime}</h1>
      {/* <button onClick={dataDate} className="btn">Get Time</button> */}
    </div>
  );
};

export default StateTime;
