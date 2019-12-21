var http = require('http');

var options = {
    host: 'https://ko.wikipedia.org/wiki/%EC%BB%A4%ED%94%BC%EB%B9%88_%EC%95%A4%EB%93%9C_%ED%8B%B0%EB%A6%AC%ED%94%84',
    path: '/'
};

var req = http.get(options, function(res){
    //응답 처리
    var resData = '';
    res.on('data', function(chunk){
        resData += chunk;
    });

    res.on('end', function(){
        console.log(resData);
    });
});

req.on('error', function(err){
    console.log("오류발생 : "+err.message);
});
