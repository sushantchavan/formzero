var mongoose = require('mongoose');
var URLSlugs = require('mongoose-url-slugs');

var userSchema = mongoose.Schema({
	
	"first_name" : String,
	"last_name": String,
	"address" : String,
	"age" : Number,
	"email" : String
});

userSchema.plugin(URLSlugs('first_name last_name', {field: 'slug'}));

var userModel = mongoose.model('User', userSchema);

var user = function () {};

user.find = function (data, callback) {
	if(typeof data !== 'undefined')
		var name = data.split('-');
	userModel.find({first_name: new RegExp('^'+name[0]+'$', "i"), last_name: new RegExp('^'+name[1]+'$', "i")}, function(err, user) {
		if(err)
			callback({'message': 'No users found','code': 404}, null)
		else
			callback(null, {'user': user[0]});
	});
};

user.add = function (data, callback) {
	console.log('Inside the create record');
	userModel.create(data, function (err,result){
		console.log(err)
		if(err)
			console.log('unable to add');
		else
			callback(null, {'user': result});
	});
}

module.exports.userModel = userModel;
module.exports.user = user;  