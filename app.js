var express = require('express');
var app = express();
var request = require('request');
app.set('view engine', 'ejs');

//*************************
// ROUTES
// *************************
app.get('/',function(req,res){
  res.render('search')
})
app.get('/results', function(req,res){
  var query = req.query.search;
  var url = 'https://api.themoviedb.org/3/search/movie?api_key=2f2a2ba22cdc297f5cb6cfd14f93bab8&query='+ query;
  // send search results to client side
  request(url, function(error, response, body){
    if (!error && response.statusCode === 200) {
      var data = JSON.parse(body);
      res.render('results', {data: data});
    };
  });
});

// SERVER LISTEN
app.listen(8080, function() {
  console.log('SERVER STARTED: http://localhost:8080');
});