var async = require('async');
const fs = require('fs');

async.each(['Pelle', 'Petsson'], function (file, callback) {
    
    fs.writeFile('./' + file + '.txt', JSON.stringify(file, null, 4), function (err){
        if (err) {
            console.log(err)
        } 
        else {
            console.log(file + '.txt was updated.');
        }
        callback();
    });

}, function (err) {
    if(err) {
        console.log('A file has failed to process');
    }
    else {
        console.log('All files have been processed successfully');
    }
});
