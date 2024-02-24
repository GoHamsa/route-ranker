document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('addressForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const newAddress = document.getElementById('newAddress').value;
    console.log('New Address: ', newAddress);

    // Placeholder for handling the Google Maps API call
    calculateRoutes(newAddress);
  });
});

function calculateRoutes(address) {
  console.log('Preparing to calculate routes for: ', address);
  // logic for Google Maps API
}
