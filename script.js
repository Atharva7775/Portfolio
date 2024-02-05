function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function expandContent(button) {
  var content = button.nextElementSibling; // Assuming the expandable content is the next sibling of the button
  if (content.style.display === "none") {
    content.style.display = "block"; // Show the content
    // Check if the pie chart has already been created to avoid creating multiple instances
    if (!window.pieChartInstance) {
      createPieChart();
    }
  } else {
    content.style.display = "none"; // Hide the content
  }
}


function createPieChart() {
  // Check if the chart has already been created to avoid creating multiple instances
  if (!window.pieChartInstance) {
    var ctx = document.getElementById('skillsPieChart').getContext('2d');
    window.pieChartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Machine Learning', 'Software Systems Design', 'Computer Vision', 'Database', 'Programming'],
        datasets: [{
          label: 'Skill Level',
          data: [20, 15, 30, 25, 10], // Example skill levels, adjust accordingly
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1
      }
    });
  }
}

// Event listener for the accordion
document.querySelectorAll('.accordion-toggle').forEach(function(toggle) {
  toggle.addEventListener('change', function() {
    // When a toggle is changed, check if it is the one for the pie chart
    if (this.id === 'first' && this.checked) {
      // Delay chart creation to allow for the transition, if there's one
      setTimeout(createPieChart, 300);
    } else if (window.pieChartInstance) {
      // Destroy the chart if the accordion is collapsed
      window.pieChartInstance.destroy();
      window.pieChartInstance = null;
    }
  });
});




