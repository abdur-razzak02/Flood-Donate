// input ammount
function donationAmmount(id) {
  const ammout = document.getElementById(id).value;
  const ammoutTk = parseFloat(ammout);
  return ammoutTk;
}

// current balance
function currentBalance(id) {
  const balance = document.getElementById(id).innerText;
  const balanceTk = parseFloat(balance);
  return balanceTk;
}

// show hide sections
function showSection(id) {
  document.getElementById("donationCards").classList.add("hidden");
  document.getElementById("donationHistory").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

// modal
function showModal(id) {
    document.getElementById("modalBtn").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
  }