const apiKey = process.env.API_KEY;
async function getFilm(title) {
  try {
    // console.log("I'm fetching!");
    return await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`
    ).then((res) => res.json());
  } catch (error) {
    console.log('************************************')
    console.error(error.message);
    return({
    message: error.message
    });
  }
}
module.exports = {
  getFilm,
};
