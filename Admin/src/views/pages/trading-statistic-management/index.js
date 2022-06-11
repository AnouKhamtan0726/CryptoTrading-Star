import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import OnlineUserCard from "./OnlineUserCard";
import EnteringUserCard from "./EnteringUserCard";
import BettingCard from "./BettingCard";

const columns = [
  { id: "roundId", label: "Round ID", minWidth: 70 },
  {
    id: "nickname",
    label: "Nick Name",
    minWidth: 70,
    align: "right",
  },
  {
    id: "started",
    label: "Started",
    minWidth: 70,
    align: "right",
  },
  {
    id: "finished",
    label: "Finished",
    minWidth: 70,
    align: "right",
  },
  {
    id: "result",
    label: "Result",
    minWidth: 70,
    align: "right",
  },
  {
    id: "baseprice",
    label: "Base Price",
    minWidth: 70,
    align: "right",
  },
  {
    id: "closedprice",
    label: "Closed Price",
    minWidth: 70,
    align: "right",
  },
];

function createData(
  roundId,
  nickname,
  started,
  finished,
  result,
  baseprice,
  closedprice
) {
  return {
    roundId,
    nickname,
    started,
    finished,
    result,
    baseprice,
    closedprice,
  };
}

const rows = [
  createData(
    "0001",
    "Bigstar",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0002",
    "Bigstar1",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0003",
    "Bigstar2",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0004",
    "Bigstar3",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0005",
    "Bigstar4",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0006",
    "Bigstar5",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0007",
    "Bigstar6",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0008",
    "Bigstar7",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0009",
    "Bigstar8",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0010",
    "Bigstar9",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0011",
    "Bigstar0",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0012",
    "Bigstar11",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0013",
    "Bigstar12",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0014",
    "Bigstar14",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
  createData(
    "0015",
    "Bigstar15",
    "Jun 06 2022 03:30:02",
    "Jun 06 2022 03:30:02",
    "Buy",
    "29990",
    "30200"
  ),
];

export default function StickyHeadTable() {
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
      <Paper sx={{ padding: "20px", marginBottom: "20px" }}>
        <Grid container justifyContent="space-around">
          <Grid item lg={3} md={12} sm={12} xs={12} className="responsivecard">
            <OnlineUserCard />
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12} className="responsivecard">
            <EnteringUserCard />
          </Grid>
          <Grid item lg={3} md={12} sm={12} xs={12} className="responsivecard">
            <BettingCard />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ padding: "20px" }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
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
      </Paper>
    </Box>
  );
}
