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

export default function CustomizedButtons() {
  const theme = useTheme();

  return (
    <Stack spacing={2} direction="row">
      <StopButton variant="contained">Graph Stop</StopButton>
      <IncButton variant="contained">Increse</IncButton>
      <DecButton variant="contained">Decrese</DecButton>
    </Stack>
  );
}
