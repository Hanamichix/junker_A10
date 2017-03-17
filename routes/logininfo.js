var data = require("../data.json");
exports.getLoginData = function(req, res){
	console.log("login called!");
	var username = req.query.uname;
	var password = req.query.psw;
	console.log(username);
	console.log(password);
	var data1 = data.accounts;
	for (var i = 0; i < data1.length; i++) {
		if (data1[i].name == username) {
			res.render('index');
		}
	}
	res.render('login');
};