const mysql = require("mysql")
var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : "**********8",
    database : 'northwind' ,
    multipleStatements : true
})

mysqlConnection.connect((err)=>{
    if(err) return err
    console.log("Connected to Database") 
})

module.exports = mysqlConnection