import { fetchStudents } from './api.js';

let studentsData = [];

async function loadStudents() {
    const spinner = document.getElementById('loadingSpinner');

    spinner.style.display = 'block';
    studentsData = await fetchStudents();
    renderTable(studentsData);
    spinner.style.display = 'none';
}

function renderTable(students) {
    const tableBody = document.getElementById('studentTableBody');

    tableBody.innerHTML = '';

    students.forEach(student => {
        const status = student.age > 25
            ? '<span class="badge bg-success">Active</span>'
            : '<span class="badge bg-warning">Pending</span>';

        tableBody.innerHTML += `
            <tr>
                <td>${student.firstName} ${student.lastName}</td>
                <td>${student.email}</td>
                <td>${student.university || 'N/A'}</td>
                <td>${student.age}</td>
                <td>${status}</td>
            </tr>
        `;
    });
}

document.getElementById('searchInput').addEventListener('input', function(e) {
    const value = e.target.value.toLowerCase();

    const filtered = studentsData.filter(student =>
        student.firstName.toLowerCase().includes(value) ||
        student.email.toLowerCase().includes(value)
    );

    renderTable(filtered);
});

loadStudents();
