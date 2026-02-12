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