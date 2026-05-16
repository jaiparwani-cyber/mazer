import { fetchStudents } from './api.js';

async function loadDashboard() {
    const students = await fetchStudents();
    document.getElementById('totalStudents').innerText = students.length;
}

loadDashboard();
