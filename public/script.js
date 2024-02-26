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

    fixedAddresses.forEach(async (fixedAddress) => {
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
        console.log(data);
        // Process and display the data as needed
      } catch (error) {
        console.error('Error fetching route data:', error);
      }
    });
  });
});
