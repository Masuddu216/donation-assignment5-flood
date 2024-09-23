// Function to handle donation logic for each cause
function handleDonation(buttonId, inputId, totalAmountId, availableAmountId, cause) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const inputField = document.getElementById(inputId);
        const inputAmount = parseFloat(inputField.value);
        const totalAmount = document.getElementById(totalAmountId);
        const availableAmount = document.getElementById(availableAmountId);
        const availableValue = parseFloat(availableAmount.innerText);

        // Check if input is a valid positive number
        if (isNaN(inputAmount) || inputAmount <= 0) {
            alert('Invalid Amount');
            return;
        }

        // Check if there's enough available amount
        if (inputAmount > availableValue) {
            alert('Not enough funds available.');
            return;
        }

        // Update total donated amount and reduce available amount
        const currentTotal = parseFloat(totalAmount.innerText);
        totalAmount.innerText = currentTotal + inputAmount;
        availableAmount.innerText = availableValue - inputAmount;

        // Show success modal
        showModal();

        // Add donation to history
        addToHistory(inputAmount, cause);

        // Clear the input field
        inputField.value = '';
    });
}

// Function to show the success modal
function showModal() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal();
}

// Function to add donation history
function addToHistory(amount, cause) {
    const historyList = document.getElementById('history-list');
    const newEntry = document.createElement('p');
    const date = new Date();
    newEntry.textContent = `${cause}: ${amount} BDT - ${date.toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })}`;
    historyList.appendChild(newEntry);
}

// Toggle visibility between donation and history sections
function toggleSections() {
    const donationSection = document.getElementById('donation-section');
    const historySection = document.getElementById('history-section');
    const donationButton = document.getElementById('activate-donation-page');
    const historyButton = document.getElementById('activate-donation-history');

}

// Initialize donation handlers
document.addEventListener('DOMContentLoaded', function () {
    handleDonation('click-donate-forNoakhali', 'input-amount-forNoakhali-flood', 'noakhali-donated-amountTotal', 'availableAmount', 'Noakhali Flood');
    handleDonation('click-donate-forFeni', 'input-amount-forFeni-lood', 'feni-donated-amountTotal', 'availableAmount', 'Feni Flood');
    handleDonation('click-donate-forQuota-movement', 'input-amount-forQuota-movement', 'quota-donated-totalAmount', 'availableAmount', 'Quota Movement');

    toggleSections();
});
