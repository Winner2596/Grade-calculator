document.getElementById('gradeForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission behavior

  // Get the student's name
  const studentName = document.getElementById('studentName').value;

  // Get all the grade inputs
  const grades = document.querySelectorAll('.grade');
  const gradesArray = Array.from(grades).map(input => parseFloat(input.value));

  // Calculate the average grade using reduce
  const total = gradesArray.reduce((sum, grade) => sum + grade, 0);
  const averageGrade = total / gradesArray.length;

  // Determine pass/fail status
  const status = averageGrade >= 50 ? 'Passed' : 'Failed';

  // Display the student's information
  displayStudent(studentName, averageGrade, status);
});

function displayStudent(name, averageGrade, status) {
  const studentList = document.getElementById('studentList');

  const studentItem = document.createElement('div');
  studentItem.className = 'student-item';
  studentItem.innerHTML = `Name: ${name} <br> Average Grade: ${averageGrade.toFixed(2)} <br> Status: ${status}`;

  studentList.appendChild(studentItem);
}
