//Socketstream? Meteor? Kraken? Sail?

var express = require("express"),
    app = express(),
    http    = require("http"), //m http module
    server  = http.createServer(app),
    port = process.env.PORT || 8000

app.configure(function () {
  app.use(express.bodyParser()); 
  app.use(express.methodOverride());
  app.use(app.router); 
});

app.use('/files/files', express.static(__dirname + '/files/files'));

 app.get('/', function(req, res) {
          //console.log(req.url);  actual direction
     
          res.sendfile(__dirname + '/index.html');  
          //res.end("hello world!");    
      
      });
 var nodemailer = require('nodemailer');     //sending mail
 var transporter =nodemailer.createTransport({   //SMTP',
        service : 'Gmail',
        auth:{
              user: 'gonzalowtf@gmail.com',
              pass: 'aereomodelismo12'

              }
 }); 
 var v = '<strong>hi</strong>';
 v=v+'<img src= "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2lHr02wc7xuBx9miriHXSKQLbIo7yzlJmZRxn6itXpFHOQOq-NWPsEFk">'  
 
 var mailOptions = {
        from:'gustavojordan <gonzalowtf@gmail.com>',
        to:'gonzalowtf@gmail.com',
        subject: 'mail test',
        text :'working',
        html : v


 }

 app.get('/sendMail',function(req,res){

    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
      });



});

      
 
     
console.log(port);
server.listen(port, function(err) {
  if(err){
      console.log("error !" + err);
      
  }else{
      
  
  console.log("Node server running on http://localhost:8000 or online port");
}
    
});         