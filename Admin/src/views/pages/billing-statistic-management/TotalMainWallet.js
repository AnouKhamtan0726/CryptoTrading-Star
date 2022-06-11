import PropTypes from "prop-types";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Avatar, Box, Grid, Typography } from "@mui/material";

// project imports
import MainCard from "ui-component/cards/MainCard";
import SkeletonEarningCard from "ui-component/cards/Skeleton/EarningCard";

// assets
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.success.dark,
  color: "#fff",
  overflow: "hidden",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.success[200],
    borderRadius: "50%",
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.success[200],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
  const theme = useTheme();

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Grid item>
                      <Grid container alignItems="center">
                        <Grid item>
                          <Typography
                            sx={{
                              fontSize: "1.2rem",
                              fontWeight: 500,
                              mr: 1,
                              color: "#111936",
                            }}
                          >
                            Current Using Wallets
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Typography
                          sx={{
                            fontSize: "2.125rem",
                            fontWeight: 500,
                            mr: 1,
                            mt: 0.75,
                            mb: 1.75,
                          }}
                        >
                          250,000
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Avatar
                          sx={{
                            cursor: "pointer",
                            ...theme.typography.smallAvatar,
                            backgroundColor: theme.palette.success[200],
                            color: theme.palette.success.dark,
                          }}
                        >
                          <ArrowUpwardIcon
                            fontSize="inherit"
                            sx={{ transform: "rotate3d(1, 1, 1, 45deg)" }}
                          />
                        </Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sx={{ mb: 1.25 }}>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: theme.palette.success[200],
                  }}
                >
                  Total Main Accounts : 300,000
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool,
};

export default EarningCard;
