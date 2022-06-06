import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import TextField from '@mui/material/TextField';
import Button from './button';

export default function CollapsibleTable() {
    return (
        <Box>
            <Paper>
                <Paper sx={{ padding: '20px' }}>
                    <div className="tradingview-widget-container card" style={{ height: '500px' }}>
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
                <Paper sx={{ padding: '20px' }}>
                    <Typography variant="h3" sx={{ padding: '20px' }} gutterBottom component="div">
                        Trading Setting
                    </Typography>
                    <Box component="form" noValidate autoComplete="off">
                        <Grid container justifyContent="space-around">
                            <Grid item lg={3} md={3} sm={6} xs={6} sx={{ padding: '10px' }}>
                                <TextField id="trading-profit" label="Trading Profit" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={6} sx={{ padding: '10px' }}>
                                <TextField id="round-wait" label="Round Waitting" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={6} sx={{ padding: '10px' }}>
                                <TextField id="round-prediction" label="Round Prediction" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={6} sx={{ padding: '10px' }}>
                                <TextField id="round-result" label="Round Result" variant="outlined" fullWidth />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="center" sx={{ padding: '20px' }}>
                            <Button />
                        </Grid>
                    </Box>
                </Paper>
            </Paper>
        </Box>
    );
}
