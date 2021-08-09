export function getSwiggyExclusiveRestaurants(data) {
  const allSwiggyRestaurants = [];
  data.forEach(category => {
    let allRestaurants = category.restaurantList.filter(restaurant => restaurant.isExlusive);
    allSwiggyRestaurants.push(...allRestaurants);
  });
  return {
    category: "Only on Swiggy",
    restaurantList: allSwiggyRestaurants,
  };
}

