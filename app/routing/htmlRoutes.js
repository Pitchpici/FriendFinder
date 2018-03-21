

var path = require("path");


module.exports = function(app) {

		//route that sends to survey page
		app.get("/survey", function(req, res) {
		  res.sendFile(path.join(__dirname, "../public/survey.html"));
		});

		//route that sends to home page
		app.get("/", function(req, res) {
		  res.sendFile(path.join(__dirname, "../public/home.html"));
		});

};


