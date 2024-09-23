document.getElementById("click-donate-forNoakhali").addEventListener("click", function () {
    handleDonation("input-amount-forNoakhali-flood", "noakhali-donated-amountTotal");
});

document.getElementById("click-donate-forFeni").addEventListener("click", function () {
    handleDonation("input-amount-forFeni-flood", "feni-donated-amountTotal");
});

document.getElementById("click-donate-forQuota-movement").addEventListener("click", function () {
    handleDonation("input-amount-forQuota-movement", "quota-donated-totalAmount");
});

function handleDonation(inputAmount, totalAmount) {
    const availableAmount = document.getElementById("availableAmount");
    const inputField = document.getElementById(inputAmount);
    const donatedTotal = document.getElementById(totalAmount);
    const donationAmount = parseInt(inputField.value);

    // Validation: Check if input is a positive number
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Invalid Amount");
        return;
    }

    // Ensure availableAmount is enough for the donation
    let currentAvailableAmount = parseInt(availableAmount.innerText);
    if (donationAmount > currentAvailableAmount) {
        alert("Insufficient funds");
        return;
    }

    // Update total donated amount
    const currentTotal = parseInt(donatedTotal.innerText);
    donatedTotal.innerText = currentTotal + donationAmount;

    // Deduct from available amount
    availableAmount.innerText = currentAvailableAmount - donationAmount;

    // Show modal for successful donation
    document.getElementById("modalForAll").showModal();

    // Add donation to history
    addDonationToHistory(donationAmount);

    // Clear input field
    inputField.value = "";
}

function addDonationToHistory(amount) {
    const historySection = document.getElementById("history-list");
    const date = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" });

    const newHistoryItem = document.createElement("p");
    newHistoryItem.textContent = `Donated ${amount} BDT on ${date}`;
    historySection.appendChild(newHistoryItem);
}


document.getElementById('donation-history').addEventListener('click',function(){
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('history-list').classList.remove('hidden');
    document.getElementById('donation-history').style.backgroundColor = "#B4F461";
    document.getElementById('donation-history').style.color = "#000000";
    document.getElementById('activate-donation-page').style.backgroundColor = "#B2BEB5";
    document.getElementById('activate-donation-page').style.color = "#000000";

  })
  document.getElementById('activate-donation-page').addEventListener('click',function(){
    document.getElementById('main-section').classList.remove('hidden');
    document.getElementById('history-list').classList.add('hidden');
    document.getElementById('activate-donation-page').style.backgroundColor = "#B4F461";
    document.getElementById('activate-donation-page').style.color = "#000000";
    document.getElementById('donation-history').style.backgroundColor = "#B2BEB5";
    document.getElementById('donation-history').style.color = "#000000";
  })

// Close modal
document.getElementById("btn-continue").addEventListener("click", function () {
    document.getElementById("modalForAll").close();
});

