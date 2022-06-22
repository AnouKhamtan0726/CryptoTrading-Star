import React, { useRef, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import TextField from "@mui/material/TextField";
import Button from "./button";
import SaveButton from "./SaveButton";
import OnlineUserCard from "./OnlineUserCard";
import EnteringUserCard from "./EnteringUserCard";
import BettingCard from "./BettingCard";
import ReactHighstock from "react-highcharts/ReactHighstock";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../../config.js";
import { useCookies } from "react-cookie";
import toastr from "toastr";
import "../../../../node_modules/toastr/build/toastr.min.css";

const SERVER_URL = config.SERVER_URL;

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-bottom-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const PriceChart = React.memo((props) => {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const chartConfig = {
    colors: [
      "#2b908f",
      "#90ee7e",
      "#f45b5b",
      "#7798BF",
      "#aaeeee",
      "#ff0066",
      "#eeaaee",
      "#55BF3B",
      "#DF5353",
      "#7798BF",
      "#aaeeee",
    ],

    chart: {
      spacingRight: 60,
      plotBackgroundImage: "/world_map.svg",
      height: 550,
      backgroundColor: "#131722",
    },

    credits: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },

    scrollbar: {
      enabled: false,
    },

    navigator: {
      enabled: false,
    },

    rangeSelector: {
      enabled: false,
    },

    xAxis: [
      {
        lineWidth: 1,
        tickWidth: 0,
        minorTickWidth: 50,
        labels: {
          style: {
            color: "white",
          },
        },
      },
      {
        lineWidth: 0,
        tickWidth: 0,
        minorTickWidth: 50,
        labels: {
          style: {
            color: "white",
          },
        },
      },
    ],

    yAxis: [
      {
        labels: {
          align: "right",
          x: 40,
          style: {
            color: "white",
          },
        },
        height: "85%",
        lineWidth: 0,
        gridLineDashStyle: "longdash",
        gridLineWidth: 1,
      },
      {
        labels: {
          enabled: false,
          style: {
            color: "white",
          },
        },
        top: "85%",
        height: "15%",
        lineWidth: 0,
        gridLineWidth: 0,
        tickWidth: 0,
      },
    ],

    tooltip: {
      split: true,
      outside: true,
      useHTML: true,
      shadow: false,
      borderWidth: 0,
      backgroundColor: "none",
      formatter: function () {
        var arr = [];

        arr[0] = `<h3>BTC/USDT</h3>`;

        if (!(this.points && this.points.length == 2)) return arr;

        var point = this.points[0].point;
        var v = Math.round(this.points[1].y / 10000) / 100.0;
        arr[0] += `<b>O: ${point.open.toFixed(2)}</b>`;
        arr[0] += `<b>C: ${point.close.toFixed(2)}</b><br/>`;
        arr[0] += `<b>H: ${point.high.toFixed(2)}</b>`;
        arr[0] += `<b>L: ${point.low.toFixed(2)}</b>`;
        arr[0] += `<b>V: ${v}M</b>`;

        return arr;
      },
    },

    plotOptions: {
      candlestick: {
        color: "#FC5F5F",
        upColor: "#31BAA0",
        lineColor: "#FC5F5F",
        upLineColor: "#31BAA0",
      },
    },
  };

  async function updateGraph() {
    try {
      if (!chartRef || !chartRef.current || !chartRef.current.chart) return;

      var response = await axios.post(SERVER_URL + "/get-rounds-info");
      var data = response.data;
      var ohlc = [],
        volume = [],
        volumeColors = [],
        dataLength = data.length,
        i = 0;

      props.setLatestPrice(data[dataLength - 1][6]);
      props.setManagePrice(data[dataLength - 1][4]);

      for (i = 0; i < dataLength; i += 1) {
        ohlc.push([
          data[i][0], // the date
          data[i][1], // open
          data[i][2], // high
          data[i][3], // low
          data[i][4], // close
        ]);

        volume.push([
          data[i][0], // the date
          data[i][5], // the volume
        ]);

        volumeColors.push(data[i][1] < data[i][4] ? "#31BAA0" : "#FC5F5F");
      }

      if (chartRef.current && chartRef.current.chart.series.length == 0) {
        chartRef.current.chart.addSeries({
          type: "candlestick",
          data: ohlc,
          // dataGrouping: {
          //     units: groupingUnits
          // }
        });

        chartRef.current.chart.addSeries({
          type: "column",
          name: "Volume",
          data: volume,
          yAxis: 1,
          colorByPoint: true,
          colors: volumeColors,
          // dataGrouping: {
          //     units: groupingUnits
          // }
        });
      } else if (chartRef.current) {
        chartRef.current.chart.series[0].update({
          data: ohlc,
        });

        chartRef.current.chart.series[1].update({
          data: volume,
        });

        var data = chartRef.current.chart.series[1].data;

        for (var i = 0; i < data.length; i++) {
          data[i].color = ohlc[i][1] < ohlc[i][4] ? "#31BAA0" : "#FC5F5F";
          data[i].graphic.attr({
            fill: ohlc[i][1] < ohlc[i][4] ? "#31BAA0" : "#FC5F5F",
          });
        }

        chartRef.current.chart.series[1].redraw();
      }

      setTimeout(updateGraph, 1000);
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    updateGraph();
  }, []);

  return <ReactHighstock config={chartConfig} ref={chartRef} />;
});

