const index = function(req, res) {
	res.render('pres', {title:'Presentations'});
}

module.exports = {
	index
}