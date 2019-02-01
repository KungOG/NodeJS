/* Variables with bluebird module */
var fs = require('fs');
var Promise = require('bluebird');
var readFile = Promise.promisify(fs.readFile);
var writeFile = Promise.promisify(fs.writeFile);

var promiseArray = 
    [
    readFile('firstName.txt'), 
    readFile('lastName.txt')
    ];
/* 
Here is take the data from both of the files and loop the content inside out
and after that I take the content, create the full name with added content.
*/

Promise.all(promiseArray).then((dataArray) => {
    var data = '';
    for(var i = 0; i < dataArray.length; i++){
            data += dataArray[i];
    }
    return writeFile('FullName.txt', data)
});