var mysql = require("mysql");

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root123",
    database: "db1",
    port: 3308,
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

// con.query("SELECT * FROM car", function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
// });
// con.query("CREATE DATABASE mydb1", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
// });

// con.query(
//     "SELECT car.nameCar as name_car, persons.lastName as name_person FROM car JOIN persons ON  car.personID = persons.personID",
//     function (err, result) {
//         if (err) throw err;
//         console.log("Result: " + result);
//     }
// );

con.query(
    "SELECT persons.lastName as name, car.nameCar FROM persons LEFT JOIN car on persons.personID = car.personID",
    function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    }
);
