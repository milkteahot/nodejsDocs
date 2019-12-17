//파일의 내용을 한 줄씩 읽어 들여 화면에 출력하는 기능을 만들자.
// 1. 하나의 파일을 만들고, 각 줄에 공백으로 구분된 이름 나이 번호 들어가도록
// 2. 파일의 내용을 한 줄식 읽어 들이면서 정보를 공백으로 구분
// 3. 구분된 정보 중에서 이름만 화면에 출력

var fs = require('fs');

// fs.writeFile('./output.txt', 'name: sky<br>age:13<br>number:010', function(err){
//     if(err) {
//         console.log('Error: ' + err)
//     }
//     console.log('output.txt 파일에 데이터 쓰기 완료');
// });

fs.readFile('./output.txt', 'utf8', function(err, data) {
    var str = data;
    var res = str.split(" ");
    for(var i in res) {
        console.log(res[i]);
    }
    console.log(res);
});

console.log('프로젝트 폴더 안의 output.txt 파일을 읽도록 요청했습니다.');