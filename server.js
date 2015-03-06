//Socketstream? Meteor? Kraken? Sail?

var express = require("express"),
    app = express(),
    http    = require("http"), //m http module
    server  = http.createServer(app),
    port = process.env.PORT || 8000,
    io = require('socket.io').listen(server);

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
        from:'Gustavo Jordan <gustavojordan.com>',
        to:'gonzalowtf@gmail.com',
        subject: 'Mensaje de contacto',
        text :'working',
        html: v

        


 }

 app.get('/sendMail',function(req,res){

    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
      });

console.log(nombre);

});

      
 
     
console.log(port);
server.listen(port, function(err) {
  if(err){
      console.log("error !" + err);
      
  }else{
      
  
  console.log("Node server running on http://localhost:8000 or online port");
}
    
});         


io.sockets.on("connection",function(socket){

// for the online users ta the moment od connection
  socket.on("new-m",function(data){

       if(data.vas){
        
        console.log("sent");
        nombre=data.name
        apellido=data.surname
        mail=data.mail
        mensaje=data.messenge
       }
       else{
        console.log("not sent");
        
       }

  });
    //"send-mesage" and "new message" are the functions on index and works everywhere
    
});

