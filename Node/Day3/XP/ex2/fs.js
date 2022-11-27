let fs = require('fs');
//new content
let newContent = "Bla bla"

//writeFile method
fs.writeFile('data.txt', newContent + '\n', function (err) {
    if (err) {
        console.error(err)
        return
    }
});

//readFile method
fs.readFile('data.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
});

console.log("data from fs", '\n',);

//appending of the text to text file
let newContent1 = "Iam cool thanks"

fs.appendFile('data.txt', ' ' + newContent1 + '\n', function (err) {
    if (err) {
        console.error(err)
        return
    }
});

//deleting
fs.unlink('data.txt', function (err) {
    console.log('write file deleted');
});