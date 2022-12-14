import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ position: "fixed", bottom: 0, width: "100%" }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        Henry {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
};

export default Footer;
