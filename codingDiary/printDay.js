let today = new Date();

let year = today.getFullYear();
let month = today.getMonth()+1;
let date = today.getDate();
let day = year+'.'+month+'.'+date;

module.exports.day = day;