var data = require("../data.json");
exports.getItemData = function(req, res){
	var userid = req.params.userid;
	var itemid = data.accounts[userid].posts;
	var itemlist = [];
	
	for (var i = 0; i < itemid.length; i ++) {
		if (!data.items[itemid[i]].deal) {
			var iteminfo = data.items[itemid[i]]; //Use the item id to search for item information
			itemlist.push(iteminfo);
		}
	}
	console.log(itemlist);
	res.json(itemlist);
};
