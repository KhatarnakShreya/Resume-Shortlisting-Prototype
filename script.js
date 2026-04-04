let students = JSON.parse(localStorage.getItem("students")) || [];
let jobs = JSON.parse(localStorage.getItem("jobs")) || [];


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



// ADD JOB
function addJob() {
  let j = {
    role: jrole.value,
    minCGPA: parseFloat(jcgpa.value),
    skills: jskills.value.toLowerCase().split(","),
    minYear: parseInt(jyear.value)
  };

  jobs.push(j);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  displayJobs();

  jrole.value = "";
  jcgpa.value = "";
  jskills.value = "";
  jyear.value = "";
}



// DISPLAY JOBS
function displayJobs() {
  let table = document.getElementById("jobTable");
  table.innerHTML = "";

  jobs.forEach(j => {
    table.innerHTML += `
      <tr>
        <td>${j.role}</td>
        <td>${j.minCGPA}</td>
        <td>${j.skills.join(", ")}</td>
        <td>${j.minYear}</td>
      </tr>
    `;
  });
}


// LOAD DATA
displayStudents();
displayJobs();


