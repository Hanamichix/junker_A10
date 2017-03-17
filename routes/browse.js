'use strict';
var data = require("../data.json");
exports.view = function(req, res){
	var t = {
		"items": [
		]
	}
	for (var i = 0; i < data.items.length; i++) {
		console.log("haha");
		if ((!data.items[i].deal) && (data.items[i].owner != 1)) {
			t.items.push(data.items[i])
		}
	}

  res.render('browse', t);

};


exports.getMatchData = function(req, res) {
	var itemid = req.params.itemid; // the item the user wants to exchange with
	var thisid = req.params.thisid; // the item the user interested in
	var items = data.items;
	var useritem = items[itemid];
	var thisitem = items[thisid];
	var interestlist = useritem.interested;
	for (var i = 0; i < interestlist.length; i++) {
		if (interestlist[i].tradewith == thisid) {
			break;
		}
		if (i == interestlist.length - 1) {
			var interested = data.items[thisid].interested;
			var newinterested = {
				"userid": 1,
				"tradewith": itemid
			}
			interested.push(newinterested);
			res.send([]);
			return;
		}
	}
	var userid = items[itemid].owner; // The browser's id
	var thisownerid = items[thisid].owner; // The item's owner's id
	var username = data.accounts[userid].name;
	var thisownername = data.accounts[thisownerid].name;
	var itemname = items[itemid].name;
	var thisname = items[thisid].name;
	data.items[itemid].deal = true;
	data.items[thisid].deal = true;
	var t = {
		"youritem": itemid,
		"item": thisid
	};
	data.accounts[userid].matches.push(t);
	t = {
		"youritem": thisid,
		"item": itemid
	};
	data.accounts[thisownerid].matches.push(t);
	//var postsarray1 = data.accounts[userid - 1].posts;
	//postsarray1.splice(postsarray1.indexOf(itemid), 1);
	//console.log(postsarray1);
	//var postsarray2 = data.accounts[thisownerid - 1].posts;
	//postsarray2.splice(postsarray2.indexOf(thisid), 1);
	//console.log(postarray2);
	res.send([username, itemname, thisownername, thisname])
	//return [thisid, itemid,items[thisid - 1].owner, items[itemid - 1].owner];

}