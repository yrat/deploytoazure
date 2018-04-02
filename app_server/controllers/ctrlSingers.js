const request = require('request');
const apiURL = require('./apiURL');

function getSingers(res, render) {
	const path = '/api/singers';
	const reqOptions = {
		url:apiURL.server + path,
		method:'GET',
		json:{},
		qs:{},
	};

	request(
		reqOptions,
		function (err, response, body) {
			if (err)
				res.render('error', {message:err.message});
			else if (response.statusCode != 200)
				res.render('error', {message:"Error accessing API : " + 
				response.statusMessage + " (" + response.statusCode + ")"});
			else if (!(body instanceof Array))
				res.render('error', {message:"Unexpected response data"});
			else if (!body.length)
				res.render('error', {message:"No documents in collection"});
			else
				res.render(render, {"singers":body});
		}
	)
}

const list = function(req, res) {
	getSingers(res, "list");
}

const pres = function(req, res) {
	getSingers(res, "pres");
}

const index = function(req, res) {
	res.render('index');
}

module.exports = {
	index,
	list,
	pres
}