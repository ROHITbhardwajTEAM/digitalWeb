import React from "react";
import "./index.css";
import StateTime from "./StateTime";

import logo from './logo14.png';
function App() {
  const cssStyle = {};
  var greeting = new Date();
  var getdate = new Date().toDateString();

  greeting = greeting.getHours();

  // check mannual
  // var greeting =14;

  if (greeting >= 1 && greeting <= 11) {
    var greeting = " Good Morining";
    cssStyle.color = "green";
  } else if (greeting >= 12 && greeting <= 17) {
    var greeting = " Good Afternoon";
    cssStyle.color = " rgba(219, 112, 45, 0.855);";
  } else if (greeting >= 18 && greeting <= 24) {
    var greeting = " Good Night";
    cssStyle.color = "purple";
  }
 
  return (
    <>
     <div class="main">
  <div class="circle"></div>
  </div>
      <div className="container">
        <div className="logo">
          <img src={logo} height={100} width={100}/>
        </div>
        <nav>
          <ul>
            <li>Services</li>
            <li>Projects</li>
            <li>About</li>
            <li className="button">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="block">
        <h2>
          Hello sir,<span style={cssStyle}>{greeting} </span>
        </h2>
      </div>
      <br />
      <div className="dateblock">
        <h3 style={{ color: "white", alignContent: "center" }}>{getdate} </h3>
      </div>{" "}
 <StateTime/>

    </>
    
  );
}

export default App;
