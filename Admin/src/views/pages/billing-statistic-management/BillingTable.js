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
                trxFee: '$2000',
                trxAmount: '$1000 / $2000',
                depositeAddress: '0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91',
                withdrawAddress: '0x30c6961Fe4d39A7b9805199131F535B8F2EdEf91'
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
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Transaction Fee</TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>
                                            Transaction Amount (Deposite/Withdraw)
                                        </TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Deposite Address</TableCell>
                                        <TableCell sx={{ background: '#5e35b1', color: 'white' }}>Withdraw Address</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.detail.map((detailRow) => (
                                        <StyledTableRow key={detailRow.trxFee}>
                                            <TableCell component="th" scope="row" sx={{ color: 'black' }}>
                                                {detailRow.trxFee}
                                            </TableCell>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.trxAmount}</TableCell>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.depositeAddress}</TableCell>
                                            <TableCell sx={{ color: 'black' }}>{detailRow.withdrawAddress}</TableCell>
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
    createData(1, '0001', '$4932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(2, '00011', '$1932 / Deposite', '2022-3-9', '$2345', '$6456'),
    createData(3, '00012', '$2932 / Deposite', '2022-3-9', '$2345', '$6456'),
    createData(4, '00013', '$3932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(5, '00014', '$4932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(6, '00015', '$6932 / Deposite', '2022-3-9', '$2345', '$6456'),
    createData(7, '00016', '$5932 / Deposite', '2022-3-9', '$2345', '$6456'),
    createData(8, '00017', '$7932 / Deposite', '2022-3-9', '$2345', '$6456'),
    createData(9, '00018', '$8932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(10, '00019', '$9932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(11, '00010', '$0932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(12, '000111', '$11932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(13, '000112', '$12932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(14, '000113', '$13932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(15, '000114', '$14932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(16, '000115', '$15932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(17, '000116', '$16932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(18, '000117', '$17932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(19, '000118', '$18932 / Deposite', '2022-3-9', '$2345', '$5234'),
    createData(20, '000119', '$23422 / WithDraw', '2022-3-9', '$2345', '$5234'),
    createData(21, '000120', '$23421 / WithDraw', '2022-3-9', '$2345', '$5234'),
    createData(22, '000121', '$23422 / WithDraw', '2022-3-9', '$2345', '$5234'),
    createData(23, '000122', '$23423 / WithDraw', '2022-3-6', '$2345', '$5234'),
    createData(24, '000123', '$23424 / WithDraw', '2022-3-6', '$2345', '$5234'),
    createData(25, '000124', '$23425 / WithDraw', '2022-3-9', '$2345', '$5234'),
    createData(26, '000125', '$23426 / WithDraw', '2022-3-9', '$2345', '$5234'),
    createData(27, '000126', '$23427 / WithDraw', '2022-3-9', '$2345', '$5234'),
    createData(28, '000127', '$23428 / WithDraw', '2022-3-2', '$2345', '$5234'),
    createData(29, '000128', '$23429 / WithDraw', '2022-3-9', '$2345', '$5234')
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
                                <StyledTableCell>Account ID</StyledTableCell>
                                <StyledTableCell>Transaction Amount (deposit/withdraw)</StyledTableCell>
                                <StyledTableCell>Date</StyledTableCell>
                                <StyledTableCell>Current Main Wallet Amount</StyledTableCell>
                                <StyledTableCell sx={{ borderTopRightRadius: '10px' }}>Current Main Trading Amount</StyledTableCell>
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
