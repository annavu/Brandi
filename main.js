//Hamburger menu


const headerMenu = document.querySelector(".header-menu");
const navList = document.querySelector(".nav-list");

headerMenu.addEventListener("click", roll);

function roll () {
  navList.classList.toggle("unroll");
}


//section C - change images functions


const imgToChange = document.querySelectorAll(".change");

imgToChange.forEach(function(img) {
img.addEventListener("mouseover", imgOver);
})

imgToChange.forEach(function(img) {
img.addEventListener("mouseout", imgOut);
})



  //changing image - mouse over
function imgOver(e) {
  e.target.src = "img/team1.png";
}


// changing image - mouse out 
function imgOut (e) {
  switch(e.target) {
  case imgToChange[0]:
  e.target.src = "img/team2.png";
  break;
  case imgToChange[1]:
  e.target.src = "img/team3.png";
  break;
  default:
  e.target.src = "img/team4.png";
  }
}
