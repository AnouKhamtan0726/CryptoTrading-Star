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

import TotalUserCard from "./TotalUserCard";
import UserStatisticCard from "./UserStatisticCard";

const SERVER_URL = config.SERVER_URL;

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
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <StyledTableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
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
        <TableCell>{row.current_status}</TableCell>
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
                    <TableCell sx={{ background: "#5e35b1", color: "white" }}>
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
                      {row.mainWalletAmount}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {row.tradingWalletAmount}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {convertTimeToGMT(row.createdAt, true)}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {convertTimeToGMT(row.last_online, true)}
                    </TableCell>
                    <TableCell sx={{ color: "black" }}>
                      {row.round}
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
          fullname: "Big Star",
          mainWalletAmount: "$3000",
          tradingWalletAmount: "$3000",
          round: "100 : (30/70)",
        },
      ],
    };
  }

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = (await axios.post(SERVER_URL + "/get-users-list")).data

      console.log(res)
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
                <StyledTableCell sx={{ borderTopRightRadius: "10px" }}>
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
