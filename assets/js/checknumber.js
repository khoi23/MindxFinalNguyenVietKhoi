const btnOffline = document.getElementById('give-payment-offline'),
 btnOnline = document.getElementById('give-payment-online'),
    ipAddress = document.getElementById('payment-input-address'),
    ipCard = document.getElementById('payment-input-card')

if(btnOffline) {
    btnOffline.addEventListener('click', () => {
        ipAddress.classList.add('show-address');
        ipCard.classList.add('hide-address');
        ipCard.classList.remove('show-address');
        ipAddress.classList.remove('hide-address');
    });
}
if(btnOnline) {
    btnOnline.addEventListener('click', () => {
        ipCard.classList.add('show-address');
        ipAddress.classList.add('hide-address');
        ipAddress.classList.remove('show-address');
        ipCard.classList.remove('hide-address');
    });
}



let inputBtn = document.getElementById("donate-total-input")


//parameter passed from button (Parameter same as category)
function numberInput(value) {
    //Button class code
    let  listBtn = document.querySelectorAll(".total-btn");
    listBtn.forEach((num) => {
        if (value.toUpperCase() == num.innerText.toUpperCase() && value == 'custom') {
            num.classList.add("total-active");
            document.getElementById('donate-total-input').focus()
            document.getElementById('donate-total-input').setAttribute('value', ``)
        }
        //check if value equals innerText
        else if (value == num.innerText) {
            num.classList.add("total-active");
            document.getElementById('donate-total-input').setAttribute('value', `${value}`)
            document.getElementById('payment-button').innerHTML = `Donate $${value}`
        } else {
            num.classList.remove("total-active");
        }
    });
}

inputBtn.addEventListener('change', (e) => {
    e.preventDefault();
    getValue();
});
function getValue() {
    let totalBtn = document.getElementById("donate-total-input").value.trim();
    document.getElementById('payment-button').innerHTML = `Donate $${totalBtn}`
    console.log(totalBtn);
};

window.onload = () => {
    numberInput(25.00);
};
