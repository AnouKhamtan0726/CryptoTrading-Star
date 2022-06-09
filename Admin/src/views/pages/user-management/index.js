import * as React from 'react';
import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import Grid from '@mui/material/Grid';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import TotalUserCard from './TotalUserCard';
import UserStatisticCard from './UserStatisticCard';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

function createData(id, name, email, phone, statistic, status, price) {
    return {
        id,
        name,
        email,
        phone,
        statistic,
        status,
        price,
        detail: [
            {
                fullname: 'Big Star',
                mainWalletAmount: '$3000',
                tradingWalletAmount: '$3000',
                round: '100 : (30/70)'
            }
        ]
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <StyledTableRow>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.statistic}</TableCell>
                <TableCell>{row.status}</TableCell>
            </StyledTableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h3" gutterBottom component="div">
                                Detail
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Full name</TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Main Wallet</TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Trading Wallet</TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>
                                            Trading Ruonds (Successful/Failed)
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.detail.map((detailRow) => (
                                        <StyledTableRow key={detailRow.fullname}>
                                            <TableCell component="th" scope="row" sx={{ color: 'black' }}>
                                                {detailRow.fullname}
                                            </TableCell>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.mainWalletAmount}</TableCell>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.tradingWalletAmount}</TableCell>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.round}</TableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const rows = [
    createData(1, 'Bigstar', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(2, 'Bigstar1', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Block'),
    createData(3, 'Bigstar2', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Block'),
    createData(4, 'Bigstar3', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(5, 'Bigstar4', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(6, 'Bigstar5', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Block'),
    createData(7, 'Bigstar6', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Block'),
    createData(8, 'Bigstar7', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Block'),
    createData(9, 'Bigstar8', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(10, 'Bigstar9', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(11, 'Bigstar0', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(12, 'Bigstar11', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(13, 'Bigstar12', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(14, 'Bigstar13', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(15, 'Bigstar14', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(16, 'Bigstar15', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(17, 'Bigstar16', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(18, 'Bigstar17', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(19, 'Bigstar18', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(20, 'Bigstar19', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(21, 'Bigstar20', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(22, 'Bigstar21', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(23, 'Bigstar22', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(24, 'Bigstar23', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(25, 'Bigstar24', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(26, 'Bigstar25', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(27, 'Bigstar26', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(28, 'Bigstar27', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current'),
    createData(29, 'Bigstar28', 'test@gmail.com', '+1 937 579 0206', '$3000/$5000', 'Current')
];

export default function CollapsibleTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <Box>
            <Paper sx={{ padding: '20px', mb: 3 }}>
                <Grid container justifyContent="space-around">
                    <Grid item lg={5} md={12} sm={12} xs={12} className="responsivecard">
                        <TotalUserCard />
                    </Grid>
                    <Grid item lg={5} md={12} sm={12} xs={12}>
                        <UserStatisticCard />
                    </Grid>
                </Grid>
            </Paper>
            <Paper>
                <TableContainer component={Paper} sx={{ padding: '20px' }}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell sx={{ borderTopLeftRadius: '10px' }}>Detail</StyledTableCell>
                                <StyledTableCell>User Id</StyledTableCell>
                                <StyledTableCell>Nick Name</StyledTableCell>
                                <StyledTableCell>Email</StyledTableCell>
                                <StyledTableCell>Phone</StyledTableCell>
                                <StyledTableCell>Earned/Lost</StyledTableCell>
                                <StyledTableCell sx={{ borderTopRightRadius: '10px' }}>Status</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
