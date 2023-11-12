require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const fetchFilm = require("./utils/fetch.js");

// Middleware para analizar el cuerpo del formulario, similar a como usabamos express.json() para postear json
app.use(express.urlencoded());

//Configuracion de Pug
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/film/", (req, res) => {
  //Lo que ocurre cuando se envía el formulario (tipo POST):
  const title = req.body.title; //Obtenemos el input llamado "title" del formulario, necesita (express.urlencoded())
  res.redirect(`/film/${title}`); //Redirigimos a film/"title"
});

app.get("/film/:title", async (req, res) => {
  //Lo que ocurre cuando llegamos a film/"title":
  const title = req.params.title;
  const movieDetails = await fetchFilm.fetchFilm(title);
//   console.log(movieDetails);
  res.render("film", { movieDetails });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
