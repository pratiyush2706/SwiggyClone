import React from 'react';
import { CategoriesSection } from '../../components/CategoriesSection';

import { useStyles } from './useStyles';

export const Restaurants = ({ data }) => {
  const classes = useStyles();
  return (
    <main>
      {data.map(allCategories => (
        <div id={`${allCategories.category}`} key={allCategories.category} className={classes.container}>
            <CategoriesSection categoryDetails={allCategories} />
        </div>
      ))}
    </main>
  )
}
