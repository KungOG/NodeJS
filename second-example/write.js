const fs = require('fs');
/* 
First I create 2 files, with the text Gustaf and Gustafson inside.
after that I read both of them files, and collect their data in data1/2.
Last I add the data and created the full name. 
*/
fs.writeFile('./firstName.txt', 'Gustaf', (err) => {
    fs.writeFile('./lastName.txt', 'Gustafsson', (err1) => {
        fs.readFile('firstName.txt', (err2, data1) => {
            fs.readFile('lastName.txt', (err3, data2) => {
                let data = data1 + ' ' + data2;
                fs.writeFile('./fullName.txt', data, (err4) => {
                    if (err || err1 || err2 || err3 || err4) {
                        console.error(err || err1 || err2 || err3 || err4)
                    }   
                    else {
                        console.log('You have sucessfully created, First, Last then FullName!')
                    }
                })
            })
        })
    });
});