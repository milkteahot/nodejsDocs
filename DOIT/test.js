var fs = require('fs');
var logger = require('./logger.js');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists){
    if(exists) {
        fs.unlink(outname, function(err) {
            if(err) throw err;
            console.log('기존 파일 [' + outname + '] 삭제함');
        });
    }

    var infile = fs.createReadStream(inname, {flags: 'r'});
    var outfile = fs.createWriteStream(outname, {flags: 'w'});
    infile.pipe(outfile);
    logger.info('파일 복사 [' + inname+ '] -> [' + outname + ']' );
});
