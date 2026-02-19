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


const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const incomeData = [6000, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const expenseData = [2800, 400, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      { label: 'Income', data: incomeData, borderColor: '#22c55e', pointBackgroundColor: '#22c55e', pointRadius: 5, tension: 0.4, fill: false },
      { label: 'Expenses', data: expenseData, borderColor: '#ef4444', pointBackgroundColor: '#ef4444', pointRadius: 5, tension: 0.4, fill: false }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom', labels: { usePointStyle: true, pointStyle: 'circle', color: '#555', font: { size: 12 }, boxWidth: 8 } },
      tooltip: { callbacks: { label: (item) => `${item.dataset.label} : $${item.raw.toFixed(2)}` } }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#888', font: { size: 11 } } },
      y: { grid: { color: '#f0f0f0' }, ticks: { color: '#888', font: { size: 11 } }, beginAtZero: true }
    }
  }
});

const categories = ['Salary','Bills & Utilities','Freelance','Shopping','Food & Dining','Healthcare','Entertainment','Transportation'];
const catIncome  = [4800, 0, 750, 0, 0, 0, 0, 0];
const catExpense = [0, 1200, 0, 850, 950, 400, 300, 200];

new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: {
    labels: categories,
    datasets: [
      { label: 'Income', data: catIncome, backgroundColor: '#22c55e', borderRadius: 4 },
      { label: 'Expenses', data: catExpense, backgroundColor: '#ef4444', borderRadius: 4 }
    ]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, pointStyle: 'rect', color: '#555', font: { size: 12 }, boxWidth: 10 } } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#888', font: { size: 11 }, maxRotation: 45 } },
      y: { grid: { color: '#f0f0f0' }, ticks: { color: '#888', font: { size: 11 } }, beginAtZero: true }
    }
  }
});

const expenseLabels = ['Bills & Utilities','Shopping','Food & Dining','Healthcare','Entertainment','Transportation'];
const expenseValues = [50, 19, 15, 8, 5, 4];
const expenseColors = ['#6366f1','#ec4899','#ef4444','#22c55e','#8b5cf6','#f59e0b'];

new Chart(document.getElementById('expensePie'), {
  type: 'pie',
  data: { labels: expenseLabels, datasets: [{ data: expenseValues, backgroundColor: expenseColors, borderWidth: 2, borderColor: '#fff' }] },
  options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } },
  plugins: [{
    afterDraw(chart) {
      const { ctx, data, chartArea } = chart;
      const cx = (chartArea.left + chartArea.right) / 2, cy = (chartArea.top + chartArea.bottom) / 2;
      const r = Math.min(chartArea.width, chartArea.height) / 2;
      data.labels.forEach((label, i) => {
        const arc = chart.getDatasetMeta(0).data[i];
        const angle = (arc.startAngle + arc.endAngle) / 2;
        const x = cx + Math.cos(angle) * r * 1.18, y = cy + Math.sin(angle) * r * 1.18;
        if (data.datasets[0].data[i] >= 4) {
          ctx.save(); ctx.font = 'bold 11px Segoe UI'; ctx.fillStyle = expenseColors[i];
          ctx.textAlign = x > cx ? 'left' : 'right'; ctx.textBaseline = 'middle';
          ctx.fillText(`${label} ${data.datasets[0].data[i]}%`, x, y); ctx.restore();
        }
      });
    }
  }]
});

const expLegend = document.getElementById('expenseLegend');
expenseLabels.forEach((l, i) => { expLegend.innerHTML += `<div class="legend-item"><div class="legend-dot" style="background:${expenseColors[i]}"></div>${l}</div>`; });

const incomeLabels = ['Salary','Freelance'];
const incomeValues = [86, 14];
const incomeColors = ['#22c55e','#6366f1'];

new Chart(document.getElementById('incomePie'), {
  type: 'pie',
  data: { labels: incomeLabels, datasets: [{ data: incomeValues, backgroundColor: incomeColors, borderWidth: 2, borderColor: '#fff' }] },
  options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } },
  plugins: [{
    afterDraw(chart) {
      const { ctx, data, chartArea } = chart;
      const cx = (chartArea.left + chartArea.right) / 2, cy = (chartArea.top + chartArea.bottom) / 2;
      const r = Math.min(chartArea.width, chartArea.height) / 2;
      data.labels.forEach((label, i) => {
        const arc = chart.getDatasetMeta(0).data[i];
        const angle = (arc.startAngle + arc.endAngle) / 2;
        const x = cx + Math.cos(angle) * r * 1.2, y = cy + Math.sin(angle) * r * 1.2;
        ctx.save(); ctx.font = 'bold 12px Segoe UI'; ctx.fillStyle = incomeColors[i];
        ctx.textAlign = x > cx ? 'left' : 'right'; ctx.textBaseline = 'middle';
        ctx.fillText(`${label} ${data.datasets[0].data[i]}%`, x, y); ctx.restore();
      });
    }
  }]
});

const incLegend = document.getElementById('incomeLegend');
incomeLabels.forEach((l, i) => { incLegend.innerHTML += `<div class="legend-item"><div class="legend-dot" style="background:${incomeColors[i]}"></div>${l}</div>`; });