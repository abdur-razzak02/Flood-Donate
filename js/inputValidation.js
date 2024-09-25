// input validate

//   Noakhali input validate 
document
  .getElementById("noakhaliInputBtn")
  .addEventListener("click", function () {
    const balance = currentBalance("accountBalance");
    const inputNumber = donationAmmount("inputAmmountNoakhali");
    console.log(inputNumber);

    if (isNaN(inputNumber)) {
      alert("Invalid Input");
      return;
    }
    if (isNaN(inputNumber) || inputNumber === "") {
      alert("Invalid Input");
      return;
    }
    else if (inputNumber > balance) {
      alert("Iinsufficient Balance");
      return;
    }
  });

//   feni input validate 
document
  .getElementById("feniInputBtn")
  .addEventListener("click", function () {
    const balance = currentBalance("accountBalance");
    const inputNumber = donationAmmount("inputAmmountFeni");
    console.log(inputNumber);

    if (isNaN(inputNumber)) {
      alert("Invalid Input");
      return;
    }
    if (isNaN(inputNumber) || inputNumber === "") {
      alert("Invalid Input");
      return;
    }
    else if (inputNumber > balance) {
      alert("Iinsufficient Balance");
      return;
    }
  });

//   Sylhet input validate 
document
  .getElementById("sylhetInputBtn")
  .addEventListener("click", function () {
    const balance = currentBalance("accountBalance");
    const inputNumber = donationAmmount("inputAmmountSylhet");
    console.log(inputNumber);

    if (isNaN(inputNumber)) {
      alert("Invalid Input");
      return;
    }
    if (isNaN(inputNumber) || inputNumber === "") {
      alert("Invalid Input");
      return;
    }
    else if (inputNumber > balance) {
      alert("Iinsufficient Balance");
      return;
    }
  });

// Sunamganj input validate 
document
  .getElementById("sunamganjInputBtn")
  .addEventListener("click", function () {
    const balance = currentBalance("accountBalance");
    const inputNumber = donationAmmount("inputAmmountSunamganj");
    console.log(inputNumber);

    if (isNaN(inputNumber)) {
      alert("Invalid Input");
      return;
    }
    if (isNaN(inputNumber) || inputNumber === "") {
      alert("Invalid Input");
      return;
    }
    else if (inputNumber > balance) {
      alert("Iinsufficient Balance");
      return;
    }
  });

// Quotat input validate 
document
  .getElementById("quotaInputBtn")
  .addEventListener("click", function () {
    const balance = currentBalance("accountBalance");
    const inputNumber = donationAmmount("inputAmmountQuota");
    console.log(inputNumber);

    if (isNaN(inputNumber)) {
      alert("Invalid Input");
      return;
    }
    if (isNaN(inputNumber) || inputNumber === "") {
      alert("Invalid Input");
      return;
    }
    else if (inputNumber > balance) {
      alert("Iinsufficient Balance");
      return;
    }
  });