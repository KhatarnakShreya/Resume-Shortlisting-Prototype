

// NAVIGATION
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(page + "Page").style.display = "block";
}

showPage("students");
