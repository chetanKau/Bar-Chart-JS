const ctx = document.getElementById('myChart');
ctx.style.width = "900px";
ctx.style.height = "400px";
new Chart(ctx, {
    type: 'bar',

    label:'Monthly:sales',
    data: {
      labels: ['January', 'February', 'March', 'April','May','June','July'],
      datasets: [{
        label: ':Sales',
        data: [90,50,95,30,65,100,67],
        backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(255, 159, 64, 0.4)',
            'rgba(255, 205, 86, 0.4)',
            'rgba(75, 192, 192, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(153, 102, 255, 0.4)',
            'rgba(279, 220, 297, 0.4)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        borderWidth: 1
      }]
    },
    options: {
      
      responsive: true,
      plugins: {
        title: {
            display: true,
            text: 'Monthly Sales Data',
        },
    },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });