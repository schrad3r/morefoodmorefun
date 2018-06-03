const yelp = require('./yelp.js');
const food2fork = require('./food2fork.js');

yelp.getReviews("chom burger", "provo");
yelp.getRestaurants("chom burger", "provo");
food2fork.getRecipes("chocolate, flour");

