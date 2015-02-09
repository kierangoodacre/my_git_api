var app = require('express')();
var server = require('http').createServer(app);
var port = 9999;

app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.send('Github API Simulation');
});

app.get('/users/:user', function(request, response){
  response.header('Access-Control-Allow-Origin','*');
  response.header('Content-Type','application/json; charset=utf-8');
  response.render(request.params.user);
});

server.listen(port, function(){
  console.log('server listening on port: ' + port);
});

module.exports = server;