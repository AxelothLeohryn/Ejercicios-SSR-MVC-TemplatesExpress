require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const fetch = require("./utils/fetch.js");

// Middleware para analizar el cuerpo del formulario, similar a como usabamos express.json() para postear json
app.use(express.urlencoded({ extended: true }));

//Configuracion de Pug
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/film/", (req, res) => {
  //Lo que ocurre cuando se envía el formulario (tipo POST):
  const title = req.body.title;
  if (title) {
    res.redirect(`/film/${title}`); //Redirigimos a film/"title"
    
} else {
  res.render("error")
  }
});

app.get("/film/:title", async (req, res) => {
  //Lo que ocurre cuando llegamos a film/"title":
  const title = req.params.title;
  const movieDetails = await fetch.getFilm(title);
  if (movieDetails.Response === "True") {
      console.log(movieDetails);
    res.render("film", { movieDetails });
  } else {
    res.render("error");
  }
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
