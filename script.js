

// NAVIGATION
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(page + "Page").style.display = "block";
}

showPage("students");



// ADD STUDENT
function addStudent() {
  let s = {
    name: sname.value,
    cgpa: parseFloat(scgpa.value),
    skills: sskills.value.toLowerCase().split(","),
    year: parseInt(syear.value)
  };

  students.push(s);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();

  sname.value = "";
  scgpa.value = "";
  sskills.value = "";
  syear.value = "";
}


// DISPLAY STUDENTS
function displayStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  students.forEach(s => {
    table.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.cgpa}</td>
        <td>${s.skills.join(", ")}</td>
        <td>${s.year}</td>
      </tr>
    `;
  });
}
