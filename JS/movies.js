const key = "api_key=f251c7bdac148d6e15351fa8fa6d66be";
const base_url = "https://api.themoviedb.org/3/";
const popular = base_url + "discover/movie?sort_by=popularity.desc&" + key;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const main = document.getElementById("main");
main.innerHTML = "";
function getmovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showmovies(data.results);
    });
}

getmovies(popular);
function showmovies(data) {
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movie1 = document.createElement("div");
    movie1.classList.add("movie");
    movie1.innerHTML = `
                <img src="${IMG_URL + poster_path}" alt="Poster">
                <p class="title">${title}</p>
                <span>Rating : ${vote_average}</span>
                <div class="summary">
                    <p>${overview}</p>
                </div>
              <button class="watchbtn" onclick="passname('${title}')" >Watch</button>
            </div>
        `;
    main.appendChild(movie1);
  });
}

function passname(title) {
  localStorage.setItem("moviename", title);
  window.open("play.html");
}
