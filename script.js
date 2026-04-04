let students = JSON.parse(localStorage.getItem("students")) || [];
let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

// NAVIGATION
function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.style.display = "none");
  document.getElementById(page + "Page").style.display = "block";
}

showPage("students");

// RESET
function resetData() {
  localStorage.clear();
  location.reload();
}

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

// EVALUATE (FIXED VERSION)
function results() {
  let table = document.getElementById("resultTable");
  table.innerHTML = "";

  if (students.length === 0 || jobs.length === 0) {
    alert("Add students and jobs first!");
    return;
  }

  students.forEach(s => {
    jobs.forEach(j => {

      let matchedSkills = j.skills.filter(skill =>
        s.skills.includes(skill.trim())
      );

      let score = 0;

      if (s.cgpa >= j.minCGPA) score += 20;
      if (s.year >= j.minYear) score += 10;
      score += matchedSkills.length * 10;

      let status = score >= 20 ? "Shortlisted" : "Rejected";

      table.innerHTML += `
        <tr>
          <td>${s.name}</td>
          <td>${j.role}</td>
          <td>${s.cgpa}</td>
          <td>${matchedSkills.join(", ") || "None"}</td>
          <td>${score}</td>
          <td class="${status === 'Shortlisted' ? 'shortlisted' : 'rejected'}">${status}</td>
        </tr>
      `;
    });
  });
}

// LOAD DATA
displayStudents();
displayJobs();