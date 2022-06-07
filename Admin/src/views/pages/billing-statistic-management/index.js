import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import TotalMainWallet from './TotalMainWallet';
import TotalTradingWallet from './TotalTradingWallet';
import StatisticCard from './StatisticCard';
import BillingTable from './BillingTable';
import TextField from '@mui/material/TextField';
import Button from './button';

export default function StickyHeadTable() {
    return (
        <Box>
            <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
                <Grid container justifyContent="space-around">
                    <Grid item lg={3} md={12} sm={12} xs={12} className="responsivecard">
                        <TotalMainWallet />
                    </Grid>
                    <Grid item lg={3} md={12} sm={12} xs={12} className="responsivecard">
                        <TotalTradingWallet />
                    </Grid>
                    <Grid item lg={3} md={12} sm={12} xs={12} className="responsivecard">
                        <StatisticCard />
                    </Grid>
                </Grid>
            </Paper>
            <Paper sx={{ padding: '20px' }}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <Box component="form" noValidate autoComplete="off">
                        <Grid container justifyContent="space-around" alignItems="center">
                            <Grid item lg={3} md={3} sm={6} xs={6} sx={{ padding: '10px' }}>
                                <TextField id="trading-profit" label="Transaction Fee" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={6} sx={{ padding: '10px' }}>
                                <TextField id="round-wait" label="Once deposit / withdraw amount" variant="outlined" fullWidth />
                            </Grid>
                            <Grid item lg={3} md={3} sm={6} xs={6} sx={{ padding: '10px' }}>
                                <Button />
                            </Grid>
                        </Grid>
                    </Box>
                    <BillingTable />
                </Paper>
            </Paper>
        </Box>
    );
}
