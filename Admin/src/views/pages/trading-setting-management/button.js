import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const StopButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

const IncButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const DecButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.error.main,
  "&:hover": {
    backgroundColor: theme.palette.error.dark,
  },
}));

export default function CustomizedButtons(props) {
  const theme = useTheme();

  return (
    <Stack spacing={2} direction="row">
      <StopButton variant="contained" onClick={props.onStart}>
        {props.startLabel}
      </StopButton>
      <IncButton
        variant="contained"
        onClick={(e) => {
          props.onIncrease(1);
        }}
        disabled={props.startLabel == "Graph Stop" || props.graphMove == 1}
      >
        {props.graphMove == 1 ? "Increasing" : "Increase"}
      </IncButton>
      <DecButton
        variant="contained"
        onClick={(e) => {
          props.onIncrease(2);
        }}
        disabled={props.startLabel == "Graph Stop" || props.graphMove == 2}
      >
        {props.graphMove == 2 ? "Decreasing" : "Decrease"}
      </DecButton>
    </Stack>
  );
}
