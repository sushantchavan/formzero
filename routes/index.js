var express = require('express');
var router = express.Router();
var user = require('../collections/user').user
var form = require('../collections/form.json')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' , form: form, user: false});
});

router.get('/:slug', function(req, res) {
	var slug = req.params.slug;
	console.log('LEts do it');
	user.find(slug, function(err, data){
		if(err)
			res.json(err, 400);
		else(data)
			var user = data['user'];
			console.log('we got the man' + user)
			return res.render('index', {form:form, user: user});
	});
});

router.post('/', function(req, res) {
	var data = req.body
	user.add(data, function(err, user) {
		if(err)
			console.log('error in adding user');
		else
			res.send({code: 200, message: 'user added successfully'});
	})
});

module.exports = router;
