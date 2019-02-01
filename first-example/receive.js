const fs = require('fs');

fs.readFile(firstNamePath, function (err, data1) {
    fs.readFile(lastNamePath, function (err, data2) {
        if(err1 || err2) {
            throw new Error();
        }
        let data = data1 + data2;
        fs.writeFile('fullName.txt', data)
    });
});