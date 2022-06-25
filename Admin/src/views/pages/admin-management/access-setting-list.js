import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import axios from 'axios'
import { useCookies } from "react-cookie";
import config from "../../../config.js";
import toastr from "toastr";
import "../../../../node_modules/toastr/build/toastr.min.css";
import { useNavigate } from "react-router-dom";

const SERVER_URL = config.SERVER_URL

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Admin",
  "Users",
  "Referral",
  "Trading",
  "Billing",
];

export default function MultipleSelectCheckmarks(props) {
  const [personName, setPersonName] = React.useState([]);
  const {val, id, disabled, updateRowsInfo, index} = props
  const [cookies, removeCookie] = useCookies(["refreshToken"]);
  const navigate = useNavigate()

  React.useEffect(() => {
    axios.defaults.headers.common["Authorization"] =
        "Basic " + cookies.refreshToken;
    setPersonName(val)
  }, [props.val, props.id])

  const handleChange = async (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    updateRowsInfo(index, 'access_setting', typeof value !== "string" ? value.join(",") : value)
    
    try {
        await axios.post(SERVER_URL + "/save-admin-info", {
          sqlInfo: { access_setting: typeof value !== "string" ? value.join(",") : value },
          adminId: id
        })
        toastr.success('Access setting is saved successfully')
      } catch (error) {
        if (error.response && error.response.status == 403) {
          navigate("/login");
        }
      }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }} onClick={(e) => e.stopPropagation()} disabled={disabled}>
        <InputLabel id="demo-multiple-checkbox-label">Access Settings</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Access Settings" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {names.map((name, key) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
