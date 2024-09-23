// home page to blog page button
document.getElementById('homeToBlog').addEventListener('click', function() {
    window.location.href = './blog.html';
});



document.getElementById('noakhaliInputBtn').addEventListener('click', function () {
    const inputNoakhali = document.getElementById('inputAmmountNoakhali').value;
    const noakhaliDonation = parseFloat(inputNoakhali);

    const noakhaliBalance = document.getElementById('noakhaliBalance').innerText;
    const noakhaliBalanceAmmount = parseFloat(noakhaliBalance);
    const newBalanceNoakhali = noakhaliBalanceAmmount + noakhaliDonation;

    document.getElementById('noakhaliBalance').innerText = newBalanceNoakhali;

    const accountBalace = document.getElementById('accountBalance').innerText;
    const accountBalaceTk = parseFloat(accountBalace);
    const newAccountBalance = accountBalaceTk - noakhaliDonation;
    document.getElementById('accountBalance').innerText = newAccountBalance;


    console.log(newBalanceNoakhali);
    
});