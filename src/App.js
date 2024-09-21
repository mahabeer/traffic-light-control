import React, { useState, useEffect } from "react";
import "./App.css";
export function App(props) {
  const [passedTime, setPassedTime] = useState(0);
  const [extraTime, setextraTime] = useState(0);
  const [trafficLights, setTrafficLights] = useState({
    red: {
      time: 5,
      next: "yellow",
    },
    yellow: {
      time: 3,
      next: "green",
    },
    green: {
      time: 10,
      next: "red",
    },
  });
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const totalLightTime = trafficLights[activeLight].time + extraTime;
    const timerId = setInterval(() => {
      setPassedTime((prev) => prev + 1);

      if (passedTime >= totalLightTime) {
        setPassedTime(0);
        setextraTime(0);
        setActiveLight(trafficLights[activeLight].next);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [trafficLights, activeLight, passedTime, extraTime]);

  const handleClick = (lig) => {
    setActiveLight(lig);
    setPassedTime(0);
    setextraTime(0);
  };

  const handleTimeIncrease = (e) => {
    if (e.key === "Enter") {
      setextraTime(parseInt(e.target.value));
      e.target.value = "";
    }
  };
  return (
    <div className="App">
      <div className="remote-control">
        <div className="display">
          <h5>
            Time Left:{" "}
            {trafficLights[activeLight].time + extraTime - passedTime}
          </h5>
        </div>

        <input
          className="input-time"
          type="text"
          placeholder="Add Extra Time"
          onKeyUp={(e) => handleTimeIncrease(e)}
        />

        <div className="buttons">
          <button
            className={`button red-btn ${activeLight === "red" && "active"}`}
            onClick={() => handleClick("red")}>
            R
          </button>
          <button
            className={`button yellow-btn ${
              activeLight === "yellow" && "active"
            }`}
            onClick={() => handleClick("yellow")}>
            Y
          </button>
          <button
            className={`button green-btn ${
              activeLight === "green" && "active"
            }`}
            onClick={() => handleClick("green")}>
            G
          </button>
        </div>
      </div>
      <div className="trafficLights">
        <div className={`light ${activeLight === "red" && "active"}`}></div>
        <div className={`light ${activeLight === "yellow" && "active"}`}></div>
        <div className={`light ${activeLight === "green" && "active"}`}></div>
      </div>
    </div>
  );
}

export default App;
