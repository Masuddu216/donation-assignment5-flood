// Function to validate the donation amount input
function validateAmount(inputValue) {
  let amount = Number(inputValue);
  if (isNaN(amount) || amount <= 0) {
      alert('Invalid Amount');
      return false;
  }
  return amount;
}

// Function to handle donation process
function handleDonation(inputId, totalId, availableAmountId, cause) {
  let inputAmount = document.getElementById(inputId).value;
  let amount = validateAmount(inputAmount);
  
  if (amount) {
      let totalAmountElement = document.getElementById(totalId);
      let availableAmountElement = document.getElementById(availableAmountId);

      let totalAmount = Number(totalAmountElement.textContent);
      let availableAmount = Number(availableAmountElement.textContent);

      // Check if the available amount is enough
      if (availableAmount >= amount) {
          // Update total for specific cause
          totalAmountElement.textContent = totalAmount + amount;
          // Update available amount
          availableAmountElement.textContent = availableAmount - amount;

          // Show success modal
          showModal();

          // Add to donation history
          addToHistory(amount, cause);
      } else {
          alert('Not enough available funds');
      }
  }
}

// Function to display modal on successful donation
function showModal() {
  let modal = document.getElementById('modalForAll');
  modal.showModal();
}

// Function to add donation history


// Event listeners for donation buttons
document.getElementById('click-donate-forNoakhali').addEventListener('click', function() {
  handleDonation('input-amount-forNoakhali-flood', 'noakhali-donated-amountTotal', 'availableAmount', 'Noakhali Flood Relief');
});

document.getElementById('click-donate-forFeni').addEventListener('click', function() {
  handleDonation('input-amount-forFeni-flood', 'feni-donated-amountTotal', 'availableAmount', 'Feni Flood Relief');
});

document.getElementById('click-donate-forQuota-movement').addEventListener('click', function() {
  handleDonation('input-amount-forQuota-movement', 'quota-donated-totalAmount', 'availableAmount', 'Quota Movement Aid');
});




document.getElementById('donation-history').addEventListener('click',function(){
  document.getElementById('main-section').classList.add('hidden');
  document.getElementById('history-list').classList.remove('hidden');
})
document.getElementById('activate-donation-page').addEventListener('click',function(){
  document.getElementById('main-section').classList.remove('hidden');
  document.getElementById('history-list').classList.add('hidden');
})



