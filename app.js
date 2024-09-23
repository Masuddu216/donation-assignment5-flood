// Function to handle the donation logic
function donate(inputId, totalId, availableId, buttonId, cause) {
    const inputField = document.getElementById(inputId);
    const totalField = document.getElementById(totalId);
    const availableField = document.getElementById(availableId);
    const button = document.getElementById(buttonId);

    button.addEventListener('click', function () {
        const donationAmount = parseFloat(inputField.value);
        const availableAmount = parseFloat(availableField.textContent);
        const totalDonated = parseFloat(totalField.textContent);

        // Validate input (must be a positive number)
        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Invalid Amount');
            return;
        }

        // Update total donations and available amount
        totalField.textContent = totalDonated + donationAmount;
        availableField.textContent = availableAmount - donationAmount;

        // Show success message
        showModal();

        // Add donation history
        addToHistory(donationAmount, cause);
    });
}

// Function to show the modal
function showModal() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}

// Function to close the modal
document.getElementById('btn-continue').addEventListener('click', function () {
    const modal = document.getElementById('my_modal_1');
    modal.close();
});

// Function to add donation to history
function addToHistory(amount, cause) {
    const history = document.getElementById('activate-donation-history');
    const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });
    const newHistoryItem = document.createElement('p');
    newHistoryItem.textContent = `Donated ${amount} BDT for ${cause} on ${now}`;
    history.appendChild(newHistoryItem);
}

// Set up donation handling for Noakhali Flood
let noakhaliInput = 'input-amount-forNoakhali-flood'; // The input field where the user enters the donation amount
let noakhaliTotal = 'noakhali-donated-amountTotal';   // The element showing the total donated for Noakhali
let availableAmount = 'availableAmount';              // The element showing available amount
let noakhaliButton = 'click-donate-forNoakhali';      // The button that the user clicks to donate for Noakhali
let noakhaliCause = 'Noakhali Flood';                 // The cause name
donate(noakhaliInput, noakhaliTotal, availableAmount, noakhaliButton, noakhaliCause); // Call the donation function

// Set up donation handling for Feni Flood
let feniInput = 'input-amount-forFeni-flood'; // The input field for Feni
let feniTotal = 'feni-donated-amountTotal';   // The total donated amount for Feni
let feniButton = 'click-donate-forFeni';      // The button for Feni donations
let feniCause = 'Feni Flood';                 // The cause name for Feni
donate(feniInput, feniTotal, availableAmount, feniButton, feniCause); // Call the donation function

// Set up donation handling for Quota Movement
let quotaInput = 'input-amount-forQuota-movement';  // The input field for Quota Movement
let quotaTotal = 'quota-donated-totalAmount';       // The total amount donated for Quota Movement
let quotaButton = 'click-donate-forQuota-movement'; // The button for Quota Movement donations
let quotaCause = 'Quota Movement';                  // The cause name for Quota Movement
donate(quotaInput, quotaTotal, availableAmount, quotaButton, quotaCause); // Call the donation function
