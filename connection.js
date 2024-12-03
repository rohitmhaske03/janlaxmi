var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host": "bzxjkeu9dcrjwawwkve2-mysql.services.clever-cloud.com",
    "user": "uuc4hc9sk5s5ax44",
    "password": "Pu7VeDDuVIcWwGNYgaV6",
    "database": "bzxjkeu9dcrjwawwkve2"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
