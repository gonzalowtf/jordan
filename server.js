//Socketstream? Meteor? Kraken? Sail?

var express = require("express"),
    app = express(),
    http    = require("http"), //m http module
    server  = http.createServer(app),
    port = process.env.PORT || 8000


 app.get('/', function(req, res) {
          //console.log(req.url);  actual direction
     
          res.sendfile(__dirname + '/index.html');  
          //res.end("hello world!");    
      
      });
      
 app.use('/files/files', express.static(__dirname + '/files/files'));
     
console.log(port);
server.listen(port, function(err) {
  if(err){
      console.log("error !" + err);
      
  }else{
      
  
  console.log("Node server running on http://localhost:8000 or online port");
}
    
});         