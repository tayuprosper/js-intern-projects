const st_name = document.getElementById("st-name");
const mark = document.getElementById("mark");
const dispName = document.getElementById("disp-name");
const dispScore = document.getElementById("disp-score");
const dispGrade = document.getElementById("disp-grade");
const content = document.querySelector(".content")
let dataIsShowing = false;
const student_data = [];

const checkGrade = () => {
  let markVal = mark.value;
  let nameVal = st_name.value;

  if (markVal == "" || nameVal == "") {
    alert("Please Fill all fields");
    return;
  } else if (Number(markVal) > 100 || Number(markVal) < 0) {
    alert("invalid mark input");
    return;
  } else {
    const obj = {
      sn:
        student_data.length <= 0
          ? 1
          : student_data[student_data.length - 1].sn + 1,
      st_name: nameVal,
      st_mark: markVal,
      st_grade: calculateGrade(markVal),
    };

    student_data.push(obj);
    dispName.textContent = obj.st_name;
    dispGrade.textContent = obj.st_grade;
    dispScore.textContent = obj.st_mark;

    dispGrade.style.color = getGradeColor(obj.st_grade);
  }
};

function displayAllTestedStudents() {

if (dataIsShowing){
    currentData = document.querySelector(".info");
    currentData.remove();
    dataIsShowing = false;
}
  let parentDiv = document.createElement("div");
  parentDiv.classList.add("info");

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["S/N", "Sudent Name", "Score", "Grade"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    headerRow.appendChild(th);
  });

thead.appendChild(headerRow);
table.appendChild(thead);
const tbody = document.createElement("tbody");

student_data.forEach(row =>{
    const tr = document.createElement("tr");
    
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td')

        td2.textContent = row.st_name;
        td1.textContent = row.sn;
        td3.textContent = row.st_mark;
        td4.textContent = row.st_grade;
        td4.style.color = getGradeColor(row.st_grade);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tbody.appendChild(tr);
})

table.appendChild(tbody);
  parentDiv.replaceChildren();
  parentDiv.appendChild(table);
//   content.replaceChildren()[0];
  content.appendChild(parentDiv);
  dataIsShowing = true;
}

function getGradeColor(grade) {
  switch (grade) {
    case "A":
      return "green";
      break;
    case "B":
      return "light-green";
      break;
    case "C":
      return "yellow";
      break;
    case "D":
      return "orange";
      break;
    default:
      return "red";
  }
}
function calculateGrade(mark) {
  converted_num = Number(mark);
  if (converted_num <= 59) {
    return "F";
  } else if (converted_num > 59 && converted_num <= 69) {
    return "D";
  } else if (converted_num > 69 && converted_num <= 79) {
    return "C";
  } else if (converted_num > 79 && converted_num <= 80) {
    return "B";
  } else {
    return "A";
  }
}

// const test = """
// <table border="1" id="student-info">
//                 <thead>
//                     <tr>

//                         <th>Student Name</th>
//                         <th>Mark</th>
//                         <th>Grade</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                 </tbody>
//             </table>
// """
