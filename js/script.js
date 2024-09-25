// home page to blog page button
document.getElementById("switchToBlog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// Noakhali card
document
  .getElementById("noakhaliInputBtn")
  .addEventListener("click", function () {
    const noakhaliDonation = donationAmmount("inputAmmountNoakhali");
    const noakhaliBalance = currentBalance("noakhaliBalance");

    const newBalanceNoakhali = noakhaliBalance + noakhaliDonation;
    document.getElementById("noakhaliBalance").innerText = newBalanceNoakhali;

    const accountBalace = currentBalance("accountBalance");
    const newAccountBalance = accountBalace - noakhaliDonation;
    document.getElementById("accountBalance").innerText = newAccountBalance;
  });

// Feni card
document.getElementById("feniInputBtn").addEventListener("click", function () {
  const feniDonation = donationAmmount("inputAmmountFeni");
  const feniBalance = currentBalance("feniBalance");
  const newBalanceFeni = feniBalance + feniDonation;
  document.getElementById("feniBalance").innerText = newBalanceFeni;
  const accountBalace = currentBalance("accountBalance");
  const newAccountBalance = accountBalace - feniDonation;
  document.getElementById("accountBalance").innerText = newAccountBalance;
});

// Sylhet card
document
  .getElementById("sylhetInputBtn")
  .addEventListener("click", function () {
    const sylhetDonation = donationAmmount("inputAmmountSylhet");
    const sylhetBalance = currentBalance("sylhetBalance");
    const newBalanceSylhet = sylhetBalance + sylhetDonation;
    document.getElementById("sylhetBalance").innerText = newBalanceSylhet;
    const accountBalace = currentBalance("accountBalance");
    const newAccountBalance = accountBalace - sylhetDonation;
    document.getElementById("accountBalance").innerText = newAccountBalance;
  });

// Sunamganj card
document
  .getElementById("sunamganjInputBtn")
    .addEventListener("click", function () {
    const sunamganjDonation = donationAmmount("inputAmmountSunamganj");
    const sunamganjBalance = currentBalance("sunamganjBalance");
    const newBalanceSunamganj = sunamganjBalance + sunamganjDonation;
    document.getElementById("sunamganjBalance").innerText = newBalanceSunamganj;
    const accountBalace = currentBalance("accountBalance");
    const newAccountBalance = accountBalace - sunamganjDonation;
    document.getElementById("accountBalance").innerText = newAccountBalance;
    });
  
// Quota card
document
  .getElementById("quotaInputBtn")
    .addEventListener("click", function () {
    const quotaDonation = donationAmmount("inputAmmountQuota");
    const quotaBalance = currentBalance("quotaBalance");
    const newBalanceQuota = quotaBalance + quotaDonation;
    document.getElementById("quotaBalance").innerText = newBalanceQuota;
    const accountBalace = currentBalance("accountBalance");
    const newAccountBalance = accountBalace - quotaDonation;
    document.getElementById("accountBalance").innerText = newAccountBalance;
  });


document.getElementById('allDonationBtn').addEventListener('click', function () {
    showSection('donationCards');
    document.getElementById('allDonationBtn').classList.add('bg-[#B4F461]');
    document.getElementById('historyBtn').classList.remove('bg-[#B4F461]');
})
document.getElementById('historyBtn').addEventListener('click', function () {
    showSection('donationHistory');
    document.getElementById('historyBtn').classList.add('bg-[#B4F461]');
    document.getElementById('allDonationBtn').classList.remove('bg-[#B4F461]');
})