// Array to store student data
let students = [];

document.getElementById('gradeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the student name
    let studentName = document.getElementById('studentName').value;

    // Get all the grades
    let grades = document.querySelectorAll('.grade');
    let total = 0;

    grades.forEach(function(input) {
        let grade = parseFloat(input.value);
        if (!isNaN(grade)) {
            total += grade;
        }
    });

    // Calculate the average grade
    let average = total / grades.length;

    // Determine pass or fail
    let status = average >= 50 ? 'Passed' : 'Failed';

    // Store the student data
    let studentData = {
        name: studentName,
        average: average.toFixed(2),
        status: status
    };
    students.push(studentData);

    // Reset the form fields
    document.getElementById('gradeForm').reset();

    // Display the updated student list
    displayStudentList();
});

function displayStudentList() {
    let studentListDiv = document.getElementById('studentList');
    studentListDiv.innerHTML = ''; // Clear the previous list

    students.forEach(function(student, index) {
        studentListDiv.innerHTML += `
            <div class="student-info">
                <h3>Student ${index + 1}: ${student.name}</h3>
                <p><strong>Average Grade:</strong> ${student.average}</p>
                <p><strong>Status:</strong> ${student.status}</p>
            </div>
        `;
    });
}
