const responsiveBirthdayCard = document.querySelector(".birthdayCard");

function scalePage() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  if (width <= 450) {
    responsiveBirthdayCard.style.scale = 1;
  } else {
    responsiveBirthdayCard.style.scale = 2;
  }
}
scalePage();

window.addEventListener("resize", function() {
  scalePage();
});
