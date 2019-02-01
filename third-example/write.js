var fs = require('fs');
var Promise = require('bluebird');
var readFile = Promise.promisify(fs.readFile);
var writeFile = Promise.promisify(fs.writeFile);

var promiseArray = 
    [
    readFile('firstName.txt'), 
    readFile('lastName.txt')
    ];

Promise.all(promiseArray).then((dataArray) => {
    var data = '';
    for(var i = 0; i < dataArray.length; i++){
            data += dataArray[i];
    }
    return writeFile('FullName.txt', data)
});