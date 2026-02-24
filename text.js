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


// Variable to track if we are in Login or Signup mode
let isLoginMode = true;

function switchTab(mode) {
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const nameGroup = document.getElementById('name-group');
    const submitBtn = document.getElementById('submit-btn');

    if (mode === 'login') {
        isLoginMode = true;
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        nameGroup.style.display = 'none'; // Hide Name field
        submitBtn.textContent = 'Login';
    } else {
        isLoginMode = false;
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        nameGroup.style.display = 'block'; // Show Name field
        submitBtn.textContent = 'Sign Up';
    }
}

// Handle Form Submission
document.getElementById('authForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page reload

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Here is where you would normally send data to a backend server.
        // For now, we simulate success:
        
        if (isLoginMode) {
            console.log("Logging in...");
            // Redirect to Dashboard
            window.location.href = "dashboard.html";
        } else {
            console.log("Signing up...");
            alert("Account created successfully!");
            // Redirect to Dashboard
            window.location.href = "dashboard.html";
        }
    } else {
        alert("Please fill in all fields.");
    }
});


//transactions------




document.addEventListener("DOMContentLoaded", function() {
    
    // --- Common Settings ---
    Chart.defaults.font.family = "'Poppins', sans-serif";
    Chart.defaults.color = '#64748b';
    
    const colorIncome = '#2dd4bf'; // Teal/Green
    const colorExpense = '#f87171'; // Red/Pink

    // --- 1. Line Chart: Monthly Income vs Expenses ---
    const ctxLine = document.getElementById('monthlyTrendChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Income',
                    data: [5800, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Assuming data drops to 0 after Jan based on video
                    borderColor: colorIncome,
                    backgroundColor: colorIncome,
                    tension: 0.4,
                    pointRadius: 4
                },
                {
                    label: 'Expenses',
                    data: [2405, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    borderColor: colorExpense,
                    backgroundColor: colorExpense,
                    tension: 0.4,
                    pointRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, max: 6000 }
            },
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // --- 2. Bar Chart: Category Breakdown ---
    const ctxBar = document.getElementById('categoryBarChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Salary', 'Bills & Utilities', 'Freelance', 'Shopping', 'Food & Dining', 'Healthcare', 'Entertainment'],
            datasets: [
                {
                    label: 'Income',
                    data: [5000, 0, 800, 0, 0, 0, 0],
                    backgroundColor: colorIncome,
                    borderRadius: 4
                },
                {
                    label: 'Expenses',
                    data: [0, 1200, 0, 450, 350, 200, 120],
                    backgroundColor: colorExpense,
                    borderRadius: 4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, max: 6000 }
            },
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // --- 3. Pie Chart: Expense Distribution ---
    const ctxExpensePie = document.getElementById('expensePieChart').getContext('2d');
    new Chart(ctxExpensePie, {
        type: 'pie',
        data: {
            labels: ['Bills & Utilities', 'Shopping', 'Food & Dining', 'Healthcare', 'Entertainment', 'Transportation'],
            datasets: [{
                data: [50, 19, 15, 8, 5, 4], // Percentages from video
                backgroundColor: [
                    '#6366f1', // Indigo (Bills)
                    '#ec4899', // Pink (Shopping)
                    '#ef4444', // Red (Food)
                    '#10b981', // Green (Healthcare)
                    '#f59e0b', // Yellow (Entertainment)
                    '#8b5cf6'  // Purple (Transportation)
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 12 } }
            }
        }
    });

    // --- 4. Pie Chart: Income Distribution ---
    const ctxIncomePie = document.getElementById('incomePieChart').getContext('2d');
    new Chart(ctxIncomePie, {
        type: 'pie',
        data: {
            labels: ['Salary', 'Freelance'],
            datasets: [{
                data: [86, 14], // Percentages from video
                backgroundColor: [
                    '#10b981', // Green (Salary)
                    '#3b82f6'  // Blue (Freelance)
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 12 } }
            }
        }
    });

});

