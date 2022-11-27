let fs = require('fs');
fs.readFile('RightLeft.txt', 'utf-8', function (err, data) {

    if (err) {
        console.error(err)
        return
    }

    let sum = 0;
    const ar = data.split('');
    console.log(ar)

    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === '>') {
            sum++
        } else if (ar[i] === '<') {
            sum--
        }
    }
    console.log(sum);

    let s = 0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] === '>') {
            if (s < 0) {
                return i
            } s++

        } else if (ar[i] === '<') {
             s--
        }
        console.log(i)
    }
});
console.log("server is running", '\n',)
