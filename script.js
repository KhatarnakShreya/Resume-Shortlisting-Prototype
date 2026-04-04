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
  if (!sname.value || isNaN(scgpa.value) || !sskills.value || isNaN(syear.value)) {
    alert("Please fill all fields correctly!");
    return;
  }

  let s = {
    name: sname.value.trim(),
    cgpa: parseFloat(scgpa.value),
    skills: sskills.value.toLowerCase().split(",").map(skill => skill.trim()),
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
  if (!jrole.value || isNaN(jcgpa.value) || !jskills.value || isNaN(jyear.value)) {
    alert("Please fill all fields correctly!");
    return;
  }

  let j = {
    role: jrole.value.trim(),
    minCGPA: parseFloat(jcgpa.value),
    skills: jskills.value.toLowerCase().split(",").map(skill => skill.trim()),
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

// EVALUATE
function results() {
  let table = document.getElementById("resultTable");
  table.innerHTML = "";

  if (students.length === 0 || jobs.length === 0) {
    alert("Add students and jobs first!");
    return;
  }

  students.forEach(s => {
    jobs.forEach(j => {
      let matchedSkills = j.skills.filter(skill => s.skills.includes(skill));

      // Weighted scoring
      let score = 0;
      if (s.cgpa >= j.minCGPA) score += 30;
      if (s.year >= j.minYear) score += 20;
      score += matchedSkills.length * 15;

      // Status criteria
      let status = (s.cgpa >= j.minCGPA && s.year >= j.minYear && matchedSkills.length > 0)
        ? "Shortlisted"
        : "Rejected";

      table.innerHTML += `
        <tr class="${status === 'Shortlisted' ? 'shortlisted-row' : 'rejected-row'}">
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

  // Add export button dynamically
  if (!document.querySelector(".export-btn")) {
    let btn = document.createElement("button");
    btn.innerText = "Export Results (CSV)";
    btn.className = "export-btn";
    btn.onclick = exportResults;
    document.getElementById("resultsPage").appendChild(btn);
  }
}

// EXPORT RESULTS
function exportResults() {
  let csv = "Name,Role,CGPA,Matched Skills,Score,Status\n";
  document.querySelectorAll("#resultTable tr").forEach(row => {
    let cols = [...row.querySelectorAll("td")].map(td => td.innerText);
    csv += cols.join(",") + "\n";
  });
  let blob = new Blob([csv], { type: "text/csv" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "results.csv";
  link.click();
}

// LOAD DATA
displayStudents();
displayJobs();
