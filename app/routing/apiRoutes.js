
var friends = require("../data/friends.js");
var newFriend;

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    newFriend = req.body
    friends.push(newFriend);
    res.json(true);

    var difference = 0;
    var matchId = 0;

    var diff = 100;

    for (var i=0; i< friends.length; i++) {
    	for (var j=0; j< 3; j++) {
    		difference = difference + math.abs(friends[i].scores[j] - req.body.scores[j]);
    	}

    	if (difference < diff) {

    		diff = difference;
    		matchId = i;
    	}
    	difference = 0;
    }

    friends.push(req.body);
    
  });

 	res.json(friends[i]);
};




