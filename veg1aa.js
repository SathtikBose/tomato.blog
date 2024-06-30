// JavaScript for veg1aa.html

// Function to handle placing the order
function placeOrder() {
    // Simulate placing order and show confirmation
    alert('Your order has been placed. It will be delivered soon.');
    // Redirect to home page
    window.location.href = 'home.html';
}

// Event listener for the Place Order button
document.getElementById('placeOrderBtn').addEventListener('click', placeOrder);
