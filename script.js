const message = document.querySelector(".message");


// Check if dark mode is already enabled (using localStorage)
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  }

  //remove dark mode onload
  window.onload = function() {
    document.body.classList.remove('dark-mode');
    message.classList.remove('active');
  };
  
  
  // Handle the form-switch toggle
  document.getElementById('darkSwitch').addEventListener('change', function() {
    if (this.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
  
  // Function to enable dark mode
  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    
    message.classList.add('active');
    setTimeout(function(){
      message.classList.remove('active')
    }, 2000)
    localStorage.setItem('darkMode', 'enabled');
  }
  
  // Function to disable dark mode
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
  

  /* chart.js chart examples */

// chart colors
var colors = ['#007bff','#28a745','#333333','#c3e6cb','#dc3545','#6c757d'];

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    data: [589, 445, 483, 503, 689, 692, 634],
    backgroundColor: 'transparent',
    borderColor: colors[0],
    borderWidth: 4,
    pointBackgroundColor: colors[0]
  },
  {
    data: [639, 465, 493, 478, 589, 632, 674],
    backgroundColor: colors[3],
    borderColor: colors[1],
    borderWidth: 4,
    pointBackgroundColor: colors[1]
  }]
};
if (chLine) {
  new Chart(chLine, {
  type: 'line',
  data: chartData,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    },
    responsive: true
  }
  });
}
