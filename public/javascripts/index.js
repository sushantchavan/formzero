$(document).ready(function () {
	var val = '';
	form = $("#userForm");
	for(key in f) {
		form.append($("<div>", {id: key}))
		$('#'+key).append(
			$("<label/>", {text: f[key]})
		);
		if(typeof u != 'undefined')
			val = u[key]
		$('#'+key).append( 
			$("<input/>", { type:'text', placeholder:key, name:key, value: val })
		);
	}
	form.append($("<div>", {id: 'submit'}));
	if(!u)
		$('#submit').append($("<button/>", {type: 'submit', text: 'Submit'}))
	
});