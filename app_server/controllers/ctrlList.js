const index = function(req, res) {
	res.render('list', {title:'List of songs'});
}

module.exports = {
	index
}