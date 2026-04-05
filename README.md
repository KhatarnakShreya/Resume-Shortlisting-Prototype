# Resume Shortlisting System

![HTML5](https://img.shields.io/badge/HTML5-black?style=plastic&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-black?style=plastic&logo=css)
![JavaScript](https://img.shields.io/badge/JavaScript-black?style=plastic&logo=javascript)
![Status](https://img.shields.io/badge/Prototype-Ready-brightgreen?style=plastic&labelColor=black)
![Team](https://img.shields.io/badge/Team-3%20Members-red?style=plastic&labelColor=black&logo=github)
![Static Badge](https://img.shields.io/badge/Github_Pages-Live_Demo-brightgreen?style=plastic&logo=github&labelColor=black&link=https%3A%2F%2Fkhatarnakshreya.github.io%2FResume-Shortlisting-Prototype%2F)
![Static Badge](https://img.shields.io/badge/%F0%9F%93%8A_Canva-PPT-blue?style=plastic&logo=Canva&labelColor=black&link=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAHFNY93Zcs%2F1k3KeecNkPzLqUEgfH5xWQ%2Fview)

A prototype web application built for Hackathon by our team of three.  
This project demonstrates an automated way to shortlist student resumes against job requirements using a simple scoring algorithm.

---

## 🚀 Features
- **Student Entry**: Add student details (Name, CGPA, Skills, Year).
- **Job Entry**: Add job requirements (Role, Minimum CGPA, Required Skills, Minimum Year).
- **Evaluation**: Run an automated evaluation that matches students to jobs based on:
  - CGPA threshold
  - Year of study
  - Skill matches
- **Scoring System**:
  - CGPA match → 30 points
  - Year match → 20 points
  - Each skill match → 15 points
- **Shortlisting Criteria**: Students must meet CGPA & Year requirements and have at least one skill match.
- **Responsive UI**: Works across desktop, tablet, and mobile.
- **Data Persistence**: Uses `localStorage` to save students and jobs.
- **Export Results**: Download evaluation results as a CSV file.
- **Reset Option**: Clear all stored data with one click.

---

## 🛠️ Tech Stack
- **HTML5** for structure
- **CSS3** for styling and responsiveness
- **JavaScript (ES6)** for logic and localStorage handling

---

## 📂 Project Structure


- **index.html** → Contains the structure of the app (students, jobs, results pages, navigation, footer).  
- **style.css** → Provides styling, responsive design rules, and visual polish.  
- **script.js** → Implements functionality: adding students/jobs, evaluation logic, scoring, exporting results, and persistence.  
- **README.md** → Explains the project, features, setup, and future improvements.  

---

## 📱 Responsiveness
- Forms stack vertically on smaller screens.
- Navigation adapts to mobile with wrapping buttons.
- Tables wrap text and become scrollable on small devices.
- Footer is sticky at the bottom of the page.

---

## ▶️ How to Run
1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Start adding students and jobs.
4. Run evaluation and view results.
5. Export results if needed.

---

## 📊 Presentation and Live Demo
- We also prepared a **Canva presentation** explaining the prototype:
![Static Badge](https://img.shields.io/badge/%F0%9F%93%8A_Canva-PPT-blue?style=flat&logo=Canva&labelColor=black&link=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAHFNY93Zcs%2F1k3KeecNkPzLqUEgfH5xWQ%2Fview)


- Check out the live demo hosted on **GitHub Pages**: 
![Static Badge](https://img.shields.io/badge/Github_Pages-Live_Demo-brightgreen?style=flat&logo=github&labelColor=black&link=https%3A%2F%2Fkhatarnakshreya.github.io%2FResume-Shortlisting-Prototype%2F)

---

## 👨‍💻 Team

- BHAKTI GOEL     ![Static Badge](https://img.shields.io/badge/Github-Bhakti-brightgreen?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2Fbhaktigoel-06)
- SHREYA SENGAR   ![Static Badge](https://img.shields.io/badge/Github-Shreya-brightgreen?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2FKhatarnakShreya)
- ANSHIKA GOYAL   ![Static Badge](https://img.shields.io/badge/Github-Anshika-brightgreen?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2Fanshikagoyal550-hash)


---

## 📌 Future Improvements
- Add edit/delete functionality for students and jobs.
- Implement advanced ranking algorithms (e.g., weighted skill importance).
- Integrate backend & database for real-world deployment.
- Authentication and role-based access (HR vs Student).

---

## ⚡ License
This project is for educational and hackathon purposes only.
