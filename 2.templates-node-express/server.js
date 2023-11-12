const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

//Configuracion motor plantilla PUG
app.set('view engine', 'pug');
app.set('views','./views');


app.get('/', function(req, res){
    res.render('index.pug');
  });
  app.get('/about', function(req, res){
    res.render('about.pug');
  });
  app.get('/location', function(req, res){
    res.render('location.pug');
  });
  app.get('/mission', function(req, res){
    res.render('mission.pug', {
        name: 'Cat',
        url: 'https://s1.eestatic.com/2023/03/10/curiosidades/mascotas/747436034_231551832_1706x1280.jpg'
    });
  });
  app.get('/contact', function(req, res){
    res.render('contact.pug');
  });



app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
  