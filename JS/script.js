// SCRIPT FOR DARK MODE
let light = 0;
let mode = document.getElementById("darkmode");
// window.getComputedStyle(document.documentElement).getPropertyValue('--secondary');

mode.addEventListener("click", () => {
  if (!light) {
    document.body.style.backgroundColor = "#898a8ab9";
    document.getElementById("box").style.boxShadow = "0cm 0cm 40px #1d2938";
    console.log(mode);
    document.getElementById("box").style.backgroundColor = "white";
    document.querySelector(".list-title").style.color = "#1d2938";
    document.querySelector(".title").style.color = "black";
    light = 1;
  } else {
    document.body.style.backgroundColor = "#121b25";
    document.getElementById("box").style.backgroundColor = "#1d2938";
    document.getElementById("box").style.boxShadow =
      "0cm 0cm 40px rgba(255, 255, 255, 0.363)";
    document.querySelector(".list-title").style.color = "white";
    document.querySelector(".title").style.color = "antiquewhite";
    light = 0;
    console.log(mode);
  }
});
