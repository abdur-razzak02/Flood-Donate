
// input validate

// function inputValidate(id) {

document.getElementById('noakhaliInputBtn').addEventListener('click', function () {
        
    const inputNumber = donationAmmount('inputAmmountNoakhali');
    console.log(inputNumber);

    if (isNaN(inputNumber) || inputNumber !== '') {
        alert('Invalid Input its not a number');
        return;
    }
    
        // const title = document.getElementById('donationTitle').innerText;
        // const balance = currentBalance('accountBalance');
        // if (isNaN(inputNumber) || inputNumber === '') {
        //     alert('Invalid Input');    
        //     return;
        // }
        // else if (inputNumber > balance) {
        //     alert('Iinsufficient Balance');
        //     return;
        // }
        // else {
        //     const div = document.createElement('div');
        //     div.classList.add('space-y-5');
        //     div.innerHTML = `
        //     <div class="border rounded-lg p-5 mb-5">
        //         <h1 class="text-xl font-semibold mb-2">${inputNumber} Tk donated to ${title} </h1>
        //         <p class="text-base text-gray-500">Date: ${new Date()}</p>
        //         </div>
        //     `
        //     document.getElementById('donationHistory').appendChild(div);
        // }  
    })
    
// }
    
//     inputValidate('noakhaliInputBtn')