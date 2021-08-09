import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from './useStyles';
import Sidebar from '../components/Sidebar';
import { getSwiggyExclusiveRestaurants } from '../utils/getSwiggyExclusiveRestaurants';
import { Restaurants } from './Restaurants';

export const Home = () => {
  const classes = useStyles();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    async function apiCall() {
      try {
        fetch("https://cdn.adpushup.com/reactTask.json")
        .then(res => res.json())
        .then(data => {
          const onlyOnSwiggy = getSwiggyExclusiveRestaurants(data);
          data.push(onlyOnSwiggy);
          setAllData(data);
        }
          );
      } catch(error) {
        console.log(error);
      }
    }
    apiCall();
  }, []);
  return (
    <Grid container className={classes.container}>
      <Grid item sm={false} md={4} className={classes.sidebar}>
        <Sidebar data={allData} />
      </Grid>
      <Grid item sm={12} md={8} className={classes.restaurants}>
        <Restaurants data={allData} />
      </Grid>
    </Grid>
  )
}
