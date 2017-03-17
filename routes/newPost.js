
/*
 * GET home page.
 */
var data = require("../data.json");

exports.view = function(req, res){
  res.render('newPost');

};

exports.addPost= function(req, res){
	
//	console.log(req);
	var name = req.query.name;
	var description = req.query.description;
	//var contact = req.query.contact;
	var picture = req.query.picture;
	var items = data.items;
	var newItem = {
		'itemid': items[items.length - 1].itemid + 1,
		'name': name,
		'description': description,
		'owner': 1,
		'imageURL': picture,   
		'interested': [{
					"userid": null,
					"tradewith": null
		}],
		'added': true
	};
	items.push(newItem);
    var userid = 1;
	var myposts;
	var accounts = data.accounts;
	var items = data.items;
	for(var i = 0; i < accounts.length; i ++){  
        if(accounts[i].userid == userid){
        	myposts = accounts[i].posts;
        }       
    } 
    myposts.push(newItem.itemid);
    var posts = [];
	for(var i = 0; i < items.length; i ++){
		for(var j = 0; j < myposts.length; j ++){
			if(myposts[j] == items[i].itemid){
				posts.push(items[i]);
			}
		}
	}
//	newItem = null;
//	res.render('newPost');
    res.render('myPost', {'posts': posts});
	
}