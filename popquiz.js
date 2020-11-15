const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "jung5424",
    database: "popquizDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    sqlQuery(1)
    connection.end();
});

////////////////////////////////////////////////////////////////////////
// SQL
function sqlQuery(id){ 
    connection.query(
        "SELECT * FROM quiz WHERE id =" + id,
        function(err, res) {
            if(err) throw err;
            console.log(res);
        }
    );
}