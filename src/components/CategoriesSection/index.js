import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { getRandomImage } from "../../utils/getRandomImage";

import { useStyles } from "./useStyles";

export const CategoriesSection = ({ categoryDetails }) => {
  
  const classes = useStyles();
  const { category, restaurantList } = categoryDetails;
  return (
    <div className={classes.container}>
      <Typography variant="h3">{capitalizeFirstLetter(category)}</Typography>
      <Grid container className={classes.cardContainer}>
        {restaurantList.map((restaurant, index) => (
          <Grid item sm={12} key={`${restaurant.name}_${index}`} md={4} className={classes.card}>
              <img
                src={getRandomImage()}
                alt="Restuarant"
                className={classes.cardImage}
              />
              <Box marginTop="14px">
                <Typography variant="h5" className={classes.title}>
                  {restaurant.name}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="flex-start" marginTop="4px">
                  <Typography variant="caption" className={classes.type}>
                    {restaurant.food_types.join(",")}
                  </Typography>
              </Box>
              <Box display="flex" alignItems="center" marginTop="18px">
                <Box display="flex" alignItems="center" justifyContent="center" className={classes.rating}>
                  <Typography variant="caption" className={classes.ratingText}>
                    {restaurant.ratings ? restaurant.ratings : "--"}
                  </Typography>
                </Box>
                <Box margin="auto">
                  <Typography variant="caption" className={classes.dot}>
                •
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption">
                    {restaurant.delivery_time}
                  </Typography>
                </Box>
                <Box margin="auto">
                  <Typography variant="caption" className={classes.dot}>
                •
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption">
                  ₹{restaurant.price_for_two} for two
                  </Typography>
                </Box>
              </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
