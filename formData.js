var formData = new FormData();

formData.append('username', "James");
formData.append('accountnum', 1234);

var content = '<h1>Hello World!</h1>';
var blob = new Blob([content], {type: "text/xml"});

formData.append("webmasterfile", blob);

var request = new XMLHttpRequest();
request.open("POST", "https://jsonplaceholder.typicode.com/posts");
request.send(formData);

console.log(request);

