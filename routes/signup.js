

var data = require("../data.json");
exports.view = function(req, res){
  res.render('signup');
};
exports.signUp = function(req, res) {
	var name = req.query.name;
	var email = req.query.email;
	var password = req.query.password;
	var name = req.query.name;
	var bio = req.query.bio;
	var phone = req.query.phone;
	var accounts = data.accounts;
	var newUser = {
		"userid" : accounts[accounts.length - 1].userid + 1,
		"name": name,
		"email": email,
		"password": password,
		"posts": [],
		"bio": bio,
		"phone": phone,
		"facebook": "",
		"twitter": "",
		"match": [
		],
		"picture": "",
	}
	accounts.push(newUser);
	res.render('index');
}