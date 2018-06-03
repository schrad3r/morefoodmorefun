const axios = require('axios');
const apiKey = 'aaf514be006c79f83eb8f081aeb57648';

exports.getRecipes = function(terms) {
 axios.get('http://food2fork.com/api/search?key=' + apiKey + '&q=' + terms)
   .then(response => {
   	
   	//console.log(response.data.recipes[1]);
   	for (i = 1; i < response.data.count; i++) {
   		console.log("\n" + response.data.recipes[i].title);
   		console.log(response.data.recipes[i].publisher);
   		console.log(response.data.recipes[i].source_url);
   		console.log(response.data.recipes[i].image_url + "\n");
   	}
   })
   .catch(error => {
   	console.log(error);
   })
}