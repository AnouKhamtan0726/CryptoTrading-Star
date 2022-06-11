import * as React from "react";
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

export default function CollapsibleTable() {
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
                <TradingViewWidget
                  symbol="COINBASE:BTCUSD"
                  theme={Themes.DARK}
                  hide_top_toolbar={false}
                  toolbar_bg="#f1f3f6"
                  hide_legend={false}
                  locale="jp"
                  timezone="Asia/Tokyo"
                  interval="1"
                  details={1}
                  autosize
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
                  <OnlineUserCard />
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
                  <EnteringUserCard />
                </Grid>
                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="responsivecard"
                >
                  <BettingCard />
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
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ padding: "10px" }}>
                    <TextField
                      id="round-wait"
                      label="Round Time"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  sx={{ padding: "20px" }}
                >
                  <SaveButton />
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
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ padding: "10px" }}>
                    <TextField
                      id="round-result"
                      label="Price management"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  sx={{ padding: "20px" }}
                >
                  <Button />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
}
