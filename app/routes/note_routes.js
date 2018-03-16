module.exports = function(app) {
	app.post('/notes', function (req, resp) {
		console.log(req.body);
		resp.send('hello');
	});
	app.get('/notes', function (req, resp) {
		resp.json({ error_code: 0, data: { msg: "Hello world" } } );
	});
	app.post('/notes/json', function (req, resp) {
		console.log(req.json);
		resp.json({ error_code: 0, data: { msg: "Hello world" } } );
	});
}
