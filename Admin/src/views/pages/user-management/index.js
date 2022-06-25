import React, {useState, useEffect} from "react";
import { styled } from "@mui/material/styles";
import TablePagination from "@mui/material/TablePagination";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import Grid from "@mui/material/Grid";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useCookies } from "react-cookie";
import config from "../../../config.js";
import Web3 from 'web3'
import toastr from "toastr";
import "../../../../node_modules/toastr/build/toastr.min.css";

import TotalUserCard from "./TotalUserCard";
import UserStatisticCard from "./UserStatisticCard";

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
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

const SERVER_URL = config.SERVER_URL;
const RPC_URL = config.RPC_URL
const USDT_ADDRESS = config.USDT_ADDRESS
const USDT_ABI = config.USDT_ABI
const USDT_DECIMALS = config.USDT_DECIMALS

function convertTimeToGMT(time, flag = false) {
  if (flag) {
    return new Date(time).toISOString().slice(0, 19).replace("T", " ");
  }

  return new Date(
    new Date(time).toISOString().slice(0, 19).replace("T", " ")
  ).getTime();
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Row(props) {
  const [ row, setRow ] = useState(null);
  const [open, setOpen] = React.useState(false);
  const statusArr = ['Current', 'Current', 'Blocked(bad-user)', 'Blocked(bad-country)', 'Pendding(unverified)', 'Deleted']
  const [mainAmount, setMainAmount] = useState(0)
  const [tradingAmount, setTradingAmount] = useState(0)
  const navigate = useNavigate()
  const web3 = new Web3(RPC_URL),
    usdtContract = new web3.eth.Contract(USDT_ABI, USDT_ADDRESS);

  useEffect(() => {
    setRow(props.row)
  }, [])

  if (row == null) return <></>

  return (
    <>
      <StyledTableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={async() => {
              setOpen(!open)

              if (open == false) {
                var res = await Promise.all([
                  usdtContract.methods.balanceOf(row.trading_wallet).call(),
                  usdtContract.methods.balanceOf(row.main_wallet).call(),
                ]);
  
                setMainAmount(res[1] / 10 ** USDT_DECIMALS);
                setTradingAmount(res[0] / 10 ** USDT_DECIMALS);
              }
            }}
          >
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
        <TableCell>${row.earned.toFixed(2)} / ${row.lost.toFixed(2)}</TableCell>
        <TableCell>{statusArr[row.current_status]}</TableCell>
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
                    <TableCell sx={{ background: "#5e35b1", color: "white" }}>
                      Full name
                    </TableCell>
                    <TableCell sx={{ background: "#5e35b1", color: "white" }}>
                      Main Wallet
                    </TableCell>
                    <TableCell sx={{ background: "#5e35b1", color: "white" }}>
                      Trading Wallet
                    </TableCell>
                    <TableCell sx={{ background: "#5e35b1", color: "white" }}>
                      Started Date
                    </TableCell>
                    <TableCell sx={{ background: "#5e35b1", color: "white" }}>
                      Left Date
                    </TableCell>
                    <TableCell sx={{ background: "#5e35b1", color: "white" }} width="250">
                      Block/Unblock
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <StyledTableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ color: "black" }}
                    >
                      {row.first_name + ' ' + row.last_name}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {mainAmount}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {tradingAmount}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {convertTimeToGMT(row.createdAt, true)}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {convertTimeToGMT(row.last_online, true)}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={(row.current_status < 2 || row.current_status == 4) ? 1 : row.current_status}
                          label="Status"
                          onChange={async (e) => {
                            var tmp = {...row}

                            try {
                              await axios.post(SERVER_URL + '/update-user-block-status', {
                                user_id: row.id,
                                current_status: e.target.value
                              })

                              tmp.current_status = e.target.value
                              setRow(tmp)
                              toastr.success('Updating user status is completed successfully')
                            } catch (error) {
                              if (error.response && error.response.status == 403) {
                                navigate("/login");
                              }
                            }
                          }}
                        >
                          <MenuItem value={1}>Unblock</MenuItem>
                          <MenuItem value={2}>Block(bad-user)</MenuItem>
                          <MenuItem value={3}>Block(bad-country)</MenuItem>
                          <MenuItem value={5}>Delete</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [rows, setRows] = useState([])
  const [cookies, removeCookie] = useCookies(["refreshToken"]);
  const navigate = useNavigate()

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = (await axios.post(SERVER_URL + "/get-users-list")).data
      
      setRows(res)
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    init()
  }, [])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box>
      <Paper sx={{ padding: "20px", mb: 3 }}>
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
        <TableContainer component={Paper} sx={{ padding: "20px" }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ borderTopLeftRadius: "10px" }}>
                  Detail
                </StyledTableCell>
                <StyledTableCell>User Id</StyledTableCell>
                <StyledTableCell>Nick Name</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Earned/Lost</StyledTableCell>
                <StyledTableCell sx={{ borderTopRightRadius: "10px" }} width="200">
                  Status
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <Row key={row.id} row={row} />
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
