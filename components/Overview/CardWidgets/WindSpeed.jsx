import React from "react";
import { Box, CardContent, Typography, Stack } from "@mui/material";
import AirRoundedIcon from "@mui/icons-material/AirRounded";
import PropTypes from "prop-types";

import { OverviewCard } from "../styles";

const WindSpeed = ({ value }) => {
  return (
    <OverviewCard elevation={0} variant="outlined">
      <CardContent>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <AirRoundedIcon fontSize="large" />

          <Box sx={{ ml: 5 }}>
            <Stack>
              <Typography color="text.secondary" variant="subtitle2">
                Wind Speed
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {Math.round(value)}
                <Typography component="span" fontWeight={500}>
                  {" "}
                  Km/h
                </Typography>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </OverviewCard>
  );
};

export default WindSpeed;

WindSpeed.propTypes = {
  value: PropTypes.number,
};
