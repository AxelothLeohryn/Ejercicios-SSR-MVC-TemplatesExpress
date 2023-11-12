const apiKey = process.env.API_KEY;
async function fetchFilm(title) {
  try {
    // console.log("I'm fetching!");
    return await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
    ).then((res) => res.json());
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los detalles de la película");
  }
}
module.exports = {
  fetchFilm,
};
