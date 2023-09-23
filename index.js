var fs = require('fs');


function readWriteSync() {
    console.log("reading and writing from the file synchronously");
    const data = fs.readFileSync('./source/input.txt', { encoding: 'utf8', flag: 'r'});
    console.log('data has been read');
    fs.writeFileSync('./destination/output.txt', data, {encoding: 'utf8', flag: 'w'});
    console.log('Writing to the file has finished');
}

function readSyncWriteAsync() {
    console.log("reading from file sync and writing to the file async");
    const data = fs.readFileSync('./source/input.txt', { encoding: 'utf8', flag: 'r'});
    console.log('data has been read sync');
    fs.writeFile('./destination/output.txt', data, {encoding: 'utf8', flag: 'w'}, function (err, data) {
        if(err) {
            console.log('some error has happened while writing the data');
        } else {
            console.log('write to the file async has finished');
        }
    });
    console.log('Reading sync and writing async has finished');
}

function readAsyncWriteSync() {
    console.log("reading from file async and writing to the file sync");
    fs.readFile('./source/input.txt', { encoding: 'utf8', flag: 'r'}, function(err, data) {
        if(err) {
            console.log('Something went wrong while reading async');
        } else {
            fs.writeFileSync('./destination/output.txt', data, {encoding: 'utf8', flag: 'w'});
            console.log('Writing to the file sync has finished');
        }
    });
    console.log('Reading async and writing sync finished');
    for(let i=0;i<10;i++) {
        console.log('hello why wait ?!');
    }
}

function readAsyncWriteAsync() {
    console.log("reading from file async and writing to the file async");
    fs.readFile('./source/input.txt', { encoding: 'utf8', flag: 'r'}, function(err, data) {
        for(let i=0;i<100000000000000;i++) {
    
        }
        
        if(err) {
            console.log('Something went wrong while reading async');
        } else {
            console.log('reading async has finished');
            fs.writeFile('./destination/output.txt', data, {encoding: 'utf8', flag: 'w'}, function (errWrite, dataWrite) {
                if(errWrite) {
                    console.log('Something went wrong while writing async');
                } else {
                    console.log('Wrtiting to the file async has finished');
                }
            });
        }
    });
    console.log('Reading async and writing async has finished');
    for(let i=0;i<10;i++) {
        console.log('hello why wait ?!');
    }
}

readSyncWriteAsync();
//readWriteSync();
//readAsyncWriteSync();
//readAsyncWriteAsync();