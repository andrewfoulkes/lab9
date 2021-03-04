/*
 * GET home page.
 */
var labs = require('../labs.json');

exports.view = function(req, res){
  if(labs.length < 9) {
  	// console.log(labs.length);
  	var todaysLab = {
		"id": "lab-9",
		"title": "Debugging 101",
		"date": "March 7",
		"image": "debug.png"
	};
	// console.log(todaysLab);
  	labs.push(todaysLab);
  }

  res.render('index', {
	'labs': labs
  });
};
