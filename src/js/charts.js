import Chart from 'chart.js/auto';

const ctx = document.getElementById('studentChart');

if (ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['18-20', '21-25', '26-30'],
            datasets: [{
                label: 'Students',
                data: [12, 19, 7],
                backgroundColor: ['#4f46e5', '#0ea5e9', '#10b981'],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
