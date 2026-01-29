document.addEventListener("DOMContentLoaded", function() {
    
    const ctx = document.getElementById('expensesChart').getContext('2d');

    const expensesChart = new Chart(ctx, {
        type: 'doughnut', // 'pie' or 'doughnut'
        data: {
            labels: ['Bills & Utilities', 'Shopping', 'Food & Dining', 'Healthcare', 'Transportation', 'Entertainment'],
            datasets: [{
                label: 'Expenses',
                data: [50, 19, 15, 8, 5, 5], // Percentages from your video
                backgroundColor: [
                    '#5c6bc0', // Blue (Bills)
                    '#ec407a', // Pink (Shopping)
                    '#ef5350', // Red (Food)
                    '#66bb6a', // Green (Healthcare)
                    '#ffa726', // Orange/Yellow (Transportation)
                    '#ab47bc'  // Purple (Entertainment)
                ],
                borderWidth: 0,
                hoverOffset: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right', // Legend on the right side like the video
                    labels: {
                        usePointStyle: true,
                        font: {
                            family: "'Poppins', sans-serif",
                            size: 12
                        },
                        padding: 20
                    }
                }
            },
            cutout: '0%' // Set to '50%' if you want a doughnut hole, '0%' for a full pie
        }
    });
});