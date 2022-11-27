let fs = require('fs');
fs.readFile('text.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

console.log("Node JS File System", '\n',);