var session = require('express-session');

app.use(session({
    secret: '',
    resave: false,
    saveUninitialized: true
}));

app.get('/', function(req,res){
    sess = req.session;
});

app.get('/login', function(req,res){
    sess = req.session;
    sess.username = "username"
});

app.get('/', function(req,res){
    sess = req.session;
    console.log(sess.username);
});

req.session.destroy(function(err){

})