export default function CollapsibleTable() {
  const [tradingProfit, setTradingProfit] = useState(0);
  const [roundTime, setRoundTime] = useState(0);
  const [latestPrice, setLatestPrice] = useState(0);
  const [managePrice, setManagePrice] = useState(0);
  const [startLabel, setStartLabel] = useState("Graph Stop");
  const [graphMove, setGraphMove] = useState(0);
  const [cookies, removeCookie] = useCookies(["refreshToken"]);
  const [userStats, setUserStats] = useState({
    total: 0,
    trading: 0,
    online: 0,
  });
  const [roundInfo, setRoundInfo] = useState({
    round: {
      id: 0,
    },
    timeLeft: 0,
    buyers: 0,
    sellers: 0,
    totalBuy: 0,
    totalSell: 0,
  });
  const navigate = useNavigate();
  var intervalID = 0;

  async function getInfos() {
    try {
      var res = (await axios.post(SERVER_URL + "/get-user-stats")).data;

      setUserStats(res);

      res = (await axios.post(SERVER_URL + "/get-current-round")).data;

      console.log(res);

      setRoundInfo(res);
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
      }
    }
  }

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var settings = (await axios.post(SERVER_URL + "/get-admin-settings"))
        .data;

      setTradingProfit(settings.trading_profit);
      setRoundTime(settings.round_time);
      setStartLabel(settings.manage_started ? "Graph Start" : "Graph Stop");
      setGraphMove(settings.graph_move);
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
      }
    }
  }

  async function onSave() {
    try {
      await axios.post(SERVER_URL + "/save-admin-settings", {
        sqlInfo: {
          trading_profit: tradingProfit,
          round_time: roundTime,
        },
      });
      toastr.success("General Settings saved successfully.");
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
        return;
      } else if (error.response && error.response.status == 400) {
        toastr.error(error.response.data.msg);
      }
    }
  }

  async function onStart() {
    try {
      if (startLabel == "Graph Stop") {
        await axios.post(SERVER_URL + "/save-admin-settings", {
          sqlInfo: {
            manage_started: 1,
          },
        });
        toastr.success("Graph is stopped");
      } else {
        await axios.post(SERVER_URL + "/save-admin-settings", {
          sqlInfo: {
            manage_started: 0,
            graph_move: 0,
          },
        });
        toastr.success("Graph is started");
        setGraphMove(0);
      }

      setStartLabel(startLabel == "Graph Stop" ? "Graph Start" : "Graph Stop");
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
        return;
      } else if (error.response && error.response.status == 400) {
        toastr.error(error.response.data.msg);
      }
    }
  }

  async function onIncrease(value) {
    try {
      await axios.post(SERVER_URL + "/save-admin-settings", {
        sqlInfo: {
          graph_move: value,
        },
      });

      if (value == 1) {
        toastr.success("Price is increasing");
      } else {
        toastr.success("Price is decreasing");
      }

      setGraphMove(value);
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
        return;
      } else if (error.response && error.response.status == 400) {
        toastr.error(error.response.data.msg);
      }
    }
  }

  useEffect(() => {
    init();
    intervalID = setInterval(getInfos, 1000);
  }, []);

  useEffect(() => {
    return async () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <Box>
      <Paper>
        <Grid container justifyContent="space-around">
          <Grid item lg={9} md={12} sm={12} className="responsivecard">
            <Paper sx={{ padding: "20px" }}>
              <div
                className="tradingview-widget-container card"
                style={{ height: "500px" }}
              >
                <PriceChart
                  setLatestPrice={setLatestPrice}
                  setManagePrice={setManagePrice}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item lg={3} md={12} sm={12} className="responsivecard">
            <Paper sx={{ padding: "20px" }}>
              <Grid container justifyContent="space-around">
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  sx={{ paddingBottom: "10px" }}
                  className="responsivecard"
                >
                  <OnlineUserCard
                    userStats={userStats}
                    numberWithCommas={numberWithCommas}
                  />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  sx={{ paddingBottom: "10px" }}
                  className="responsivecard"
                >
                  <EnteringUserCard
                    userStats={userStats}
                    numberWithCommas={numberWithCommas}
                  />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="responsivecard"
                >
                  <BettingCard
                    roundInfo={roundInfo}
                    numberWithCommas={numberWithCommas}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Paper sx={{ padding: "20px" }}>
          <Box component="form" noValidate autoComplete="off">
            <Grid container justifyContent="space-between">
              <Grid item lg={6} xs={12} sx={{ padding: "10px" }}>
                <Typography
                  variant="h3"
                  sx={{ padding: "20px" }}
                  gutterBottom
                  component="div"
                >
                  General Setting
                </Typography>
                <Grid container>
                  <Grid item xs={6} sx={{ padding: "10px" }}>
                    <TextField
                      id="trading-profit"
                      label="Trading Profit"
                      variant="outlined"
                      value={tradingProfit}
                      fullWidth
                      type="number"
                      onChange={(e) => {
                        setTradingProfit(e.target.value);
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ padding: "10px" }}>
                    <TextField
                      id="round-wait"
                      label="Round Time"
                      variant="outlined"
                      fullWidth
                      value={roundTime}
                      type="number"
                      onChange={(e) => {
                        setRoundTime(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  sx={{ padding: "20px" }}
                >
                  <SaveButton onSave={onSave} />
                </Grid>
              </Grid>
              <Grid item lg={6} xs={12} sx={{ padding: "10px" }}>
                <Typography
                  variant="h3"
                  sx={{ padding: "20px" }}
                  gutterBottom
                  component="div"
                >
                  Main Setting
                </Typography>
                <Grid container>
                  <Grid item xs={6} sx={{ padding: "10px" }}>
                    <TextField
                      id="round-prediction"
                      label="Get Lastest Price"
                      variant="outlined"
                      fullWidth
                      value={latestPrice}
                      inputProps={{ readOnly: true }}
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ padding: "10px" }}>
                    <TextField
                      id="round-result"
                      label="Price management"
                      variant="outlined"
                      fullWidth
                      value={managePrice}
                      type="number"
                      onChange={(e) => {
                        setManagePrice(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  sx={{ padding: "20px" }}
                >
                  <Button
                    onStart={onStart}
                    onIncrease={onIncrease}
                    startLabel={startLabel}
                    graphMove={graphMove}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
}
