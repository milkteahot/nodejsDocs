const fs = require('fs');
const printDay = require('./printDay');

//오늘의 기록
let name = '홍차23';
let level = 0;
let codingMin = 90;
let exerciseMin = 30;
let body = [];
body.push(printDay.day+`\n`);

function codingTest(codingMin){
    let result = name+'님이 '+ codingMin +'분동안 코딩했습니다';
    return result;
}
function exercise(exerciseMin){
    let todayEx = name+'님이 '+ exerciseMin + '분동안 운동했습니다';
    return todayEx;
}
level = function levelCalc(codingMin, exerciseMin){
    let todayLevel = codingMin+exerciseMin;
    return todayLevel;
}

let milktea = {
    name: name,
    codingTest: codingTest(codingMin),
    exercise: exercise(exerciseMin),
    level : level(codingMin,exerciseMin)
}

for(key in milktea) {
   body.push(key+':'+milktea[key]+`\n`) 
};

fs.writeFile('./day1.txt', body, (err) => {
    if(err){
        throw err;
    }
    fs.readFile('./day1.txt', (err,data) => {
        if(err){
            throw err;
        }
        console.log(data.toString(), 'day1');
    })
});

console.log(body, "body");