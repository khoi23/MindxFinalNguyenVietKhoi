let totalBtn = document.querySelectorAll(".total-btn");
console.log(totalBtn);

//parameter passed from button (Parameter same as category)
function numberInput(value) {
    //Button class code
    let totalBtn = document.querySelectorAll(".total-btn");
    totalBtn.forEach((num) => {
        if (value.toUpperCase() == num.innerText.toUpperCase() && value == 'custom') {
            num.classList.add("total-active");
            document.getElementById('donate-total-input').focus()
            document.getElementById('donate-total-input').setAttribute('value', ``)
        }
        //check if value equals innerText
        else if (value == num.innerText) {
            num.classList.add("total-active");
            document.getElementById('donate-total-input').blur()
            document.getElementById('donate-total-input').setAttribute('value', `${value}`)
        } else {
            num.classList.remove("total-active");   
        }
    });
    
}

window.onload = () => {
    numberInput(25.00);
};
  