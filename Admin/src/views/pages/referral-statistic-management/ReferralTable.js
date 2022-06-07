import * as React from 'react';
import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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

function createData(id, name, name1, started, finished, status) {
    return {
        id,
        name,
        name1,
        started,
        finished,
        status,
        detail: [
            {
                accounts: '5',
                commision: '20',
                paidAmount: '$3000',
                willPayAmount: '$5000'
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
                <TableCell>{row.name1}</TableCell>
                <TableCell>{row.started}</TableCell>
                <TableCell>{row.finished}</TableCell>
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
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Accounts</TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Commission per month</TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Paid Amount</TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Will Pay Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.detail.map((detailRow) => (
                                        <StyledTableRow key={detailRow.commision}>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.accounts}</TableCell>
                                            <TableCell component="th" scope="row" sx={{ color: 'black' }}>
                                                {detailRow.commision}
                                            </TableCell>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.paidAmount}</TableCell>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.willPayAmount}</TableCell>
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
    createData(1, 'Bigstar', 'dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(2, 'Bigstar1', '1dark', '2022-3-9', '2022-5-9', 'End'),
    createData(3, 'Bigstar2', '2dark', '2022-3-9', '2022-5-9', 'End'),
    createData(4, 'Bigstar3', '3dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(5, 'Bigstar4', '4dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(6, 'Bigstar5', '6dark', '2022-3-9', '2022-5-9', 'End'),
    createData(7, 'Bigstar6', '5dark', '2022-3-9', '2022-5-9', 'End'),
    createData(8, 'Bigstar7', '7dark', '2022-3-9', '2022-5-9', 'End'),
    createData(9, 'Bigstar8', '8dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(10, 'Bigstar9', '9dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(11, 'Bigstar0', '0dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(12, 'Bigstar11', '11dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(13, 'Bigstar12', '12dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(14, 'Bigstar13', '13dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(15, 'Bigstar14', '14dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(16, 'Bigstar15', '15dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(17, 'Bigstar16', '16dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(18, 'Bigstar17', '17dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(19, 'Bigstar18', '18dark', '2022-3-9', '2022-5-9', 'Live'),
    createData(20, 'Bigstar19', 'black', '2022-3-9', '2022-5-9', 'Live'),
    createData(21, 'Bigstar20', 'black1', '2022-3-9', '2022-5-9', 'Live'),
    createData(22, 'Bigstar21', 'black2', '2022-3-9', '2022-5-9', 'Live'),
    createData(23, 'Bigstar22', 'black3', '2022-3-6', '2022-5-9', 'Live'),
    createData(24, 'Bigstar23', 'black4', '2022-3-6', '2022-5-9', 'Live'),
    createData(25, 'Bigstar24', 'black5', '2022-3-9', '2022-5-9', 'Live'),
    createData(26, 'Bigstar25', 'black6', '2022-3-9', '2022-5-9', 'Live'),
    createData(27, 'Bigstar26', 'black7', '2022-3-9', '2022-5-9', 'Live'),
    createData(28, 'Bigstar27', 'black8', '2022-3-2', '2022-5-9', 'Live'),
    createData(29, 'Bigstar28', 'black9', '2022-3-9', '2022-5-9', 'Live')
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
            <Paper>
                <TableContainer component={Paper} sx={{ padding: '20px' }}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell sx={{ borderTopLeftRadius: '10px' }}>Detail</StyledTableCell>
                                <StyledTableCell>No</StyledTableCell>
                                <StyledTableCell>From</StyledTableCell>
                                <StyledTableCell>To</StyledTableCell>
                                <StyledTableCell>Started</StyledTableCell>
                                <StyledTableCell>Finished</StyledTableCell>
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
