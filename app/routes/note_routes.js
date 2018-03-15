module.exports = function(app, db) {
	app.post('/notes', function (req, resp) {
		console.log(req.body);
		resp.send('hello');
	});
}
