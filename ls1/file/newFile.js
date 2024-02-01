var fs = require("fs");

// fs.appendFile("newFile1.txt", "Content 1 cccc", function (err) {
//     if (err) throw err;
//     console.log("Saved!");
// });

// fs.open("newFile2.txt", "w", function (err, file) {
//     if (err) throw err;
//     console.log("Saved!");
// });

// fs.writeFile("newFile1.txt", "Hello content!", function (err) {
//     if (err) throw err;
//     console.log("Saved!");
// });

fs.unlink("newFile3.txt", function (err) {
    if (err) throw err;
    console.log("File deleted!");
});

// fs.rename();
