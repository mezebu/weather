import React from "react";
import { Box, CardContent, Typography, Stack } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PropTypes from "prop-types";

import { OverviewCard } from "../styles";

const Visibility = ({ value }) => {
  const visibility = value / 1000;

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
          <VisibilityOutlinedIcon fontSize="large" />

          <Box sx={{ ml: 5 }}>
            <Stack>
              <Typography color="text.secondary" variant="subtitle2">
                Visibility
              </Typography>
              <Typography variant="h5" fontWeight={600}>
                {Math.round(visibility)}
                <Typography component="span" fontWeight={500}>
                  {" "}
                  Km
                </Typography>
              </Typography>
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </OverviewCard>
  );
};

export default Visibility;

Visibility.propTypes = {
  value: PropTypes.number,
};
