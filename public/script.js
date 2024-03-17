document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('addressForm');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const newAddress = document.getElementById('newAddress').value;
    const fixedAddresses = [
      '2825 Sand Hill Rd, Menlo Park, CA 94025, United States',
      '10889 N De Anza Blvd, Cupertino, CA 95014, United States',
      '4315 N First St, San Jose, CA 95134, United States',
      '39900 Balentine Dr, Newark, CA 94560, United States',
      '2400 Cabrillo Hwy S, Half Moon Bay, CA 94019, United States',
    ];

    let routesInfo = [];

    for (const fixedAddress of fixedAddresses) {
      try {
        const response = await fetch('/calculate-route', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            origin: fixedAddress,
            destination: newAddress,
          }),
        });
        const data = await response.json();

        // Extract duration for each route. Assuming one leg per route.
        const duration = data.routes[0].legs[0].duration.value; // Duration in seconds
        routesInfo.push({ address: fixedAddress, duration: duration });
      } catch (error) {
        console.error('Error fetching route data:', error);
      }
    }

    // Sort routes by duration in ascending order
    routesInfo.sort((a, b) => a.duration - b.duration);

    // Log sorted routes or update the UI as needed
    console.log('Sorted Routes:', routesInfo);
    // Example: Update the DOM to display sorted routes
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = ''; // Clear previous results
    routesInfo.forEach((route) => {
      const routeElement = document.createElement('div');
      routeElement.textContent = `Address: ${route.address}, Duration: ${route.duration} seconds`;
      resultsElement.appendChild(routeElement);
    });
  });
});
