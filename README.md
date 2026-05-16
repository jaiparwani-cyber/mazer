# EduAdmin – Student Analytics Dashboard

A customized version of the Mazer Bootstrap 5 admin template transformed into a Student Analytics Dashboard.

This project demonstrates real-world frontend customization and integration skills by adapting an existing admin dashboard instead of building one from scratch.

The dashboard focuses on:
- UI/UX improvements
- API integration
- Dynamic data rendering
- Dashboard analytics
- Responsive design
- Reusable frontend architecture

---

# Project Objective

The objective of this assessment was to:

- Understand and modify an existing frontend codebase
- Customize UI components meaningfully
- Integrate external API data into the dashboard
- Improve user experience while preserving template structure
- Demonstrate practical frontend engineering skills

Instead of redesigning the entire template, the project adapts the existing Mazer architecture into a coherent education analytics platform.

---

# Project Theme

## EduAdmin – Student Management Dashboard

The default Mazer dashboard was converted into a student analytics/admin dashboard containing:

- Student statistics
- Student management table
- Analytics charts
- Search functionality
- Dynamic API-based rendering
- Responsive admin UI

---

# Technologies Used

- HTML5
- SCSS
- Bootstrap 5
- JavaScript (ES6 Modules)
- Vite
- Chart.js
- DummyJSON API

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <your-forked-repo-url>
```

---

## 2. Install Dependencies

```bash
npm install
```

If dependency conflicts occur:

```bash
npm install --legacy-peer-deps
```

---

## 3. Start Development Server

```bash
npm run dev
```

---

## 4. Open Browser

```text
http://localhost:5173
```

---

# Major Customizations

## 1. Dashboard Rebranding

The default Mazer branding and navigation were customized to create a dedicated education analytics platform.

### Changes
- Replaced generic dashboard structure
- Updated sidebar navigation
- Simplified menu hierarchy
- Created coherent project identity

### Sidebar Navigation
- Dashboard
- Students
- Analytics
- Settings

---

## 2. UI/UX Improvements

The original UI was modernized while preserving Mazer’s architecture.

### Improvements Made

#### Color Theme Customization

Updated dashboard theme colors for a cleaner SaaS-style appearance.

```scss
'primary': #4f46e5,
'secondary': #64748b,
'success': #10b981,
'info': #0ea5e9,
'warning': #f59e0b,
'danger': #ef4444,
'dark': #1e293b
```

---

#### Card Enhancements

Improved dashboard cards using:
- Rounded corners
- Better spacing
- Hover effects
- Cleaner shadows

```scss
.card {
    border-radius: 16px;
    transition: 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
}
```

---

#### Sidebar UX Improvements

Enhanced:
- Active menu states
- Hover feedback
- Visual hierarchy
- Navigation readability

---

#### Responsive Improvements

Used Bootstrap utilities such as:
- `table-responsive`
- responsive grid system
- spacing utilities

to ensure proper mobile responsiveness.

---

# Dashboard KPI Cards

The default analytics cards were replaced with student-related metrics.

## Added Metrics

- Total Students
- Active Courses
- Attendance Rate
- New Registrations

The “Total Students” value is dynamically populated using API data.

---

# API Integration

## API Used

https://dummyjson.com/users

---

# Why This API Was Chosen

The API provides realistic user data including:
- first name
- last name
- email
- age
- university
- phone number

This makes it suitable for simulating a student management system.

---

# API Architecture

A separate reusable API layer was created:

```text
src/js/api.js
```

This improves:
- code organization
- scalability
- maintainability
- separation of concerns

---

# API Fetch Logic

```javascript
export async function fetchStudents() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        return data.users;
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}
```

---

# How API Data Is Manipulated

The raw API data is transformed and rendered dynamically into dashboard components.

---

## 1. Student Count Calculation

Used for KPI cards.

```javascript
students.length
```

This dynamically calculates the total number of students returned from the API.

---

## 2. Dynamic Table Rendering

Student data is rendered into the table using DOM manipulation.

```javascript
students.forEach(student => {
    tableBody.innerHTML += `
        <tr>
            <td>${student.firstName}</td>
            <td>${student.email}</td>
        </tr>
    `;
});
```

---

## 3. Status Generation Logic

The API does not provide a student status field.

A custom frontend rule was implemented:

```javascript
student.age > 25
```

### Result
- Age > 25 → Active
- Age ≤ 25 → Pending

This demonstrates frontend data transformation and business logic handling.

---

## 4. Search Filtering

Implemented live search functionality using:
- JavaScript filtering
- event listeners
- real-time rendering

```javascript
studentsData.filter(student =>
    student.firstName.toLowerCase().includes(value)
)
```

This dynamically filters:
- student names
- emails

without reloading the page.

---

# Analytics Page

An analytics section was added using Chart.js.

## Features
- Student age distribution
- Visual data representation
- Interactive chart rendering

---

# Chart Integration

Chart.js was integrated into the existing Mazer structure instead of creating a custom chart system.

```javascript
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['18-20', '21-25', '26-30'],
        datasets: [{
            label: 'Students',
            data: [12, 19, 7]
        }]
    }
});
```

---

# Loading State UX

A loading spinner was implemented during API requests.

Purpose:
- better user feedback
- improved perceived performance
- professional UX behavior

---


```

---

# Frontend Engineering Decisions

## Why Existing Components Were Reused

The assessment specifically focused on adapting an existing admin dashboard.

Therefore:
- existing Mazer layouts were preserved
- Bootstrap components were reused
- dashboard architecture was extended instead of rebuilt

This reflects real-world frontend development practices.

---

# Key Skills Demonstrated

- Existing codebase adaptation
- Bootstrap 5 customization
- Responsive UI design
- API integration
- Modular JavaScript architecture
- Dynamic DOM rendering
- UX improvements
- Data visualization
- Component reuse

---

# Future Improvements

Possible future enhancements:
- Authentication system
- Dark/light theme toggle
- Pagination
- Student profile pages
- Backend integration
- Attendance tracking system

---

# Conclusion

This project demonstrates how an existing admin template can be professionally adapted into a fully functional, data-driven dashboard application using modern frontend development practices.