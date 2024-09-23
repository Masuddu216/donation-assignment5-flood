// Get elements
const availableAmount = document.getElementById("availableAmount");
const noakhaliDonateButton = document.getElementById("click-donate-forNoakhali");
const feniDonateButton = document.getElementById("click-donate-forFeni");
const quotaDonateButton = document.getElementById("click-donate-forQuota-movement");
const historyButton = document.getElementById("activate-donation-history");

// Function to handle donation logic
function handleDonation(donateButton, inputFieldId, donationDisplayId) {
    donateButton.addEventListener("click", () => {
        const inputField = document.getElementById(inputFieldId);
        const donationDisplay = document.getElementById(donationDisplayId);
        const donationAmount = Number(inputField.value);

        // Validate input (must be a positive number)
        if (isNaN(donationAmount) || donationAmount <= 0) {
            alert('Invalid Amount');
            return;
        }

        const currentAvailableAmount = Number(availableAmount.innerText);
        
        // Check if donation amount is less than available amount
        if (donationAmount > currentAvailableAmount) {
            alert('Insufficient funds');
            return;
        }

        // Update donation total
        const currentDonationTotal = Number(donationDisplay.innerText);
        donationDisplay.innerText = currentDonationTotal + donationAmount;

        // Update available amount
        availableAmount.innerText = currentAvailableAmount - donationAmount;

        // Show modal for successful donation
        alert('Donation Successful');

        // Store donation history
        const historySection = document.getElementById("donation-history");
        const currentTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
        const historyMessage = `Donation of ${donationAmount} BDT made on ${currentTime}`;
        const historyItem = document.createElement("p");
        historyItem.innerText = historyMessage;
        historySection.appendChild(historyItem);
    });
}

// Handle Noakhali Donation
handleDonation(noakhaliDonateButton, "input-amount-forNoakhali-flood", "noakhali-donated-amountTotal");

// Handle Feni Donation
handleDonation(feniDonateButton, "input-amount-forFeni-flood", "feni-donated-amountTotal");

// Handle Quota Movement Donation
handleDonation(quotaDonateButton, "input-amount-forQuota-movement", "quota-donated-totalAmount");

// Activate Donation History Button
historyButton.addEventListener("click", () => {
    document.getElementById("donation-history").classList.toggle("disable");
});
