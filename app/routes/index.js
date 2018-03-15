const noteRoutes = require('./note_routes');
const rfamRoutes = require('./rfam_routes');

module.exports = function(app, db) {
	noteRoutes(app, db);
	rfamRoutes(app)
}
