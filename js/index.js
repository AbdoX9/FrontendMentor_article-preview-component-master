let share = document.querySelector(".profile > i");

share.addEventListener("click", function () {
  if (document.querySelector(".share").style.display == "none") {
    document.querySelector(".share").style.display = "flex";
  } else {
    document.querySelector(".share").style.display = "none";
  }
});
