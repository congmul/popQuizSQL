const mysql = require("mysql");
const inquirer = require("inquirer");
let quizId = 1;
let correct = 0;
let wrong = 0;

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
    sqlQuery(quizId);

});

////////////////////////////////////////////////////////////////////////
// SQL
function sqlQuery(id){ 
    connection.query(
        "SELECT * FROM quiz WHERE id =" + id,
        function(err, res) {
            if(err) throw err;
            // console.log(res);
            anwswerInquierer(res);
        }
    );
}

function anwswerInquierer(res){
    let id = res[0].id;
    let quiz = res[0].quiz;
    let answer = res[0].solution - 1;
    let ex = []
    ex.push(res[0].ex01);
    ex.push(res[0].ex02);
    ex.push(res[0].ex03);

    inquirer
        .prompt([
            {
                type: "rawlist",
                message : quiz,
                name: "answer",
                choices: ex
            }
        ]).then((res) =>{
            // console.log(res.answer);
            // console.log(ex[answer])
            if(res.answer === ex[answer]){
                console.log("Correct");
                correct++;
            }else{
                console.log("Wrong")
                wrong++;
            }

            if(quizId >= 3){
                console.log(`Correct: ${correct} / Wrong: ${wrong}`);
                console.log("Bye");
                connection.end();
                return;
            }

            quizId++
            sqlQuery(quizId);
        });
}