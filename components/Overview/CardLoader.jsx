import React from "react";
import { CardContent, Skeleton } from "@mui/material";
import { Box, Card, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { OverviewCard } from "./styles";

const Loader = () => {
  return (
    <OverviewCard elevation={0} variant="outlined">
      <CardContent>
        <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />

          <Box sx={{ ml: 5 }}>
            <Stack spacing={2}>
              <Skeleton variant="text" width={90} />
              <Skeleton variant="text" />
            </Stack>
          </Box>
        </Box>
      </CardContent>
    </OverviewCard>
  );
};

export default Loader;
