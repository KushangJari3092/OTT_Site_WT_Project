let got = localStorage.getItem("moviename");
console.log(got);
let url = `https://api.themoviedb.org/3/search/movie?api_key=f251c7bdac148d6e15351fa8fa6d66be&language=en-US&query=${got}&page=1&include_adult=false`;
function getmovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("Works");
      showmovies(data);
    });
}
getmovies(url);
function showmovies(data) {
  console.log(typeof data);
  console.log(data.results[0]);
}
