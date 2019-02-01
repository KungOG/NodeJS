/* This is needed for node and for readFile/writeFile to work. */ 
const fs = require('fs');

var options = {
    encoding : 'utf8',
    flag : 'r'
};

/* Here I read both first and lastname, take it's data */
fs.readFile('firstName.txt', options, (err1, data1) => {
    fs.readFile('lastName.txt', options, (err2, data2) => {
        if (err1 || err2) {
            console.error(err1 || err2)
        }
        /* The data from above is then added into one file and also make the file */
        let data = data1 + ' ' + data2;
        fs.writeFile('fullName.txt', data, (err) => {
           console.log('You created a Fullname!')
        });
    });
});
