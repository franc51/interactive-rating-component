function selectRating(e) {
  resetRatings();
  e.target.classList.add("active");
}

function resetRatings() {
  // Checks selected items
  const selectedRatings = document.querySelectorAll(".active");
  selectedRatings.forEach((selectedRating) => {
    selectedRating.classList.remove("active");
  });
}

selectRating();
