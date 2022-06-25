import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useCookies } from "react-cookie";
import config from "../../../config.js";
import toastr from "toastr";
import "../../../../node_modules/toastr/build/toastr.min.css";
import CountryName from "./country-list";
import LanguageName from "./language-list";
import AccessSettings from "./access-setting-list";
import Roles from "./role-list";
import Button from "./button";
import TextField from "@mui/material/TextField";

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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    disablePadding: true,
    label: "Full Name",
    width: "200",
  },
  {
    id: "email",
    disablePadding: false,
    label: "Email",
    width: "300",
  },
  {
    id: "phone",
    disablePadding: false,
    label: "Phone",
    width: "300",
  },
  {
    id: "access",
    disablePadding: false,
    label: "Editable Setting",
    width: "150",
  },
  {
    id: "roles",
    disablePadding: false,
    label: "Role",
    width: "150",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            width={headCell.width}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected, isEditing, setIsEditing, setSelected } = props;
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    setEditing(isEditing)
  }, [isEditing])

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h3"
          id="tableTitle"
          component="div"
        >
          Administrators
        </Typography>
      )}

      {numSelected > 0 ? (
        <Grid container justifyContent="end">
          <Tooltip title="Edit">
          {editing ? 
            <IconButton onClick={(e) => {
              setIsEditing(false)
              setSelected([])
            }}>
              <CloseIcon />
            </IconButton> : <IconButton onClick={(e) => {
              setIsEditing(true)
            }}>
              <EditIcon />
            </IconButton>}
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton onClick={(e) => setSelected([])}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("email");
  const [selected, setSelected] = React.useState([]);
  const [isEditing, setIsEditing] = React.useState(false)
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(1000);
  const [rows, setRows] = useState([])
  const [cookies, removeCookie] = useCookies(["refreshToken"]);
  const navigate = useNavigate()
  const [countries, setCountries] = useState([])
  const [blockedCountries, setBlockedCountries] = useState('')
  const [languages, setLanguages] = useState('')

  async function init() {
    try {
      axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;

      var res = (await axios.post(SERVER_URL + "/get-admins-list")).data
      var res1 = (await axios.post(SERVER_URL + "/get-countries")).data
      var res2 = (await axios.post(SERVER_URL + "/get-admin-settings")).data

      setRows(res)
      setCountries(res1)
      setBlockedCountries(res2.blocked_countries)
      setLanguages(res2.languages ? res2.languages : '')
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    init()
  }, [])

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  async function onCountryChanged(val) {
    try {
      await axios.post(SERVER_URL + "/save-admin-settings", {
        sqlInfo: { blocked_countries: val.join(',') }
      })
      toastr.success('Blocked countries are saved successfully')
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
      }
    }
  }

  function updateRowsInfo(index, field, res) {
    var tmp = [...rows]

    for (var i = 0; i < tmp.length; i ++) {
      if (tmp[i].id == index) break
    }

    tmp[i][field] = res
    setRows(tmp)
  }

  async function onLanguageChanged(val) {
    try {
      await axios.post(SERVER_URL + "/save-admin-settings", {
        sqlInfo: { languages: val.join(',') }
      })
      toastr.success('Languages are saved successfully')
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
      }
    }
  }

  async function onDeleteRows() {

  }

  async function saveAdminInfo(adminId, field, res) {
    try {
      var sqlInfo = {}

      sqlInfo[field] = res

      await axios.post(SERVER_URL + "/save-admin-info", {
        sqlInfo: sqlInfo,
        adminId: adminId,
      })
      toastr.success('Admin information is saved')
    } catch (error) {
      if (error.response && error.response.status == 403) {
        navigate("/login");
      }
    }
  }

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  var val = blockedCountries == '' ? [] : blockedCountries.split(',')
  var valLang = languages == '' ? [] : languages.split(',')

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2, padding: "20px" }}>
          <Typography
            sx={{ flex: "1 1 100%", paddingLeft: "10px" }}
            variant="h3"
            id="tableTitle"
            component="div"
          >
            Site Setting
          </Typography>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item sm={4} xs={12}>
              <CountryName names={countries} onChanged={onCountryChanged} val={val} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <LanguageName onChanged={onLanguageChanged} val={valLang} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <Button />
            </Grid>
          </Grid>
        </Paper>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Paper sx={{ width: "100%", mb: 2, padding: "20px" }}>
          <EnhancedTableToolbar numSelected={selected.length} isEditing={isEditing} setIsEditing={setIsEditing} setSelected={setSelected} onDeleteRows={onDeleteRows} />
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.id);
                    const labelId = `enhanced-table-checkbox-${index}`;
                    const disabled = !(isItemSelected && isEditing)

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {disabled ? row.name : 
                          <TextField
                            id="round-prediction"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={row.name}
                            onClick={(e) => e.stopPropagation()}
                            onBlur={(e) => saveAdminInfo(row.id, 'name', e.target.value)}
                            onChange={(e) => updateRowsInfo(row.id, 'name', e.target.value)}
                          />}
                        </TableCell>
                        <TableCell>
                          {disabled ? row.email : 
                            <TextField
                              id="round-prediction"
                              label="Email"
                              variant="outlined"
                              fullWidth
                              value={row.email}
                              onClick={(e) => e.stopPropagation()}
                              onBlur={(e) => saveAdminInfo(row.id, 'email', e.target.value)}
                              onChange={(e) => updateRowsInfo(row.id, 'email', e.target.value)}
                            />}
                        </TableCell>
                        <TableCell>
                          {disabled ? row.phone : 
                            <TextField
                              id="round-prediction"
                              label="Email"
                              variant="outlined"
                              fullWidth
                              value={row.phone}
                              onClick={(e) => e.stopPropagation()}
                              onBlur={(e) => saveAdminInfo(row.id, 'phone', e.target.value)}
                              onChange={(e) => updateRowsInfo(row.id, 'phone', e.target.value)}
                            />}
                        </TableCell>
                        <TableCell>
                          {disabled ? (row.access_setting == '' ? 'No permissions' : row.access_setting) : 
                          <AccessSettings val={row.access_setting == '' ? [] : row.access_setting.split(',')} updateRowsInfo={updateRowsInfo} id={row.id} index={row.id} disabled={false} />}
                        </TableCell>
                        <TableCell>
                          {disabled ? (row.role == '' ? 'No roles' : row.role) : 
                          <Roles val={row.role == '' ? [] : row.role.split(',')} id={row.id} disabled={false} updateRowsInfo={updateRowsInfo} index={row.id} />}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}
