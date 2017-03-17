var data = require("../data.json");
exports.view = function(req, res){
	var posts = data.accounts[1].matches;
	var items = {
		"items": [
		]
	}
	for(var i = 0; i < posts.length; i ++) {
		console.log(data.items[posts[i].youritem]);
		var ownerid = data.items[posts[i].item].owner;
		var youritemindex = posts[i].youritem;
		var hisitemindex = posts[i].item;
		var matchdata = {
			"id": data.items[youritemindex].userid,
			"youritem": data.items[youritemindex].name,
			"youritemdis": data.items[youritemindex].description,
			"yoururl": data.items[youritemindex].imageURL,
			"hisitem": data.items[hisitemindex].name,
			"hisitemindex": hisitemindex,
			"hisitemdis": data.items[hisitemindex].description,
			"hisurl": data.items[hisitemindex].imageURL,
			"hisname": data.accounts[ownerid].name,
			"email": data.accounts[ownerid].email

		}
		items.items.push(matchdata);
		//,data.accounts[ownerid]
	}
	res.render('match', items);
};
exports.info = function(req, res){
	var itemID = req.params.id;
	if (itemID == "random") {
		itemID = Math.floor(Math.random() * data.items.length);
	} else {
		itemID = parseInt(itemID);
	}

  	var item = data.items[itemID]; // of by one, our first project has index 0
  	res.json(item);
}
