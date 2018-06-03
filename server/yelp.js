const yelp = require('yelp-fusion');
const apiKey = 'Ilb7VWN2mVUow338qS7WxU9KZ-YJig7Pe3zN1AQX_z_ucB5BEorm6zBER5zdWYAa4_nsnjYovoIu2umdy4OMp7sPEKl6Y8THM-8q92dwKpyN0waQQ-oRuaUWikwPW3Yx';
const client = yelp.client(apiKey);

'use strict';

exports.getRestaurants = function(term, location) {
  client.search({
      term: term,
      location: location
  }).then(response => {
  	for (i = 1; i < Object.keys(response.jsonBody.businesses).length; i++) {
  	  console.log(response.jsonBody.businesses[i].name);
  	  console.log(response.jsonBody.businesses[i].rating + "/5");
  	  console.log(response.jsonBody.businesses[i].image_url + "\n");
  	}
  }).catch(e => {
      console.log(e);
});
}

exports.getReviews = function(term, location) {
  var strippedTerm = term.replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|\.|>|\?|\/|\\|\||-|_|\+|=)/g,"");
  var strippedLocation = location.replace(/[\s,]+/g, "-");

   // fix stripped location
  client.reviews(strippedTerm.split(" ").join("-") + "-" + strippedLocation).then(response => {
  	for (i = 0; i < Object.keys(response.jsonBody.reviews).length; i++) {
  		console.log(response.jsonBody.reviews[i].text + "\n");
  		//console.log(response.jsonBody.reviews[i].rating + "/5\n");
  	}
  }).catch(e => {
  	console.log(e);
  });
}