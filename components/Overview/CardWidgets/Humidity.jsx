import React from "react";
import { Box, CardContent, Stack, Typography } from "@mui/material";
import OpacityRoundedIcon from "@mui/icons-material/OpacityRounded";
import PropTypes from "prop-types";

import { OverviewCard } from "../styles";

const Humidity = ({ value }) => {
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
          <OpacityRoundedIcon fontSize="large" />

          <Box sx={{ ml: 5 }}>
            <Stack>
              <Typography color="text.secondary" variant="subtitle2">
                Humidity
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {value}
                <Typography component="span" fontWeight={500}>
                  {"%"}
                </Typography>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </OverviewCard>
  );
};

export default Humidity;

Humidity.propTypes = {
  value: PropTypes.number,
};
