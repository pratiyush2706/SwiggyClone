import React from "react";
import { Box, Typography } from "@material-ui/core";

import { useStyles } from "./useStyles";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";

const Sidebar = ({ data }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <nav className={classes.nav}>
        {data.map(allCategories => (
          <a href={`#${allCategories.category}`} key={allCategories.category} className={classes.anchor}>
          <Box display="flex" alignItems="center" justifyContent="center" padding="0 20px" height="85px" className={classes.category}>
            <Typography variant="h5" className={classes.text}>
              {capitalizeFirstLetter(allCategories.category)}
            </Typography>
          </Box>
          </a>
        ))}
      </nav>
    </Box>
  );
};

export default Sidebar;
