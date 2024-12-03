var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "janlakshmi_multitstate"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;