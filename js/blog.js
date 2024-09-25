// blog page to home page button
document.getElementById("switchToHome").addEventListener('click', function () {
    window.location.href = './index.html';
});

document.getElementById('switchToBlog').addEventListener('click', function () {
    const accountBalnce = currentBalance('accountBalance');
    document.getElementById('blogPageBalance').innerText = accountBalnce;
})