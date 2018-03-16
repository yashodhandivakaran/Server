const noteRoutes = require('./note_routes');
const rfamRoutes = require('./rfam_routes');

module.exports = function(app) {
	noteRoutes(app);
	rfamRoutes(app)
}
