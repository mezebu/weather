import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";
import moment from "moment-timezone";

import { FlexAlignCenter, FlexSpaceBtw } from "../../styles/globalStyles";

const CardWidgets = ({ icon, title, weather, timezone }) => {
  const dateTime = moment
    .utc(weather, "X")
    .add(timezone, "seconds")
    .format("LT");

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <FlexSpaceBtw>
            <FlexAlignCenter>
              <Box sx={{ mr: 3 }}>{icon}</Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  gutterBottom
                >
                  {title}
                </Typography>
                <Typography variant="h5" fontWeight={600}>
                  {dateTime}
                </Typography>
              </Box>
            </FlexAlignCenter>
          </FlexSpaceBtw>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardWidgets;

CardWidgets.propTypes = {
  weather: PropTypes.number.isRequired,
  title: PropTypes.string,
  icon: PropTypes.object,
  timezone: PropTypes.number.isRequired,
};
