const key = "api_key=f251c7bdac148d6e15351fa8fa6d66be";
const base_url = "https://api.themoviedb.org/3/";
const popular = base_url + "discover/tv?sort_by=popularity.desc&" + key;
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const main = document.getElementById("main");
main.innerHTML = "";
function gettvs(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showtvs(data.results);
    });
}

gettvs(popular);
function showtvs(data) {
  data.forEach((tv) => {
    console.log(tv);
    const { name, poster_path, vote_average, overview } = tv;
    const tv1 = document.createElement("div");
    tv1.classList.add("shows");
    tv1.innerHTML = `
                <img src="${IMG_URL + poster_path}" alt="Poster">
                <p class="title">${name}</p>
                <span>Rating : ${vote_average}</span>
                <div class="summary">
                    <p>${overview}</p>
                </div>
            </div>
        `;
    main.appendChild(tv1);
  });
}

function passname(name) {
  localStorage.setItem("tvname", name);
  window.open("showinfo.html");
}
