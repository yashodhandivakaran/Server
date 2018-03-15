module.exports = function (app) {
        app.get('/rfam/list', function (req, resp) {
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
                        const sql = "SELECT fr.rfam_acc, fr.rfamseq_acc, fr.seq_start, fr.seq_end \
                        FROM full_region fr, rfamseq rf, taxonomy tx \
                        WHERE rf.ncbi_id = tx.ncbi_id \
                        AND fr.rfamseq_acc = rf.rfamseq_acc \
                        AND tx.ncbi_id = 10116 \
                        AND is_significant = 1 LIMIT 10"

                        //execute sql query
                        con.query(sql, function (err, result) {
                                if (err) throw err;
                                
                                // console.log("Result: " + result);
                                resp.json(result);
                        });
                });
        });
}
