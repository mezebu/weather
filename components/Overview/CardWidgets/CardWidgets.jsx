import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import React from "react";

const CardWidgets = ({ type }) => {
  return (
    <Card
      elevation={0}
      sx={{
        "&:hover": { background: grey[100] },
        backgroundColor: grey[50],
      }}
    >
      <CardContent>
        <Box
          sx={{
            p: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar />
          <Box sx={{ ml: 5 }}>
            <Typography color="text.secondary" variant="subtitle2">
              {type}
            </Typography>
            <Typography variant="h5">12</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardWidgets;
