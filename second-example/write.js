const fs = require('fs');

fs.writeFile('./firstName.txt', 'Gustaf ', (err1) => {
    fs.writeFile('./lastName.txt', 'Gustafsson', (err2) => {
        fs.readFile('firstName.txt', 'lastName.txt', (err3, data) => {
            if (err1 || err2 || err3) {
                console.error(err1|| err2 || err3)
            }
            let combinedData = data
            fs.writeFile('./fullName.txt', combinedData, (err) => {
                if (err) {
                    console.error(err)
                }
                else {
                    console.log('You have sucessfully created, First, Last and FullName!')
                }
            })
        })
    });
});