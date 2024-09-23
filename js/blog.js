// blog page to home page button
document.getElementById('blogToHome').addEventListener('click', function () {
    window.location.href = './index.html';
});

document.getElementById('blogPageBalance').addEventListener('submit', function () {
    const blogBalnce = document.getElementById('blogPageBalance');
    const newBalane = document.getElementById('accountBalance');

    blogBalnce.innerText = newBalane;
})