var winston = require('winston');
var moment = require('moment');
const fs = require('fs');
const logDir = './log';

function log(info) {
    console.log(info);
    if(!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    var logger = new(winston.createLogger) ({
        transports: [
            new (winston.transports.Console)({
                colorize: true,
                level: 'info',
                timestamp: function(){
                    return moment().format("YYYY-MM-DD HH:mm:ss");
                }
            }),
            new (require('winston-daily-rotate-file'))({
                level: 'info',
                filename: `${logDir}/log`,
                prepend: true,
                timestamp: function(){
                    return moment().format("YYYY-MM-DD HH:mm:ss");
                }
            })
        ]
    });

    try{
        logger.info(info);
    }catch (exception){
        logger.error("Error=>" +exception);
    }
}

var info = "로그로 남길 내용";
log(info);