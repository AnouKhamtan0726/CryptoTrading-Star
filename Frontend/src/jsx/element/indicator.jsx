import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";

function Indicator(props) {
  var { width, id, title, buy, sell, neutral } = props;
  const [status, setStatus] = useState("NEUTRAL");
  const [angle, setAngle] = useState(0.5);
  var height, left, top, radius, pos = [], labels = ["STRONG SELL", "SELL", "NEUTRAL", "BUY", "STRONG BUY"];
  
  width = parseInt(width);
  height = width / 2.2222222 + 30;
  left = (width / 100) * 14 + 6;
  top = 15 + (width / 100) * 2.25 + 1.5;
  radius = height - 2 * top + 20;

  for (var ang = Math.PI / 10; ang < Math.PI; ang += Math.PI / 5) {
    pos.push({
      x: -Math.cos(ang) * radius,
      y: -Math.sin(ang) * radius,
    });
  }

  useEffect(() => {
      if (buy * sell != 0) {
        setAngle(buy / (buy + sell));
        setStatus(labels[Math.floor(buy / (buy + sell) * 5)])
      }
  }, []);

  return (
    <div className="jindicator" style={{ width: width, height: height }}>
      <h3 className="jindicator-title">{title}</h3>
      {[0, 1, 2, 3, 4].map((key) => {
        return (
          <label
            key={key}
            className={"jindicator-label"}
            style={{
              left: width / 2 - 25 + "px",
              top: height - top + "px",
              transform:
                "translate(" + pos[key].x + "px, " + pos[key].y + "px)",
            }}
          >
            {labels[key]}
          </label>
        );
      })}
      <div className="jindicator-stats">
          <div>
              <label className="jindicator-label sell">{sell}</label>
              <label className="jindicator-label">SELL</label>
          </div>
          <div>
              <label className="jindicator-label neutral">{neutral}</label>
              <label className="jindicator-label">NEUTRAL</label>
          </div>
          <div>
              <label className="jindicator-label buy">{buy}</label>
              <label className="jindicator-label">BUY</label>
          </div>
      </div>
      <label className="jindicator-label status">{status}</label>
      <div
        className="jindicator-background"
        style={{
          left: left + "px",
          top: top + "px",
          width: width - 2 * left + "px",
          height: height - 2 * top + "px",
        }}
      ></div>
      <GaugeChart
        id={id}
        style={{ width: width + "px", height: height + "px" }}
        nrOfLevels={5}
        colors={["#ef5450", "#f59896", "#cccccc", "#8ff0cb", "#31baa0"]}
        arcWidth={0.05}
        animate={true}
        needleColor={"#cccccc"}
        needleBaseColor={"#666666"}
        percent={angle}
        formatTextValue={() => ""}
      />
    </div>
  );
}

export default Indicator;

// 0170 55 99 058
