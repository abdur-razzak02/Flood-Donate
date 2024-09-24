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