# Server
Sample web server in Nodejs which serves get and post request. Includes mysql connection example too.

# Repository Structure
```Server/
|-- package.json
|-- server.js
|-- app/
    |-- routes
        |-- index.js
        |-- note_routes.js
        |-- rfam_routes.js
```

* `server.js` file is responsible for starting the server and the port on which server should run. All the request are passed to `routes` module.
* `app` module will contains the routes this server will entertain

## Request and Response
* `note_routes.js` have an example of get and post request. It contains both json and urlencoded request and response
```
app.get('/notes', function (req, resp) {
		resp.json({ error_code: 0, data: { msg: "Hello world" } } );
	});
```
* `rfam_routes.js` have an example of reading data from `mysql` database and return as json.
```
const mysql = require('mysql');
// create connection
const con = mysql.createConnection({
        host: "mysql-rfam-public.ebi.ac.uk",
        user: "rfamro",
        port: 4497,
        database: "Rfam"
});

// connect the connection
con.connect(function (err) {
        if (err) throw err;

        console.log("Connected!");

        // prepare sql query
        const sql = "SELECT * from Table"

        //execute sql query
        con.query(sql, function (err, result) {
                if (err) throw err;

                // console.log("Result: " + result);
                resp.json(result);
        });
});
```
 
