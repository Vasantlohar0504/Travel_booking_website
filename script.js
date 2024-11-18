document.addEventListener('DOMContentLoaded', () => {
});
document.getElementById('bookingDetailsForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    // Collect form data
    const formData = new FormData(this);
    const destination = formData.get('destination');
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const dates = formData.get('dates');
    const specialRequest = formData.get('specialRequest');

    console.log('Booking Details:');
    console.log(`Destination: ${destination}`);
    console.log(`Full Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Preferred Dates: ${dates}`);
    console.log(`Special Requests: ${specialRequest}`);

    // Display success message
    document.getElementById('booking-message').style.display = 'block';

    // Optionally, you can redirect the user to a confirmation page 

    setTimeout(function() {
        window.location.href = 'confirmation.html'; 
    }, 1000);
});
